---
title: Machine-Learning-Based Method for Finding Optimal Video-Codec Conﬁgurations Using Physical Input-Video Features
permalink: /codec-configuration
features:
  - "9-20% bitrate savings against x264 standard presets"
  - "Faster by 10 times than other existing solutions"
  - "More than 350 videos and 1300 presets of x264 codec in the developed dataset"
  - "13 considered video physical features"
---

### R. Kazantsev, S. Zvezdakov, and D. Vatolin

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

<div class="subproject-links">
    <a href="/" class="button">Home</a>
    <a href="#dataset" class="button">Dataset</a>
    <a href="#method" class="button">Proposed method</a>
    <a href="#results" class="button">Results</a>
    <a href="#comparison" class="button">Comparison</a>
    <a href="#cite" class="button">Citation</a>
</div>


## Abstract
Modern video codecs have many compression-tuning parameters from which numerous conﬁgurations (presets) can be constructed. The large number of presets complicates the search for one that delivers optimal encoding time, quality, and compressed-video size. This paper presents a machine-learning-based method that helps to solve this problem. We applied the method to the x264 video codec: it searches for optimal presets that demonstrate 9-20% bitrate savings relative to standard x264 presets with comparable compressed-video quality and encoding time. Our method is faster upto 10 times than existing solutions.

**Read full text of the paper [here](https://www.researchgate.net/publication/341835992_Machine-Learning-Based_Method_for_Finding_Optimal_Video-Codec_Configurations_Using_Physical_Input-Video_Features).** <!-- Link to the paper -->


## Key Features
*  Proposed machine-learning-based method is capable of finding the preset that
    * provides **9-20% bitrate savings** against x264 standard presets
    * is faster than other existing solutions by **10 times**
* Developed dataset contains more than **350 videos** and **1300 presets** of x264 codec
* **13 video physical features** are compared during the research
    * *Lap Blur* (acutance metric) and *TI ME* (temporal complexity) are the most relevant


## <span id="dataset"></span> Dataset
The following were computed for each video-preset pair:
* encoding time
* objective quality metric — *SSIM*
* a size of bitstream resulted by encoding

The scatter plot below demonstrates inefficiency of standard presets and Pareto-optimal presets for a different video.

<img src="/assets/img/papers/codec-configuration/dataset.png">


## <span id="method"></span> Proposed method
* **Training**
    1. Cluster videos according to similarity of Pareto-frontier structures. Four clusters were obtained
    2. Assign to each cluster the Pareto-optimal set of some video from this cluster
    3. Train a model that predicts a cluster using the physical video features 
* **Inference**
    1. Compute the physical features for input video
    2. Predict a cluster using the model and output Pareto- optimal set assigned to the predicted cluster


## <span id="results"></span> Results

The chart below shows the importance of physical video features in trained model.

{% include papers/codec_config/plots.html %}

Below you can see average bitrates delivered using optimal, predicted, and standard presets over all train videos in each cluster.

<img src="/assets/img/papers/codec-configuration/bitrates.png">


## <span id="comparison"></span> Comparison

<style>
.tablelines table, .tablelines td, .tablelines th {
        border: 0.8px solid black;
        }
</style>

Below the average bitrate savings [%] of the predicted presets versus standard presets are proposed, as well as execution time obtained using different methods.

|-----------------+-------------------+-----------------+----------------+----------------+----------------+----------------+----------------+----------------|
| &nbsp; &nbsp; Sequence &nbsp; &nbsp; | &nbsp; Faster &nbsp; |  &nbsp; Fast &nbsp; | &nbsp; Medium &nbsp; | &nbsp; Slow &nbsp; | &nbsp; Slower &nbsp; | &nbsp; Veryslow &nbsp; | &nbsp; Placebo &nbsp; | Time,sec |
|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| *NSGA-II* | 15.9 | 30.2 | 29.7 | 34.9 | 32.2 | 29.0 | 28.3 | 13684.4 |
| *Popov's* | 8.0 | 29.0 | 28.4 | 34.9 | 32.2 | 28.3 | 29.0 | 10039.7 |
| *Zvezdakov's* | 11.0 | 30.2 | 29.8 | 34.9 | 32.2 | 28.7 | 29.4 | 7705.2 |
|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| **Ours** | 15.8 | 21.3 | 21.8 | 27.7 | 24.9 | 9.7 | 10.5 | **735.5** |
{: .tablelines}

The second table shows bitrate savings [%] obtained using the predicted presets versus the standard presets on JVET videos.

|-----------------+------------+-----------------+----------------+----------------+----------------+----------------+----------------+----------------|
| &nbsp; &nbsp; &nbsp; Sequence &nbsp; &nbsp; &nbsp; | &nbsp; Faster &nbsp; | &nbsp; Fast &nbsp; | &nbsp; Medium &nbsp; | &nbsp; Slow &nbsp; | &nbsp; Slower &nbsp; | &nbsp; Veryslow &nbsp; | &nbsp; Placebo &nbsp; |
|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| *Cactus* | 6.0 | 16.5 | 17.5 | 15.0 | 13.3 | 8.0 | 15.7 | 
| *DugsAndLegs* | 17.2 | 27.9 | 26.5 | 21.0 | 15.4 | 1.3 | 11.5 | 
| *KristenAndSara* | 4.5 | 12.3 | 16.0 | 24.7 | 25.1 | 0.0 | 9.0 | 
| *ParkScene* | 12.6 | 17.5 | 29.0 | 22.8 | 19.0 | 14.1 | 16.3 | 
| *PeopleOnStreet* | 16.8 | 21.9 | 27.6 | 33.7 | 31.4 | 20.2 | 29.8 | 
|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|:---------------:|
| **Average** | 11.4 | 19.2 | 23.3 | 23.4 | 20.8 | 8.7 | 16.4 | 
{: .tablelines}


## <span id="cite"></span> Cite us

{% highlight BibTeX %}
@inproceedings{inproceedings,
author = {Kazantsev, Roman and Zvezdakov, Sergey and Vatolin, Dmitriy},
year = {2020},
month = {03},
pages = {374-374},
title = {Machine-Learning-Based Method for Finding Optimal Video-Codec Configurations Using Physical Input-Video Features},
doi = {10.1109/DCC47342.2020.00079}
}
{% endhighlight %}
