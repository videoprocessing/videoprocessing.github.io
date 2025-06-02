---
title: Screen content video dataset and benchmark
permalink: /screencontent-dataset
---

### N. Safonov, M. Rakhmanov, D. Vatolin

### Publication name

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


## Abstract
Screen sharing is a common feature in video conferencing applications, especially for remote work and presentations. However, internet conditions such as limited bandwidth, packet loss, and compression can significantly reduce the visual quality of shared screen content. Most existing video quality metrics are designed for natural scenes and were not benchmarked on screen content. In this work, we present a large-scale subjective dataset of screen content videos captured from video conferencing apps. The dataset includes 1,600 distorted videos with corresponding subjective quality scores. Subjective scores were collected using crowdsourced pairwise comparisons. The dataset provides a valuable resource for developing and benchmarking video quality metrics tailored to screen content. The evaluation of objective metrics revealed that several generalpurpose quality metrics outperform both full-reference and noreference metrics. The dataset is available at the following link:
https://videoprocessing.github.io/screen-content-dataset.
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


## Screen content Dataset


<video autoplay loop muted playsinline width="100%">
    <source src="/assets/videos/datasets/sc_dataset_compr.webm" type='video/webm'>
</video>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
<button class="download-button" role="button" onclick="window.open('https://titan.gml-team.ru:5003/sharing/5gBwOteQ6')"> <!-- Insert link here-->
    <i class="fa fa-download"></i>
    Download
</button>
</div>

## <span id="cite"></span> Cite us

{% highlight BibTeX %}
{% endhighlight %}


## Contact us

For questions, propositions please contact authors: <nikolay.safonov@graphics.cs.msu.ru>, <mihail.rakhmanov@graphics.cs.msu.ru>, <dmitriy@graphics.cs.msu.ru> 