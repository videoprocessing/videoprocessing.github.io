---
title: Video compression dataset and benchmark of learning-based video-quality metrics
permalink: /vc_dataset_vqm_benchmark
features:
  - "Largest compression dataset in this area (<b>2500+</b> streams)"
  - "83 codecs of different compression standards"
  - "<b>760.000+</b> subjective responds"
  - "Both <b>VQA and IQA</b>, <b>NR and FR</b> metrics"
  - "<b>25+</b> metrics without variations"
  - "<b>150+</b> metrics with variations"
---

### A. Antsiferova, S. Lavrushkin, M. Smirnov, A. Gushchin,<br>D. S. Vatolin, and D. Kulikov

### Thirty-sixth Conference on Neural Information Processing Systems (NeurIPS | 2022) 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
   src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>
    .subproject-links {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .subproject-links a {
        background-color: #f0f0f0;
        color: black;
        font-size: 16px;
        padding: 10px 15px;

        text-align: center;
        text-decoration: none;

        margin: 4px 8px;
        border-radius: 10px;
    }

    .subproject-links a:hover {
        background-color: #e0e0e0;
        text-decoration: none;
    }

</style>



##### [NeurIPS Poster](https://neurips.cc/virtual/2022/poster/55617) | [Benchmark Main Page](https://videoprocessing.ai/benchmarks/video-quality-metrics.html) | [OpenReview Page](https://openreview.net/forum?id=My5AI9aM49R) | [Dataset Page](https://videoprocessing.ai/datasets/vqa.html) 

<a target="_blank" href="https://neurips.cc/virtual/2022/poster/55617"><img src="/assets/img/papers/video_compression_dataset_and_benchmark/paper_preview.jpg">

## Abstract
Video-quality measurement is a critical task in video processing. Nowadays, many implementations of new encoding standards - such as AV1, VVC, and LCEVC - use deep-learning-based decoding algorithms with perceptual metrics that serve as optimization objectives. But investigations of the performance of modern video- and image-quality metrics commonly employ videos compressed using older standards, such as AVC. In this paper, we present a new benchmark for video-quality metrics that evaluates video compression. It is based on a new dataset consisting of about 2,500 streams encoded using different standards, including AVC, HEVC, AV1, VP9, and VVC.  Subjective scores were collected using crowdsourced pairwise comparisons. The list of evaluated metrics includes recent ones based on machine learning and neural networks. The results demonstrate that new no-reference metrics exhibit high correlation with subjective quality and approach the capability of top full-reference metrics.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- And then use -->
<div>
    <button class="download-button" role="button" onclick="location.href = 'https://openreview.net/pdf?id=My5AI9aM49R'">
        <i class="fa fa-download"></i>
        Read Full Text
    </button>
    <p class="download-button-caption"></p>
</div>


## Leaderboard

On our benchmark page you can find even more image and video quality metrics. 

<a target="_blank" href="https://videoprocessing.ai/benchmarks/video-quality-metrics_both.html"><img src = "/assets/img/papers/video_compression_dataset_and_benchmark/full_dataset_results.jpg">

## Video Compression Dataset


<style>
    input {
        padding: 1em;
        border: 0;
        background-color: #F0F0F0;
        border-radius: 4px;
        font-size: 1em;
    }

    button {
        padding: 1em 0;
        border: 0;
        border-radius: 4px;
        background-color: #496E93;
        color: white;
        cursor: pointer;
        font-size: 1em;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 300px;
    }
</style>



<video autoplay loop muted playsinline width="100%">
    <source src="/assets/videos/papers/dataset_preview.webm" type='video/webm'>
</video>

<form action="https://download.compression.ru/mailer_savam/SAVAM_Request_Mail_sender.php" method="POST">
     <input type="text" name="name" placeholder="Name" required="">
     <input type="text" name="email" placeholder="Email" required="">
     <input type="text" name="WorkName" placeholder="How did you hear about us" required="">
     <input type="hidden" name="submit" value="VQA_submit">
     <button>Get Download Link</button>
</form>

## <span id="cite"></span> Cite us

{% highlight BibTeX %}
@inproceedings{
    antsiferova2022video,
    title={Video compression dataset and benchmark of learning-based video-quality metrics},
    author={Anastasia Antsiferova and Sergey Lavrushkin and Maksim Smirnov and Aleksandr Gushchin and Dmitriy S. Vatolin and Dmitriy Kulikov},
    booktitle={Thirty-sixth Conference on Neural Information Processing Systems Datasets and Benchmarks Track},
    year={2022},
    url={https://openreview.net/forum?id=My5AI9aM49R}
}
{% endhighlight %}


## Contact us

For questions, propositions, or to participate in our benchmark, please write to our main email:  <vqa@videoprocessing.ai>, or contact authors: <aantsiferova@graphics.cs.msu.ru>. <sergey.lavrushkin@graphics.cs.msu.ru>, <maxim.smirnov.2025@graphics.cs.msu.ru>, <alexander.gushchin@graphics.cs.msu.ru>, <dmitriy@graphics.cs.msu.ru>, <dkulikov@graphics.cs.msu.ru>

