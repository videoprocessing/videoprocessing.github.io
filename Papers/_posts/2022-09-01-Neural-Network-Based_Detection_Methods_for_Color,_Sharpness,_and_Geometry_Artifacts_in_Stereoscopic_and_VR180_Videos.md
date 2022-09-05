---
title: Neural-Network-Based Detection Methods For&nbsp;Color, Sharpness, And Geometry Artifacts In&nbsp;Stereoscopic And VR180 Videos
permalink: /detection_methods_stereoscopic_VR180
features:
  - "<b>2 neural-network-based models</b> for estimating <b>3 types</b> of stereoscopic artifacts in VR180 videos"
  - "<b>Simultaneously</b> detecting color and sharpness mismatch between stereoscopic video views"
  - "<b>9,488 stereopairs</b> of size <b>960&#x202F;×&#x202F;540</b> from <b>16 stereoscopic movies</b> to train method for color- and sharpness-mismatch estimation"
  - "<b>22800 stereopairs</b> with artificial distortions from <b>39 3D movies</b> in the train dataset for geometry-mismatch estimation method"
  - "Objective quality assessment of <b>100 VR180 videos</b> from YouTube using proposed methods"
---

### S.&#x202F;Lavrushkin, K.&#x202F;Kozhemyakov and D.&#x202F;Vatolin

Contact&nbsp;us: 
* <sergey.lavrushkin@graphics.cs.msu.ru>
* <3dmovietest@graphics.cs.msu.ru>
* <video@compression.ru>

## Abstract
Shooting video in&nbsp;3D format can introduce stereoscopic artifacts, potentially causing viewers visual discomfort. In&nbsp;this work, we consider three common stereoscopic artifacts: color mismatch, sharpness mismatch, and geometric distortion. This&nbsp;paper introduces two neural-network-based methods for simultaneous color-&nbsp;and&nbsp;sharpness-mismatch estimation, as&nbsp;well&nbsp;as&nbsp;for estimating geometric distortions. To&nbsp;train these networks we prepared large datasets based&nbsp;on frames from full-length stereoscopic movies and compared the&nbsp;results with methods that previously served in&nbsp;analyses of&nbsp;full-length stereoscopic movies. We used our proposed methods to&nbsp;analyze 100 videos in&nbsp;VR180 format—a&nbsp;new format for stereoscopic videos in&nbsp;virtual reality (VR). This&nbsp;work presents overall results for these videos along&nbsp;with several examples of&nbsp;detected problems.

<!-- Add Download Full Text button-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
<button class="download-button" role="button" onclick="location.href = 'https://ieeexplore.ieee.org/document/9376385'"> <!-- Insert link here-->
    <i class="fa fa-download"></i>
    Download Full Text
</button>
<p class="download-button-caption">(PDF, 7 MB)</p>  <!-- Insert correct filesize here-->
</div>

## Key Features
* **2 neural-network-based models** for estimating **3 types** of stereoscopic artifacts in VR180 videos
* **Simultaneously** detecting color and sharpness mismatch between stereoscopic video views
* **9,488 stereopairs** of size **960&#x202F;×&#x202F;540** from **16 stereoscopic movies** to train method for color- and sharpness-mismatch estimation
* **22800 stereopairs** with artificial distortions from **39 3D movies** in the train dataset for geometry-mismatch estimation method
* Objective quality assessment of **100 VR180 videos** from YouTube using proposed methods 


## Method For Color- And Sharpness-Mismatch Estimation

### Train Dataset
The picture below shows an example with distortions added by the proposed distortion model.

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/ColorSharpPic1.jpg">
A left view with generated color and sharpness distortions and an interpolated right view. The scene is from Captain
America: The First Avenger.

### Architecture
Below is the general scheme of the proposed method for detecting color and sharpness mismatch between stereoscopic views. 

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/ColorSharpNet.jpg">

Next the neural network architecture itself for which modified GridNet network was chosen as the basis. 

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/GridNet.jpg">

### Training
* Loss function for predicting both color- and sharpness-difference maps was the sum of squared differences between the predicted and groundtruth values, weighted by the disparity-map confidence and L2-regularization
* We set the learning rate to **10−4**, decreasing it by a factor of **10** every **40** epochs
* The batch size was **8**, and the resolution of the training examples was **256&#x202F;×&#x202F;256**
* The neural-network training took place over **100** epochs
* Adam as an optimization method

#### Loss Function

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/LossCS1.png">

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/LossCS2.png">

