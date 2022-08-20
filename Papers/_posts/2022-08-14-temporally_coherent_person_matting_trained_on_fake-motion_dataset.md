---
title: Temporally coherent person matting trained on fake-motion dataset
permalink: /person-matting
features:
  - "Proposed a novel U-Net-based deep-neural-network method with LSTM blocks and an attention module on skip connections" 
  - "More than 20.000 video-clips in the developed fake-motion dataset"
  - "Comparation with 8 different matting methods"
  - "Highly improving the output’s temporal stability utilizing a motion-estimation-based method"
---

### I. Molodetskikh, M. Erofeev, A. Moskalenko, and D. Vatolin

Contact us: 
* <ivan.molodetskikh@graphics.cs.msu.ru>
* <merofeev@graphics.cs.msu.ru>
* <andrey.moskalenko@graphics.cs.msu.ru>
* <dmitriy.vatolin@graphics.cs.msu.ru>
* <video@compression.ru>

## Abstract
We propose a novel neural-network-based method to perform matting of videos depicting people that does not require additional user input such as trimaps. Our architecture achieves temporal stability of the resulting alpha mattes by using motion-estimation-based smoothing of image-segmentation algorithm outputs, combined with convolutional-LSTM modules on U-Net skip connections. We also propose a fake-motion algorithm that generates training clips for the video-matting network
given photos with ground-truth alpha mattes and background videos. We apply random motion to photos and their mattes to simulate movement one would find in real videos and composite the result with the background clips. It lets us train a deep neural network operating on videos in an absence of a large annotated video dataset and provides ground-truth training-clip foreground optical flow for use in loss functions.

<!-- Add Download Full Text button-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
<button class="download-button" role="button" onclick="location.href = 'https://arxiv.org/pdf/2109.04843.pdf'">
    <i class="fa fa-download"></i>
    Download Full Text
</button>
<p class="download-button-caption">(PDF, 22.2 MB)</p>
</div>

