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

Contact us: 
* <roman.kazantsev@graphics.cs.msu.ru>
* <sergey.zvezdakov@graphics.cs.msu.ru>
* <dmitriy.vatolin@graphics.cs.msu.ru>
* <video@compression.ru>

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
Modern video codecs have many compression-tuning parameters from which numerous conﬁgurations (presets) can be constructed. The large number of presets complicates the search for one that delivers optimal encoding time, quality, and compressed-video size. This paper presents a machine-learning-based method that helps to solve this problem. We applied the method to the x264 video codec: it searches for optimal presets that demonstrate 9-20% bitrate savings relative to standard x264 presets with comparable compressed-video quality and encoding time. Our method is faster upto 10 times than existing solutions.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- And then use -->
<div>
    <button class="download-button" role="button" onclick="location.href = 'link/to/article.pdf'">
        <i class="fa fa-download"></i>
        Download Full Text
    </button>
    <p class="download-button-caption">(PDF,&nbsp;?&nbsp;MB)</p>
</div>



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
| &nbsp; &nbsp; Sequence &nbsp; &nbsp;  | &nbsp; Faster &nbsp; |  &nbsp; Fast &nbsp; | &nbsp; Medium &nbsp; | &nbsp; Slow &nbsp; | &nbsp; Slower &nbsp; | &nbsp; Veryslow &nbsp; | &nbsp; Placebo &nbsp; | Time,sec |
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

## Contact us

For questions and propositions, please contact us: <roman.kazantsev@graphics.cs.msu.ru>, <sergey.zvezdakov@graphics.cs.msu.ru>, <dmitriy.vatolin@graphics.cs.msu.ru>, and <video@compression.ru>

## See also 
* [Machine-Learning-Based Method for Content-Adaptive Video Encoding](https://www.researchgate.net/publication/353491818_Machine-Learning-Based_Method_for_Content-Adaptive_Video_Encoding)
* [Power Consumption of Video-Decoders on Various Android Devices](https://ieeexplore.ieee.org/document/9477481)
* [Video-Decoder Power Consumption on Android Devices: Power-Estimation Method, Dataset Creation, and Analysis Results](https://ieeexplore.ieee.org/document/9418729)
* [MSU Mobile Video Codecs Benchmark](https://videoprocessing.ai/benchmarks/mobile-video-codec-benchmark.html)
* [Our other benchmarks](https://videoprocessing.ai/benchmarks/)

## References

1) V. Popov, “Automatic method of choosing pareto optimal video codec’s parameters,” M.S. thesis, Lomonosov Moscow State University, 2009. [2]

2) K. Deb, A. Pratap, S. Agarwal, and T. Meyarivan, “A fast and elitist multiobjective genetic algorithm: NSGA-II,” IEEE Transactions on Evolutionary Computation, vol.6, no. 2, pp. 182–197, August 2002. [3]

3) S. Zvezdakov and D. Vatolin, “Building a x264 video codec model,” in Innovative technologies in cinema and education: IV International Symposium, Moscow, Russia, 2017, pp. 56–65, VGIK Moscow. [4]

4) Telecommunication Standardization Sector of ITU, “Subjective video quality assessment methods for multimedia applications,” in Series P. Telephone Transmission Quality, Telephone Installations, Local Line Networks, pp. 4–6. April 2008. [7]

5) K. Simonyan, S. Grishin, D. Vatolin, and D. Popov, “Fast video super-resolution via classification,” in Proceedings of 15th IEEE International Conference on Image Processing, San Diego, CA, USA, October 2008, pp. 349–352. [9]

6) F. Crete-Roffet, T. Dolmiere, P. Ladret, and M. Nicolas., “The blur effect: Perception and estimation with a new no-reference perceptual blur metric,” in SPIE Electronic Imaging Symposium Conf Human Vision and Electronic Imaging, San Jose, CA, USA, January 2007, pp. 6492–6516. [10]

7) R. Bansal, G. Raj, and T. Choudhury, “Blur image detection using laplacian operator and opencv,” in Proceedings of the SMART-2016, Moradabad, India, November 2016. [11]

8) N. Lakshmi, Y. Latha, A. Damodharam, and K. Prasanna, “Implementation of content based video classification using hidden markov model,” in Proceedings of 7th International Advance Computing Conference (IACC), Hyderabad, India, January 2017. [12]
