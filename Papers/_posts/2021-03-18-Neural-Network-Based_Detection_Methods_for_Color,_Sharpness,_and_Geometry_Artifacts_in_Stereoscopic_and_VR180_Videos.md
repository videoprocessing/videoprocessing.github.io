---
title: Neural-Network-Based Detection Methods For Color, Sharpness, And Geometry Artifacts In Stereoscopic And VR180 Videos
permalink: /detection_methods_stereoscopic_VR180
features:
  - "These lines will be seen in the post preview"
  - "Write some key features of the paper here"
  - "Add some numerical parameters like 'More than 200 videos in the dataset'"
---

### S.&#x202F;Lavrushkin, K.&#x202F;Kozhemyakov and D.&#x202F;Vatolin

Contact&nbsp;us: 
* <sergey.lavrushkin@graphics.cs.msu.ru>
* <video@compression.ru>

## Abstract
Shooting video in&nbsp;3D format can introduce stereoscopic arti-facts, potentially causing viewers visual discomfort. In&nbsp;this work, we consider three common stereoscopic artifacts: color mismatch, sharpness mismatch, and geometric distortion. This&nbsp;paper introduces two neural-network-based methods for simultaneous color-&nbsp;and&nbsp;sharpness-mismatch estimation, as&nbsp;well&nbsp;as&nbsp;for estimating geometric distortions. To&nbsp;train these networks we prepared large datasets based&nbsp;on frames from full-length stereoscopic movies and compared the&nbsp;results with methods that previously served in&nbsp;analyses of&nbsp;full-length stereoscopic movies. We used our proposed methods to&nbsp;analyze 100 videos in&nbsp;VR180 format—a&nbsp;new format for stereoscopic videos in&nbsp;virtual reality (VR). This&nbsp;work presents overall results for these videos along&nbsp;with several examples of&nbsp;detected problems.

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
* Special distortion algorithm for building dataset from **9,488** source stereopairs of size **960 × 540** to train method for color- and sharpness-mismatch estimation. The frames were from **16** stereoscopic movies. 
* 
* Objective quality assessment of **100 VR180 videos** from YouTube using proposed methods
* Powered by [Subjectify.us](https://www.subjectify.us/). 


## Method For Color- And Sharpness-mismatch Estimation

### Train Dataset
The picture below shows an example with distortions added by the proposed distortion model.

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/ColorSharpPic1.jpg">
A left view with generated color and sharpness distortions and an interpolated right view. The scene is from Captain
America: The First Avenger.


### Architecture
Below is the General scheme of the proposed method for detecting color and sharpness mismatch between stereoscopic views. 

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/ColorSharpNet.jpg">

Next the neural network architecture itself for which GridNet network was chosen as the basis. 

<img src="/assets/img/papers/Neural-network-based_detection_methods_for_color,_sharpness,_and_geometry_artifacts_in_stereoscopic_and_VR180_videos/GridNet.jpg">

### Training
* Loss function for predicting both color- and sharpness-difference maps was the sum of squared differences between the predicted and groundtruth values, weighted by the disparity-map confidence
* The neural-network training took place over **100** epochs

### Results
Test dataset contains 23 stereoscopic-video sequences with a resolution of 1024×436. Artificial distortions were added for each sequence based on the
aforementioned general distortion model. 

Table below presents the results. 

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Method </th>
    <th class="tg-0pky">PCC</th>
    <th class="tg-0pky">SROCC</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow">Color mismatch</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
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
    <td class="tg-0pky">0.9696</td>
    <td class="tg-0pky">0.9602</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Sharpness mismatch</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
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
    <td class="tg-0pky">0.9762</td>
    <td class="tg-0pky">0.9078</td>
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

For questions and propositions, please contact us: <first-author-email>, <second-author-email>, ..., <dmitriy.vatolin@graphics.cs.msu.ru>, and <video@compression.ru>

## See also 
* [Video Quality Measurement Tool 3D](https://videoprocessing.ai/stereo_quality/)
* [Stereoscopic Quality Assessment of 1,000 VR180 Videos Using 8 Metrics](https://library.imaging.org/ei/articles/33/2/art00011)
* [Stereoscopic Dataset from A Video Game: Detecting Converged Axes and Perspective Distortions in S3D Videos](https://ieeexplore.ieee.org/document/9376375)
* [MSU benchmarks](https://videoprocessing.ai/benchmarks/)

## References <!-- Other papers that were mentioned in the main part of the page -->
  
1) “VR180.” available online: <https://arvr.google.com/vr180/>.
 
2) A. Antsiferova and D. Vatolin, “The influence of 3D video artifacts on discomfort of 302 viewers,” in 2017 International Conference on 3D Immersion (IC3D), pp.&nbsp;1–8, IEEE, 2017.

3) S. Winkler, “Efficient measurement of stereoscopic 3D video content issues,” in Image Quality and System Performance XI, vol.&nbsp;9016, p.&nbsp;90160Q, International Societyfor Optics and Photonics, 2014. 
  
4) Q. Dong, T. Zhou, Z. Guo, and J. Xiao, “A stereo camera distortion detecting method for 3DTV video quality assessment,” in 2013 Asia-Pacific Signal and Information Processing Association Annual Summit and Conference, pp.&nbsp;1–4, IEEE, 2013.
  
5) D. G. Lowe, “Object recognition from local scale-invariant features,” in Proceedings of the Seventh IEEE International Conference on Computer Vision, vol.&nbsp;2, pp.&nbsp;1150–1157, IEEE, 1999.
  