## Key Features
* Proposed a novel U-Net-based deep-neural-network method with LSTM blocks and an attention module on skip connections
* More than **20.000 video-clips** in the developed fake-motion dataset
* Comparation with 8 different matting methods
* Highly improving the output’s temporal stability utilizing a motion-estimation-based method
* Powered by [Subjectify.us](https://www.subjectify.us/) 

## Architecture of the proposed neural network
The figure below demonstrates the architecture. 
![architecture](https://github.com/ddavidchick/videoprocessing.github.io/blob/master/assets/img/papers/person-matting/architecture.JPG)
Some additional details:
* The outputs of the 2nd, 4th, 7th, 14th and 18th encoder’s blocks of the TorchVision implementation used for skip connections
* To generate the probability map used a pretrained DeepLabv3+ image-segmentation network from TorchVision

## Dataset
We generated **fake-motion dataset** using annotated foreground images and background videos, fake-motion procedure:
* We generate random optical-flow maps at three scales and use them to warp the input
* We shift the person halfway out of a frame and back over the clip’s duration, with a probability of $\frac{1}{3}$  

The figure below demonstrates examples of generated clips.  
  
![fake-motion](https://github.com/ddavidchick/videoprocessing.github.io/blob/master/assets/img/papers/person-matting/fake_motion.JPG)  
> Top, middle and bottom rows show final training clip, clip from the base fake-motion algorithm and fake-motion shift component’s effect respectively.

## Comparison
Below you can see **objective evaluation** results on clips from [VideoMatting benchmark](http://videomatting.com). The best result is shown in **bold**, the second-best
is underlined and the third-best is shown in _italics_.
  
![table1](https://github.com/ddavidchick/videoprocessing.github.io/blob/master/assets/img/papers/person-matting/comparison_1.JPG) 
  
The **second table** shows objective evaluation results on five VideoMatte240K test clips.  
  
![table2](https://github.com/ddavidchick/videoprocessing.github.io/blob/master/assets/img/papers/person-matting/comparison_2.JPG)  
  
The **third table** shows objective evaluation results on 100 fake-motion clips.  
  
![table3](https://github.com/ddavidchick/videoprocessing.github.io/blob/master/assets/img/papers/person-matting/comparison_3.JPG)  

## Cite us
{% highlight BibTeX %}
@article{MOLODETSKIKH2022103521,
title = {Temporally coherent person matting trained on fake-motion dataset},
journal = {Digital Signal Processing},
volume = {126},
pages = {103521},
year = {2022},
issn = {1051-2004},
doi = {https://doi.org/10.1016/j.dsp.2022.103521},
url = {https://www.sciencedirect.com/science/article/pii/S1051200422001385},
author = {Ivan Molodetskikh and Mikhail Erofeev and Andrey Moskalenko and Dmitry Vatolin},
keywords = {Video matting, Semantic person matting, Semantic segmentation, Data augmentation, Temporal smoothing, Deep learning},
abstract = {We propose a novel neural-network-based method to perform matting of videos depicting people that does not require additional user input such as trimaps. Our architecture achieves temporal stability of the resulting alpha mattes by using motion-estimation-based smoothing of image-segmentation algorithm outputs, combined with convolutional-LSTM modules on U-Net skip connections. We also propose a fake-motion algorithm that generates training clips for the video-matting network given photos with ground-truth alpha mattes and background videos. We apply random motion to photos and their mattes to simulate movement one would find in real videos and composite the result with the background clips. It lets us train a deep neural network operating on videos in an absence of a large annotated video dataset and provides ground-truth training-clip foreground optical flow for use in loss functions.}
}
{% endhighlight 

## Contact us

For questions and propositions, please contact us: <ivan.molodetskikh@graphics.cs.msu.ru>, <merofeev@graphics.cs.msu.ru>, <andrey.moskalenko@graphics.cs.msu.ru>, <dmitriy.vatolin@graphics.cs.msu.ru>, and <video@compression.ru>

## See also 
* [VideoMatting benchmark](http://videomatting.com)
* [Subjectify.us](https://www.subjectify.us/)
* [MSU benchmarks](https://videoprocessing.ai/benchmarks/)

## References

1. M. Sandler, A. Howard, M. Zhu, A. Zhmoginov, L.-C. Chen, Mobilenetv2: inverted
residuals and linear bottlenecks, in: The IEEE Conference on Computer Vision
and Pattern Recognition (CVPR), 2018.
2. X. Shi, Z. Chen, H. Wang, D.-Y. Yeung, W.-k. Wong, W.-c. Woo, Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting, Advances in Neural Information Processing Systems, vol. 28, Curran Associates, Inc., 2015, pp. 802–810.
3. A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A.N. Gomez, Ł. Kaiser, I. Polosukhin, Attention is all you need, in: Advances in Neural Information Processing Systems, 2017, pp. 5998–6008.
4. L.-C. Chen, Y. Zhu, G. Papandreou, F. Schroff, H. Adam, Encoder-decoder with atrous separable convolution for semantic image segmentation, in: Proceedings of the European Conference on Computer Vision (ECCV), 2018.
5.  AISegment dataset, https://github.com/aisegmentcn/matting_human_datasets/tree/1829b5f722024d29b780993f06b45ea3f47ba777, 2019.
6.  X. Shen, X. Tao, H. Gao, C. Zhou, J. Jia, Deep automatic portrait matting, in: European Conference on Computer Vision, Springer, 2016, pp. 92–107.
7.  N. Xu, B. Price, S. Cohen, T. Huang, Deep image matting, in: The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.
8.  M. Forte, F. Pitié, F , B, alpha matting, preprint, arXiv:2003.07711, 2020.
9.  X. Lu, W. Wang, C. Ma, J. Shen, L. Shao, F. Porikli, See more, know more: unsupervised video object segmentation with co-attention siamese networks, in: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2019.
10. S. Seo, S. Choi, M. Kersner, B. Shin, H. Yoon, H. Byun, S. Ha, Towards realtime automatic portrait matting on mobile devices, preprint, arXiv:1904.03816, 2019.
11. Q. Chen, T. Ge, Y. Xu, Z. Zhang, X. Yang, K. Gai, Semantic human matting, in: Proceedings of the 26th ACM International Conference on Multimedia, 2018, pp. 618-626.
12. Y. Zhang, L. Gong, L. Fan, P. Ren, Q. Huang, H. Bao, W. Xu, A late fusion CNN for digital matting, in: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2019.
13. T. Wang, S. Liu, Y. Tian, K. Li, M.-H. Yang, Video matting via consistencyregularized graph neural networks, in: Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), 2021, pp. 4902–4911.

