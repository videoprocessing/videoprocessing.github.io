---
title: 'Stereoscopic dataset from a video game: detecting converged axes and perspective distortions in S3D videos'
permalink: /stereoscopic-dataset
features:
  - "Dataset with a synthetic set of frame sequences from GTA V video game"
  - "Suitable for stereoscopic video analysis and processing"
  - "4000 frames for the training set and 500 for the test set"
---

### K. Malyshev, S. Lavrushkin, and D. Vatolin

Contact us: 
* <kirill.malyshev@graphics.cs.msu.ru>
* <sergey.lavrushkin@graphics.cs.msu.ru>
* <dmitriy.vatolin@graphics.cs.msu.ru>
* <video@compression.ru>

## Abstract
This paper presents a method for generating stereoscopic or multi-angle video frames using a computer game (Grand Theft Auto V). We developed a mod that captures synthetic frames allows us to create geometric distortions like those that occur in a real video. These distortions are the main cause of viewer discomfort when watching 3D movies. Datasets generated in this way can aid in solving problems related to machine-learning-based assessment of stereoscopic or multi-angle-video quality. We trained a convolutional neural network to evaluate perspective distortions and converged camera axes in stereoscopic video, then tested it on real 3D movies. The neural network discovered multiple examples of these distortions.

<!-- Add Download Full Text button-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
<button class="download-button" role="button" onclick="location.href = 'https://drive.google.com/uc?id=1vaZEFD_9KjdsK2bVCNaZGacTQfaYTN5-'"> <!-- Insert link here-->
    <i class="fa fa-download"></i>
    Download Full Text
</button>
<p class="download-button-caption">(PDF, 9.4 MB)</p>  <!-- Insert correct filesize here-->
</div>

## Key Features
* Dataset with a synthetic set of frame sequences from GTA V video game
* Suitable for stereoscopic video analysis and processing 
* 4000 frames for the training set and 500 for the test set
* Pearson correlation coefficient is **0.956** for converged axes and **0.859** for perspective distortion
<!-- 
Main part of the page
 -->

## Mod description 
We developed our own mod that captures synthetic frames in GTA V. It includes a set of parameters for adjusting the camera to generate stereoscopic sequences with various geometric distortions.

<style>
    .examples {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 15px;
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

<div class="examples">
    <div class="example">
      <i>Processed frame with perspective distortion. The right camera is 8 cm higher than the left.</i>
        <img src="/assets/img/papers/stereoscopic-dataset/pic1.png" alt="frames"/><br>
        <i>(a)Enlarged area</i>
    </div>
    <div class="example">
       <i>Processed frame from cameras with axes converging at a 5-degree angle. Vertical parallax is noticeable in the frame’s lower-left corner.</i>
        <img src="/assets/img/papers/stereoscopic-dataset/pic3.png" alt="frames"/><br>
        <i>(a)Enlarged area</i>
    </div>
    <div class="example">
        <img src="/assets/img/papers/stereoscopic-dataset/pic2.png" alt="frames"/><br>
        <i>(b)Left and right images</i>
    </div>
        <div class="example">
        <img src="/assets/img/papers/stereoscopic-dataset/pic4.png" alt="frames"/><br>
        <i>(b)Left image</i>
    </div>
</div>

The result dataset was a total of 4,500 frames with a resolution of 1,920×1,080, most frames were modified with noise and/or blur.


## Model architecture 
The model’s architecture that you can see below is a convolutional neural network. It evaluates perspective distortions and converged camera axes in stereoscopic video.

<div class="big-example">
    <img src="/assets/img/papers/stereoscopic-dataset/pic5.png" alt="Schematic of trained convolutional neural network">
    <i>Schematic of trained convolutional neural network</i>
</div>

## Results

We also used the trained model to find distortion examples in stereoscopic films: *Drive Angry* and *Pirates of the Caribbean: On Stranger Tides*.


<div class="examples">
    <div class="example">
      <i>A scene from Pirates of the Caribbean: On Stranger Tides with perspective distortion.</i>
        <img src="/assets/img/papers/stereoscopic-dataset/pic6.png" alt="perspective distortion"/><br>
        <i>(a)Enlarged area</i>
    </div>
    <div class="example">
       <i>A scene from Drive Angry with perspective distortion.</i>
        <img src="/assets/img/papers/stereoscopic-dataset/pic8.png" alt="perspective distortion"/><br>
        <i>(a)Enlarged area</i>
    </div>
    <div class="example">
        <img src="/assets/img/papers/stereoscopic-dataset/pic7.png" alt="perspective distortion"/><br>
        <i>(b)Left and right images</i>
    </div>
        <div class="example">
        <img src="/assets/img/papers/stereoscopic-dataset/pic9.png" alt="perspective distortion"/><br>
        <i>(b)Left and right images</i>
    </div>
</div>

## Cite us
{% highlight BibTeX %}
@INPROCEEDINGS{9376375,  
author={Malyshev, Kirill and Lavrushkin, Sergey and Vatolin, Dmitriy},  
booktitle={2020 International Conference on 3D Immersion (IC3D)},   
title={Stereoscopic Dataset from A Video Game: Detecting Converged Axes and Perspective Distortions in S3D Videos},   
year={2020},  
volume={},  
number={},  
pages={1-7},  
doi={10.1109/IC3D51119.2020.9376375}}
{% endhighlight %}

## See also 
* [Video Quality Measurement Tool 3D](https://videoprocessing.ai/stereo_quality/)
* [Neural-Network-Based Detection Methods for Color, Sharpness, and Geometry Artifacts in Stereoscopic and VR180 Videos](https://ieeexplore.ieee.org/document/9376385) 
* [Stereoscopic quality assessment of 1,000 VR180 videos using 8 metrics](https://library.imaging.org/ei/articles/33/2/art00011)
* [MSU benchmarks](https://videoprocessing.ai/benchmarks/)