where cˆ and c are the predicted and ground-truth color-difference maps, respectively, for each YUV color channel; ˆd and d are the predicted and ground-truth blur maps, respectively; conf is the input disparity confidence map for the neural network; and n is the number of pixels in the image; θ is the vector of neural-network weights.

### Results
Test dataset contains 23 stereoscopic-video sequences with a resolution of 1024&#x202F;×&#x202F;436. Artificial distortions were added for each sequence based on the
aforementioned general distortion model. 

Table below presents the results.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-7btt{border-color:inherit;font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">Method </th>
    <th class="tg-fymr">PCC</th>
    <th class="tg-fymr">SROCC</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-7btt" colspan="3">Color mismatch</td>
  </tr>
  <tr>
    <td class="tg-0pky">MAE</td>
    <td class="tg-0pky">0.1254</td>
    <td class="tg-0pky">0.1626</td>
  </tr>
  <tr>
    <td class="tg-0pky">MAE with right view interpolation</td>
    <td class="tg-0pky">0.1338</td>
    <td class="tg-0pky">0.2039</td>
  </tr>
  <tr>
    <td class="tg-0pky">Winkler</td>
    <td class="tg-0pky">-0.4430</td>
    <td class="tg-0pky">-0.4093</td>
  </tr>
  <tr>
    <td class="tg-0pky">VQMT3D</td>
    <td class="tg-0pky">0.8136</td>
    <td class="tg-0pky">0.8760</td>
  </tr>
  <tr>
    <td class="tg-0pky">Proposed method</td>
    <td class="tg-fymr">0.9696</td>
    <td class="tg-fymr">0.9602</td>
  </tr>
  <tr>
    <td class="tg-7btt" colspan="3">Sharpness mismatch</td>
  </tr>
  <tr>
    <td class="tg-0pky">MAE</td>
    <td class="tg-0pky">0.1482</td>
    <td class="tg-0pky">0.2635</td>
  </tr>
  <tr>
    <td class="tg-0pky">MAE with right view interpolation</td>
    <td class="tg-0pky">0.2683</td>
    <td class="tg-0pky">0.3505</td>
  </tr>
  <tr>
    <td class="tg-0pky">VQMT3D</td>
    <td class="tg-0pky">0.7686</td>
    <td class="tg-0pky">0.6815</td>
  </tr>
  <tr>
    <td class="tg-0pky">Proposed method</td>
    <td class="tg-fymr">0.9762</td>
    <td class="tg-fymr">0.9078</td>
  </tr>
</tbody>
</table>


## Method For Geometry-mismatch Estimation

### Train and Test Datasets
Geometric distortions between stereoscopic views often occur in 3D shooting. The most common types include vertical shift, rotation, and scaling.
We evaluated the geometric distortions between views in a stereoscopic movie wtih the VQMT3D project’s geometric-distortion-detection, then
we computed the standard deviation for each distortion type and gathered only those stereopairs for which all three of these parameters had absolute values less than σ/10.

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/STDGeometry.jpg">
Distributions of and computed standard deviations for the geometric distortions for thirty-nine 3D movies.

### Architecture
Below is the general scheme of proposed method for detecting geometry mismatch between stereoscopic views.

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/GeometryNet.jpg">

To estimate the geometry-mismatch parameters we employ a neural-network architecture, similar to ResNet-18. 

### Training
* The proposed loss function includes three main terms:
  * Squared difference between the predicted and ground-truth distortion parameters 
  * Loss between two grids transformed using the predicted and ground-truth affine transformations
  * Measurement of the consistency between the neural network’s predictions of the disparity and confidence maps for the left and right views
* The neural-network training took place over **120** epochs

#### Loss Function

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/LossG1.png">

where θ is the neural network’s prediciton based on the disparity and confidence maps for the left view, θgt is the vector
of ground-truth distortion parameters, and θb is the neural network’s prediction based on the disparity and confidence maps
for the right view.

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/LossG2.png">


<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/LossG4.png">


<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/LossG3.png">


Where G ∈ R^[H×W×3] denote homogeneous coordinates of points on the plane, θα = [α 0 0], θk = [0 k 0], and θt = [0 0 t]. 

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/LossG5.png">


### Results

Table below shows the absolute error for each geometric distortion. “No model” predicts zero for each geometric distortion. 

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig">Method</th>
    <th class="tg-amwm">Rotation<br>angle</th>
    <th class="tg-amwm">Scaling<br>coefficient</th>
    <th class="tg-amwm">Vertical<br>shift</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">No model</td>
    <td class="tg-0lax">0.63406</td>
    <td class="tg-0lax">0.6507</td>
    <td class="tg-0lax">0.57497</td>
  </tr>
  <tr>
    <td class="tg-0lax">Yi et al.</td>
    <td class="tg-0lax">0.05115</td>
    <td class="tg-0lax">0.10810</td>
    <td class="tg-0lax">0.19109</td>
  </tr>
  <tr>
    <td class="tg-0lax">Rocco et al.</td>
    <td class="tg-0lax">0.43735</td>
    <td class="tg-0lax">1.23582</td>
    <td class="tg-0lax">0.82534</td>
  </tr>
  <tr>
    <td class="tg-0lax">VQMT3D</td>
    <td class="tg-0lax">0.01158</td>
    <td class="tg-0lax">0.02622</td>
    <td class="tg-0lax">0.02004</td>
  </tr>
  <tr>
    <td class="tg-0lax">Proposed method</td>
    <td class="tg-1wig">0.01029</td>
    <td class="tg-1wig">0.02071</td>
    <td class="tg-1wig">0.00947</td>
  </tr>
</tbody>
</table>



## Cite&nbsp;us
{% highlight BibTeX %}
@INPROCEEDINGS{9376385,
  author={Lavrushkin, Sergey and Kozhemyakov, Konstantin and Vatolin, Dmitriy},
  booktitle={2020 International Conference on 3D Immersion (IC3D)}, 
  title={Neural-Network-Based Detection Methods for Color, Sharpness, and Geometry Artifacts in Stereoscopic and VR180 Videos}, 
  year={2020},
  volume={},
  number={},
  pages={1-8},
  doi={10.1109/IC3D51119.2020.9376385}}
{% endhighlight %} 

## Contact us

For questions and propositions, please contact us: <sergey.lavrushkin@graphics.cs.msu.ru>, <3dmovietest@graphics.cs.msu.ru>, and <video@compression.ru>

## See also 
* [Video Quality Measurement Tool 3D](https://videoprocessing.ai/stereo_quality/)
* [Stereoscopic Quality Assessment of 1,000 VR180 Videos Using 8 Metrics](https://library.imaging.org/ei/articles/33/2/art00011)
* [Stereoscopic Dataset from A Video Game: Detecting Converged Axes and Perspective Distortions in S3D Videos](https://ieeexplore.ieee.org/document/9376375)
* [MSU benchmarks](https://videoprocessing.ai/benchmarks/)
* [All MSU Stereo Quality Reports](https://videoprocessing.ai/stereo_quality/reports/)

## References <!-- Other papers that were mentioned in the main part of the page -->
  
1) S. Winkler, “Efficient measurement of stereoscopic 3D video content issues,” in Image Quality and System Performance XI, vol.&nbsp;9016, p.&nbsp;90160Q, International Societyfor Optics and Photonics, 2014. 
  
2) K. M. Yi, E. Trulls, Y. Ono, V. Lepetit, M. Salzmann, and P. Fua, “Learning to find good correspondences,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp.&nbsp;2666–2674, 2018.
  
3) I. Rocco, R. Arandjelovic, and J. Sivic, “Convolutional neural network architecture for geometric matching,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp.&nbsp;6148–6157, 2017.
  
4) D. Vatolin, A. Bokov, M. Erofeev, and V. Napadovsky, “Trends in S3D-movie quality evaluated on 105 films using 10 metrics,” Electronic Imaging, vol. 2016, no.&nbsp;5, pp.&nbsp;1–10, 2016.
  
5) D. Fourure, R. Emonet, E. Fromont, D. Muselet, A. Tremeau, and C. Wolf, “Residual conv-deconv grid network for semantic segmentation,” in 28th British Machine Vision Conference, 2017.
  
6) K. He, X. Zhang, S. Ren, and J. Sun, “Deep residual learning for image recognition,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp.&nbsp;770–778, 2016.

7) D. Fourure, R. Emonet, E. Fromont, D. Muselet, A. Tremeau, and C. Wolf, “Residual conv-deconv grid network for semantic segmentation,” in 28th British Machine Vision Conference, 2017.

8) D. P. Kingma and J. Ba, “Adam: A method for stochastic optimization,” arXiv preprint arXiv:1412.6980, 2014.

9) K. He, X. Zhang, S. Ren, and J. Sun, “Deep residual learning for image recognition,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp.&nbsp;770–778, 2016.