6) F. Devernay and S. Pujades, “Focus mismatch detection in stereoscopic content,” in Stereoscopic Displays and Applications XXIII, vol.&nbsp;8288, p.&nbsp;82880E, International Society for Optics and Photonics, 2012.
  
7) M. Liu and K. Muller, “Automatic analysis of sharpness mismatch between stereoscopic views for stereo 3D videos,” in 2014 International Conference on 3D Imaging (IC3D), pp.&nbsp;1–6, IEEE, 2014.
  
8) M. A. Fischler and R. C. Bolles, “Random sample consensus: a paradigm for model fitting with applications to image analysis and automated cartography,” Communications of the ACM, vol.&nbsp;24, no.&nbsp;6, pp.&nbsp;381–395, 1981.
  
9) E. Brachmann, A. Krull, S. Nowozin, J. Shotton, F. Michel, S. Gumhold, and C. Rother, “DSAC-differentiable RANSAC for camera localization,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp.&nbsp;6684–6692, 2017.
  
10) E. Brachmann and C. Rother, “Neural-guided RANSAC: learning where to sample model hypotheses,” in Proceedings of the IEEE International Conference on Computer Vision, pp.&nbsp;4322–4331, 2019.
  
11) K. M. Yi, E. Trulls, Y. Ono, V. Lepetit, M. Salzmann, and P. Fua, “Learning to find good correspondences,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp.&nbsp;2666–2674, 2018.
  
12) W. Sun, W. Jiang, E. Trulls, A. Tagliasacchi, and K. M. Yi, “Attentive context normalization for robust permutation-equivariant learning,” arXiv preprint arXiv:1907.02545, 2019.
  
13) I. Rocco, R. Arandjelovic, and J. Sivic, “Convolutional neural network architecture for geometric matching,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp.&nbsp;6148–6157, 2017.
  
14) I. Rocco, R. Arandjelovic, and J. Sivic, “End-to-end weakly-supervised semantic alignment,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp.&nbsp;6917–6925, 2018.
  
15) D. Vatolin, A. Bokov, M. Erofeev, and V. Napadovsky, “Trends in S3D-movie quality evaluated on 105 films using 10 metrics,” Electronic Imaging, vol. 2016, no.&nbsp;5, pp.&nbsp;1–10, 2016.
  
16) K. Simonyan, S. Grishin, D. Vatolin, and D. Popov, “Fast video super-resolution via classification,” in 2008 15th IEEE International Conference on Image Processing, pp.&nbsp;349–352, IEEE, 2008.
  
17) G. Egnal and R. P. Wildes, “Detecting binocular half-occlusions: Empirical comparisons of five approaches,”IEEE Transactions on Pattern Analysis and Machine Intelligence, vol.&nbsp;24, no.&nbsp;8, pp.&nbsp;1127–1133, 2002.
  
18) D. Fourure, R. Emonet, E. Fromont, D. Muselet, A. Tremeau, and C. Wolf, “Residual conv-deconv grid network for semantic segmentation,” in 28th British Machine Vision Conference, 2017.
  
19) X. Glorot and Y. Bengio, “Understanding the difficulty of training deep feedforward neural networks,” in Proceedings of the 13th International Conference on Artificial Intelligence and Statistics, pp.&nbsp;249–256, 2010.
  
20) D. P. Kingma and J. Ba, “Adam: A method for stochastic optimization,” arXiv preprint arXiv:1412.6980, 2014.
  
21) D. J. Butler, J. Wulff, G. B. Stanley, and M. J. Black, “A naturalistic open source movie for optical flow evaluation,” in European Conference on Computer Vision, pp.&nbsp;611–625, Springer, 2012.
  
22) K. He, X. Zhang, S. Ren, and J. Sun, “Deep residual learning for image recognition,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp.&nbsp;770–778, 2016.
  
23) S. Ioffe and C. Szegedy, “Batch normalization: accelerating deep network training by reducing internal covariate shift,” in International Conference on Machine Learning, pp.&nbsp;448–456, 2015.
  
24) K. He, X. Zhang, S. Ren, and J. Sun, “Delving deep into rectifiers: surpassing human-level performance on imagenet classification,” in Proceedings of the IEEE International Conference on Computer Vision, pp.&nbsp;1026–1034, 2015.
