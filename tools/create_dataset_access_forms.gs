// Usage:
// 1. Open https://script.google.com/ and create a new Apps Script project.
// 2. Paste this file into Code.gs.
// 3. Optional: set NOTIFICATION_EMAIL to the mailbox that should receive requests.
// 4. Run createDatasetAccessForms() once and approve the requested permissions.
// 5. Copy the YAML block from the execution log into _data/dataset_access_forms.yml.

const NOTIFICATION_EMAIL = "";

const DATASETS = [
  {
    key: "screen_content",
    name: "Screen Content Video Dataset",
  },
  {
    key: "nvc",
    name: "Neural Video Compression Dataset",
  },
  {
    key: "mobile_device_vqa",
    name: "Mobile Device VQA Dataset",
  },
];

function createDatasetAccessForms() {
  const ownerEmail = getNotificationEmail_();
  const result = [];

  DATASETS.forEach((dataset) => {
    const form = FormApp.create("Request access to dataset", true)
      .setDescription(
        "Please fill in this form to request access to the " +
          dataset.name +
          ". We will review your request and contact you by email."
      )
      .setCollectEmail(true)
      .setAllowResponseEdits(false)
      .setLimitOneResponsePerUser(false)
      .setProgressBar(true)
      .setShowLinkToRespondAgain(false)
      .setConfirmationMessage(
        "Thank you. We received your request and will contact you by email."
      );

    form.addTextItem().setTitle("Full name").setRequired(true);
    form.addTextItem().setTitle("Organization").setRequired(true);
    form.addTextItem().setTitle("Position / role").setRequired(false);
    form.addTextItem().setTitle("Institutional email").setRequired(true);
    form.addParagraphTextItem().setTitle("Intended use").setRequired(true);
    form
      .addMultipleChoiceItem()
      .setTitle("Use category")
      .setChoiceValues([
        "Academic research",
        "Industrial research",
        "Education",
        "Other",
      ])
      .setRequired(true);
    form
      .addCheckboxItem()
      .setTitle("Agreement")
      .setChoiceValues([
        "I will use the dataset only for research or evaluation purposes and will not redistribute it.",
      ])
      .setRequired(true);
    form.addParagraphTextItem().setTitle("Additional comments").setRequired(false);

    PropertiesService.getScriptProperties().setProperty(
      form.getId(),
      dataset.name
    );

    ScriptApp.newTrigger("sendDatasetAccessNotification")
      .forForm(form)
      .onFormSubmit()
      .create();

    result.push({
      key: dataset.key,
      name: dataset.name,
      formUrl: form.getPublishedUrl(),
      editUrl: form.getEditUrl(),
      notificationEmail: ownerEmail,
    });
  });

  Logger.log("Paste this into _data/dataset_access_forms.yml:\n\n" + toYaml_(result));
  Logger.log("Form edit URLs:\n\n" + toEditUrlList_(result));
}

function sendDatasetAccessNotification(e) {
  const response = e.response;
  const form = e.source;
  const datasetName =
    PropertiesService.getScriptProperties().getProperty(form.getId()) ||
    form.getTitle();
  const respondentEmail = response.getRespondentEmail() || "Not collected";
  const submittedAt = Utilities.formatDate(
    response.getTimestamp(),
    Session.getScriptTimeZone(),
    "yyyy-MM-dd HH:mm:ss"
  );

  const answers = response
    .getItemResponses()
    .map((itemResponse) => {
      const answer = itemResponse.getResponse();
      return (
        itemResponse.getItem().getTitle() +
        ": " +
        (Array.isArray(answer) ? answer.join(", ") : answer)
      );
    })
    .join("\n");

  MailApp.sendEmail({
    to: getNotificationEmail_(),
    subject: "Dataset access request: " + datasetName,
    body:
      "A new dataset access request has been submitted.\n\n" +
      "Dataset: " +
      datasetName +
      "\n" +
      "Respondent email: " +
      respondentEmail +
      "\n" +
      "Submitted at: " +
      submittedAt +
      "\n\n" +
      answers +
      "\n\n" +
      "Edit response: " +
      response.getEditResponseUrl(),
  });
}

function getNotificationEmail_() {
  const email = NOTIFICATION_EMAIL || Session.getEffectiveUser().getEmail();
  if (!email) {
    throw new Error("Set NOTIFICATION_EMAIL before running this script.");
  }
  return email;
}

function toYaml_(forms) {
  return forms
    .map((form) => {
      return (
        form.key +
        ':\n  dataset_name: "' +
        form.name +
        '"\n  url: "' +
        form.formUrl +
        '"'
      );
    })
    .join("\n\n");
}

function toEditUrlList_(forms) {
  return forms
    .map((form) => form.name + ":\n" + form.editUrl)
    .join("\n\n");
}
