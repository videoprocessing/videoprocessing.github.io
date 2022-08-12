---
title: 'Stereoscopic dataset from a video game: detecting converged axes and perspective distortions in S3D videos'
permalink: /any_unique_name
features:
  - "These lines will be seen in the post preview"
  - "Write some key features of the paper here"
  - "Add some numerical parameters like 'More than 200 videos in the dataset'"
---

### K.Malyshev, S.Lavrushkin, D.Vatolin

Contact us: 
* <first-author-email>
* <second-author-email>
* ...
* <dmitriy.vatolin@graphics.cs.msu.ru>
* <video@compression.ru>

## Abstract
This paper presents a method for generating stereoscopic or multi-angle video frames using a computer game (Grand Theft Auto V). We developed a mod that captures synthetic frames allows us to create geometric distortions like those that oc- cur in a real video. These distortions are the main cause of viewer discomfort when watching 3D movies. Datasets generated in this way can aid in solving problems related to machine-learning-based assessment of stereoscopic- or multi- angle-video quality. We trained a convolutional neural net- work to evaluate perspective distortions and converged cam- era axes in stereoscopic video, then tested it on real 3D movies. The neural network discovered multiple examples of these distortions.

***Index Terms—*** Perspective distortion, converged axes, geometric distortions, stereoscopic video, deep learning.

<!-- Add Download Full Text button-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
<button class="download-button" role="button" onclick="location.href = 'https://doc-00-70-docs.googleusercontent.com/docs/securesc/jm7g516ps48itnj3h1v3k1tjg72qfer5/be86urkchsrq3nq3bjcdp2icdm82r3jk/1660140900000/09775521546353223691/00082993098028371913/1vaZEFD_9KjdsK2bVCNaZGacTQfaYTN5-?ax=AI9vYm6LHyW3Zdz_Cn53sy3xZPedBox6bsGjET-hHkFqc_eKSxCtBokv_HhNDe7juis0Zo6h6PtSk35F3Mr3VJj0K8iQUSjNGEen0s4meCmhyxqIBM5PukgAX9SAQpBuyWQfKojgbZWPlsI8t_XfHDlkg-jNNiZhFMUIvgZCXfpWivg9mcLftLGunmFFJ6AnK5InjSQUMn8ZqOMFNwmZ-OJRtTgYa-5YHbtkiQ6n4cskByY-6IjVZPrbK4frn58CIgVjJvgMYamAV5B3gwrVbNUBQPSq9FduDc8OgMzHDBXVU7jti2gwxfgg7bMEZiP1c8hheOFRpg3Tnv9kHeKuUNO83hCPqu1jmKnvBTA5tToURYB1VXFJKqbY6508F30JGS42P1JIfM231eeS4rBqWmxqKnsB_I4uXqEhx4wVgsLtLdLo5Z1llWae1mMl1unObHcKe106_bLb239RqPqc5gHxFlUjpIAOla6kU1h3dHp3A1znbbYKN1qzLbq21KVoo3QgUQiNJaiulEMbn8BpRscopJifGTyYmKTNCR5VyRURdikfdlSkLHs0Q04d1KkrklNlsd4GRVXHpf88QNG3sbmOozKlorPMJhn362X5u92A_EdPCuc2hx8jpTJtzcP08h6-kCG8E2zaC4DB-mABU1uXJhnpfmaL9rvyo1cKMjL2kb5BTWK4uA9bQBaNRPvdEr8VUnRcOm2juD6WGQ&uuid=430ade02-cb74-4ab3-b1fe-b3a4389dc0cd&authuser=0&nonce=ja3aiesobndce&user=00082993098028371913&hash=379j937m7sbop082bdt76tavr3rq5076'"> <!-- Insert link here-->
    <i class="fa fa-download"></i>
    Download Full Text
</button>
<p class="download-button-caption">(PDF, 9.4 MB)</p>  <!-- Insert correct filesize here-->
</div>

## Key Features
* Dataset with a synthetic set of frame sequences 
* Suitable for stereoscopic video analysis and processing 
* Method uses GTA V video game 
* 4000 frames for the training set and 500 for the test set
* Pearson correlation coefficient (PCC) was 0.956 for converged axes, and for perspective distortion, it was 0.859
* Powered by&nbsp;[Subjectify.us](https://www.subjectify.us/)
<!-- 
Main part of the page
 -->

## Mod description 
Mod includes a set of parameters for adjusting the camera which allows generation of stereoscopic sequences with various geometric distortions.

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

## Dataset generation
The result dataset was a total of 4,500 frames with a resolution of 1,920×1,080, most frames were modified with noise and/or blur.


## Model architecture 
The model’s architecture that you can see below is a convolutional neural network. The input data is a calculated disparity map for the left view, scaled down to 480×272, and a corresponding confidence map. The model returns two numbers normalized from -1 to 1: the angle between the converging optical axes (in degrees) and the perspective distortion (in centimeters).

<div class="big-example">
    <img src="/assets/img/papers/stereoscopic-dataset/pic5.png" alt="Schematic of trained convolutional neural network">
    <i>Schematic of trained convolutional neural network</i>
</div>

Below you can see some perspective distortion examples.


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
@article{inproceedings,
    author = {Malyshev, Kirill and Lavrushkin, Sergey and Vatolin, Dmitriy},
    title = {Stereoscopic dataset from a video game: detecting converged axes and perspective distortions in S3D videos},
    year = {2022}
  }
{% endhighlight %}

## See also 
* [Video Quality Measurement Tool 3D](https://videoprocessing.ai/stereo_quality/)
* [Neural-Network-Based Detection Methods for Color, Sharpness, and Geometry Artifacts in Stereoscopic and VR180 Videos](https://ieeexplore.ieee.org/document/9376385) 
* [Stereoscopic quality assessment of 1,000 VR180 videos using 8 metrics](https://library.imaging.org/ei/articles/33/2/art00011)
* [MSU benchmarks](https://videoprocessing.ai/benchmarks/)

## References <!-- Other papers that were mentioned in the main part of the page -->