---
title: 'Stereoscopic quality assessment of 1,000 VR180 videos using 8
metrics'
permalink: /stereoscopic-quality-assessment
features:
  - "Analysis of stereoscopic quality for 1,000 VR180 YouTube videos"
  - "Using eight objective metrics"
  - "Analysis of Common 3D-Shooting Artifacts"
---

### S.Lavrushkin, I.Molodetskikh, K.Kozhemyakov, D.Vatolin

Contact us: 
* <sergey.lavrushkin@graphics.cs.msu.ru>
* <ivan.molodetskikh@graphics.cs.msu.ru>
* <dmitriy.vatolin@graphics.cs.msu.ru>
* <video@compression.ru>

## Abstract
In this work we present a large-scale analysis of stereoscopic quality for 1,000 VR180 YouTube videos. VR180 is a new S3D format for VR devices which stores the view for only
a single hemisphere. Instead of a multi-camera rig, this format requires just two cameras with fisheye lenses similar to conventional 3D-shooting, resulting in cost reduction of the final device and simplification of the shooting process. But as in the conventional stereoscopic format, VR180 videos suffer from stereoscopy-related problems specific to 3D shooting. In this paper we analyze videos to detect the most common stereoscopic artifacts using objective quality metrics, including color, sharpness and geometry mismatch between views and more. Our study depicts the current state of S3D technical quality of VR180 videos and reveals its overall poor condition, as most of the analyzed videos exhibit
at least one of the stereoscopic artifacts, which shows a necessity for stereoscopic quality control in modern VR180 shooting.

<!-- Add Download Full Text button-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
<button class="download-button" role="button" onclick="location.href = 'https://drive.google.com/uc?id=1yZkw-BN0OeYWkZWDRNy8aGsYVBOpJuqq'"> <!-- Insert link here-->
    <i class="fa fa-download"></i>
    Download Full Text
</button>
<p class="download-button-caption">(PDF, 9.1 MB)</p>  <!-- Insert correct filesize here-->
</div>

## Key Features
* Analysis of stereoscopic quality for 1,000 VR180 YouTube videos
* Using eight objective metrics
* Analysis of Common 3D-Shooting Artifacts
<!-- 
Main part of the page
 -->

<style>
    .examples {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 5px;
    }

    .small-example {
        text-align: center;
        width:175px;
        height: 175px;
    }
    .example {
        text-align: center;
    }
    .big-example {
        text-align: center;
        margin-bottom: 15px;
    }

    @media (min-width: 450px) {
        .example {
            max-width: calc(50% - 10px);
        }
    }
</style>

## Dataset statistics
Below you can see VR180-video distribution by number of YouTube views and by duration (in seconds).

<div class="examples">
    <div class="example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic1.png" alt="distribution of videos by view count"/><br>
        <i>(a)View count.</i>
    </div>
    <div class="example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic2.png" alt="distribution of videos by duration"/><br>
        <i>(b) Duration.</i>
    </div>
</div>

## Depth-budget analysis
This picture shows the average disparities of the closest and farthest objects in the videos we evaluated.
<div class="big-example">
    <img src="/assets/img/papers/stereoscopic-quality-assessment/pic3.png" alt="The average disparities of the closest and farthest objects">
    <i>Overall results relative to video release date.</i>
</div>

Here you can see breakdowns of scene depth budget for each video. The x-axis represents the different videos, and the y-axis uses bars to represent how many shots in each video have a good, average or bad depth budget.
<div class="big-example">
    <img src="/assets/img/papers/stereoscopic-quality-assessment/pic4.png" alt="Depth budget of scenes for each video.">
    <i>Depth budget of scenes for each video.</i>
</div>

## Common 3D-Shooting Artifacts
For all 1,000 VR180 videos, we calculated scores for each
geometric distortion: vertical shift, scale mismatch, rotation mismatch, color mismatch and sharpness mismatch. Some of them are presented below.
 <i> <br> <br>
Results of vertical-parallax analysis for VR180 videos.</i>
<div class="examples">
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic5.png" alt="(a) Overall results relative to number of YouTube views."/><br>
        <i>(a) Overall results relative to number of YouTube views.</i>
    </div>
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic6.png" alt="(b) Overall results relative to video release date."/><br>
        <i>(b) Overall results relative to video release date.</i>
    </div>
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic7.png" alt="(c) Overall results relative to video duration"/><br>
        <i>(c) Overall results relative to video duration.</i>
    </div>
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic8.png" alt="(d) Average vertical parallax for each video."/><br>
        <i>(d) Average vertical parallax for each video.</i>
    </div>
</div>
 <i> <br>
Results of scale-mismatch analysis for VR180 videos</i>
<div class="examples">
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic9.png" alt="(a) Overall results relative to number of YouTube views."/><br>
        <i>(a) Overall results relative to number of YouTube views.</i>
    </div>
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic10.png" alt="(b) Overall results relative to video release date."/><br>
        <i>(b) Overall results relative to video release date.</i>
    </div>
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic11.png" alt="(c) Overall results relative to video duration"/><br>
        <i>(c) Overall results relative to video duration.</i>
    </div>
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic12.png" alt="(d) Average scale mismatch for each video."/><br>
        <i>(d) Average scale mismatch for each video.</i>
    </div>
</div>

<i> <br>
 Results of color-mismatch analysis for VR180 videos.</i>
<div class="examples">
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic13.png" alt="(a) Overall results relative to number of YouTube views."/><br>
        <i>(a) Overall results relative to number of YouTube views.</i>
    </div>
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic14.png" alt="(b) Overall results relative to video release date."/><br>
        <i>(b) Overall results relative to video release date.</i>
    </div>
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic15.png" alt="(c) Overall results relative to video duration"/><br>
        <i>(c) Overall results relative to video duration.</i>
    </div>
    <div class="small-example">
        <img src="/assets/img/papers/stereoscopic-quality-assessment/pic16.png" alt="(d) Average scale mismatch for each video."/><br>
        <i>(d) Average color mismatch for each video.</i>
    </div>
</div>
## Cite us
{% highlight BibTeX %}
@article{article,
author = {Lavrushkin, Sergey and Molodetskikh, Ivan and Kozhemyakov, Konstantin and Vatolin, Dmitriy},
year = {2021},
month = {01},
pages = {350-1},
title = {Stereoscopic quality assessment of 1,000 VR180 videos using 8 metrics},
volume = {2021},
journal = {Electronic Imaging},
doi = {10.2352/ISSN.2470-1173.2021.2.SDA-350}
}

{% endhighlight %}

## See also 
* [Video Quality Measurement Tool 3D](https://videoprocessing.ai/stereo_quality/)
* [Neural-Network-Based Detection Methods for Color, Sharpness, and Geometry Artifacts in Stereoscopic and VR180 Videos](https://ieeexplore.ieee.org/document/9376385) 
* [Stereoscopic Dataset from A Video Game: Detecting Converged Axes and Perspective Distortions in S3D Videos](https://ieeexplore.ieee.org/document/9376375)
* [MSU benchmarks](https://videoprocessing.ai/benchmarks/)
