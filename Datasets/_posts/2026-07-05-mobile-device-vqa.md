---
title: Learning Flexible Generalization in Video Quality Assessment by Bringing Device and Viewing Condition Distributions
permalink: /device-viewing-conditions
features:
  - First large-scale dataset across 300+ Android devices
  - Device and viewing condition metadata
  - Flexible VQA adaptation to real-world conditions
---


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


## Mobile Device Video Quality Assessment Dataset

Video quality assessment (VQA) plays a critical role in optimizing video delivery systems. Perceived quality strongly depends on viewing conditions and display characteristics — factors such as ambient lighting, display brightness, and resolution significantly influence the visibility of distortions.

We address multi-screen quality assessment on mobile devices, an area that remains largely under-covered. We introduce the **first large-scale subjective dataset** collected across more than **300 different Android devices**, accompanied by metadata on viewing conditions and display properties. We propose a strategy for aggregated score extraction and adaptation of VQA models to device-specific quality estimation.

<p align="center">
  <img src="/assets/img/papers/mobile-vqa/kdpv2.png" style="width: 90%; border-radius: 8px;" alt="Overview: how viewing conditions affect quality perception"/>
</p>

Our results demonstrate that incorporating device and context information enables more accurate and flexible quality prediction, offering new opportunities for fine-grained optimization in streaming services.

<div>
<button class="download-button" role="button" onclick="window.open('https://icml.cc/virtual/2026/poster/63617')">
    <i class="fa fa-external-link"></i>
    ICML 2026
</button>
<button class="download-button" role="button" disabled style="opacity: 0.5; cursor: default;">
    <i class="fa fa-database"></i>
    Dataset <span style="font-size: 11px; font-weight: normal;">to be published</span>
</button>
</div>



## <span id="cite"></span> Cite us

{% highlight BibTeX %}
@inproceedings{safonov2026mobilevqa,
  author    = {Nickolay Safonov and Dmitriy Vatolin},
  title     = {Learning Flexible Generalization in Video Quality Assessment by Bringing Device and Viewing Condition Distributions},
  booktitle = {Proceedings of the 43rd International Conference on Machine Learning},
  series    = {Proceedings of Machine Learning Research},
  year      = {2026},
  publisher = {PMLR},
  url       = {https://icml.cc/virtual/2026/poster/63617}
}
{% endhighlight %}
