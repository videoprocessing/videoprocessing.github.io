---
title: 'Machine-Learning-Based Method for Content-Adaptive Video Encoding'
permalink: /ml-method-for-video-encoding
features:
  - "A new approach to predicting
video codec presets"
  - "Bitrate decreases compared to the x264
and x265 codecs "
---

### S. Zvezdakov, D. Kondranin, and D. Vatolin

Contact us: 
* <szvezdakov@graphics.cs.msu.ru>
* <denis.kondranin@graphics.cs.msu.ru>
* <video@compression.ru>

## Abstract
Video codecs have several dozen parameters that
subtly affect the encoding rate, quality and size of the compressed
video. Codec developers, as a rule, provide standard presets
that on average yield acceptable performance for all videos, but
for a given video, certain parameters may yield more efficient
encoding. In this paper, we propose a new approach to predicting
video codec presets to increase compression efficiency. Our effort
involved collecting a new representative video-sequence dataset
from Vimeo.com. An experimental evaluation showed relative
bitrate decreases of 17.8% and 7.9%, respectively for the x264
and x265 codecs with standard options, all while maintaining
quality and speed. Comparison with other methods revealed
significantly faster automatic preset selection with a comparable
improvement in results. Finally, our proposed content-adaptive
method predicts presets that archive better performance than
codec-developer presets from MSU Codec Comparison 2020 [1].

<!-- Add Download Full Text button-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
<button class="download-button" role="button" onclick="location.href = 'https://drive.google.com/uc?id=1ddzm_TxKUnxQbZEv5hupxRZv_z7TgRSb'"> <!-- Insert link here-->
    <i class="fa fa-download"></i>
    Download Full Text
</button>
<p class="download-button-caption">(PDF, 840 KB)</p>  <!-- Insert correct filesize here-->
</div>

## Key Features
* A new approach to predicting
video codec presets to increase compression efficiency
* Bitrate decreases of **17.8%** and **7.9%** compared to the x264
and x265 codecs 
* Method is independent of the video
codec’s architecture and implementation 
<!-- 
Main part of the page
 -->

<style>
    .examples {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
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

## Dataset
We create our dataset using the selection technique from “MSU Video Codecs Comparison 2016” [2], we have analyzed more than one million videos and downloaded 7,036 unique high bitrate videos from Vimeo.com and processed them further.
Below you can see the bitrate distributions for our video dataset by year. 

<div class="examples">
    <div class="big-example">
        <img src="/assets/img/papers/ml-method-for-video-encoding/pic1.png" alt="Bitrate distribution for videos"/><br>
        <i>Bitrate distribution for videos downloaded from Vimeo.com.</i>
    </div>
</div>

[SI/TI distribution of datasets]( https://papers.evt.guru/ml-preset-predictor/si-ti.html)

<style>
.tablelines table, .tablelines td, .tablelines th {
        border: 0.8px solid black;
        }
</style>
## Proposed method
The main idea of content-adaptive encoding (CAE) is to
replace a reference preset (by which we encoded all
previous video groups) with other presets that will more
efficiently encode an input video. The problem is that encoding time
always includes a little noise that is impossible to completely
filter. To solve this we can replace
the ground-truth values with predicted
values, but this approach has drawbacks. Therefore, we decided to replace the regression
problem with a classification problem.

## Comparison of proposed method with the best possible improvement for x265 and x264 using created dataset.

|:-----------------:|:------------:|:--------:|:-----------:|:--------:|:----:|:--------:|:------:|:-----:|:-----------:|:------------:|
| &nbsp;**x264**    |&nbsp;ultrafast&nbsp;|&nbsp;superfast&nbsp;|&nbsp;veryfast&nbsp;|&nbsp;faster|&nbsp;fast|&nbsp;medium&nbsp;|&nbsp;slow|&nbsp;slower|&nbsp;veryslow&nbsp;|&nbsp;placebo&nbsp;|
|&nbsp;Proposed              |&nbsp;71.86%|&nbsp;14.18%  |&nbsp;8.63%   |&nbsp;12.65%&nbsp;|&nbsp;12.80%&nbsp;|&nbsp;11.91%&nbsp;|&nbsp;9.88%|&nbsp;12.69%|&nbsp;9.93%&nbsp;|&nbsp;10.00%|
|&nbsp;Proposed,&nbsp;custom&nbsp;loss&nbsp;|&nbsp;72.74%|&nbsp;14.18%  |&nbsp;9.80%&nbsp;|&nbsp;13.05%&nbsp;|&nbsp;13.55%&nbsp;|&nbsp;12.81%|&nbsp;9.54%|&nbsp;12.88%&nbsp;|&nbsp;9.85%|&nbsp;9.85% |
|&nbsp;Best&nbsp;(in&nbsp;our&nbsp;dataset)&nbsp;|&nbsp;73.72%|&nbsp;19.73%  |&nbsp;13.73%  |&nbsp;17.58% |&nbsp;18.50% |&nbsp;16.40% |&nbsp;13.69%&nbsp;|&nbsp;15.99%&nbsp;|&nbsp;13.68%|&nbsp;13.36% |
{: .tablelines}
For x265 with the
faster preset, our method can reduce the file size by **3.73%**.
The proposed loss function in some cases enables a further **1**-**2%** reduction.
<br>

|:-----------------:|:------------:|:--------:|:-----------:|:--------:|:----:|:--------:|:------:|:-----:|:-----------:|:------------:|
| &nbsp;**x265**    |&nbsp;ultrafast&nbsp;|&nbsp;superfast&nbsp;|&nbsp;veryfast&nbsp;|&nbsp;faster|&nbsp;fast|&nbsp;medium&nbsp;|&nbsp;slow|&nbsp;slower|&nbsp;veryslow&nbsp;|&nbsp;placebo&nbsp;|
|&nbsp;Proposed              |&nbsp;11.83%|&nbsp;15.60% |&nbsp;3.75%|&nbsp;3.59%&nbsp;|&nbsp;2.78%&nbsp;|&nbsp;1.64%|&nbsp;7.86%|&nbsp;10.04%&nbsp;|&nbsp;8.76%&nbsp;|&nbsp;8.59%|
|&nbsp;Proposed,&nbsp;custom&nbsp;loss&nbsp;|&nbsp;12.09%|&nbsp;15.82% |&nbsp;3.82%&nbsp;|&nbsp;3.73%&nbsp;|&nbsp;4.69%|&nbsp;1.77%|&nbsp;8.60%&nbsp;|&nbsp;10.36%&nbsp;|&nbsp;9.28%|&nbsp;9.04%|
|&nbsp;Best&nbsp;(in&nbsp;our&nbsp;dataset)&nbsp;|&nbsp;14.66%|&nbsp;18.40%  |&nbsp;6.49%&nbsp;|&nbsp;6.38%&nbsp;|&nbsp;6.44%|&nbsp;6.38%|&nbsp;11.67%&nbsp;|&nbsp;12.31%&nbsp;|&nbsp;11.88%|&nbsp;11.47%|
{: .tablelines}

For x264, we achieved a much greater improvement relative
to the reference presets. Given the slower preset, the filesize
decrease is **12.88%.** Moreover, given the placebo preset,
the encoding time decreased by **68.09%** when the file size
decreased by **9.85%**.

## Comparison with other methods
We compared our method with analogs. Here you can see average bitrate savings of the Pareto optimal
presets versus standard presets, along with execution time for
each method using dataset from [3] (351 video, x264).
<br>

|:-----------------:|:---------------:|:------------:|:------------:|:-------------:|:-----------:|
|&nbsp;Preset&nbsp;|&nbsp;Popov[4]&nbsp;|&nbsp;NSGA-II[5]&nbsp;|&nbsp;Zvezdakov[6]&nbsp;|&nbsp;Kazantsev[3]&nbsp;|&nbsp;Proposed&nbsp;|
|&nbsp;faster&nbsp;| &nbsp;8.0%&nbsp;|&nbsp;**15.9%**&nbsp;| &nbsp;11.0%&nbsp;| &nbsp;15.8% &nbsp;|&nbsp;3.0%&nbsp;|
|&nbsp;fast&nbsp; |&nbsp;29.0%&nbsp; |&nbsp;**30.2%**&nbsp;|&nbsp;30.2%&nbsp; |&nbsp;21.3%&nbsp; |&nbsp;28.6%&nbsp;|
|&nbsp;medium |&nbsp;28.4%&nbsp;|&nbsp;29.7%&nbsp;| &nbsp;**29.8%**&nbsp;| &nbsp;21.8%&nbsp;|&nbsp;**29.8%**&nbsp;|
|&nbsp;slow&nbsp; |&nbsp;34.9%&nbsp;|&nbsp;34.9%&nbsp;|&nbsp;34.9%&nbsp;|&nbsp;27.7%&nbsp;|&nbsp;**35.0%**&nbsp;|
|&nbsp;slower&nbsp;|&nbsp;32.2%&nbsp;|&nbsp;32.2%&nbsp;|&nbsp;32.2%&nbsp;|&nbsp;24.9%&nbsp;|&nbsp;**32.7%**&nbsp;|
|&nbsp;veryslow|&nbsp;28.3%&nbsp;|&nbsp;**29.0%**&nbsp;|&nbsp;28.7%&nbsp;|&nbsp;9.7%&nbsp;|&nbsp;28.9%&nbsp;|
|&nbsp;placebo&nbsp;|&nbsp;29.0%&nbsp;|&nbsp;28.3%&nbsp;|&nbsp;29.4%&nbsp; |&nbsp;10.5%&nbsp; |&nbsp;**29.5%**&nbsp;|
|&nbsp;Time&nbsp; |&nbsp;2.78 h.&nbsp; |&nbsp;3.8 h.&nbsp;|&nbsp;2.14 h.&nbsp;|&nbsp;735.5 s.&nbsp;|&nbsp;**468.4** s.&nbsp;|
{: .tablelines}
 More detailed comparison results: [comparison results on JCT-VC and xiph.org datasets](https://papers.evt.
guru/ml-preset-predictor/xiph-comparison.html).

## Cite us
{% highlight BibTeX %}
@INPROCEEDINGS{9477507,
  author={Zvezdakov, Sergey and Kondranin, Denis and Vatolin, Dmitriy},
  booktitle={2021 Picture Coding Symposium (PCS)}, 
  title={Machine-Learning-Based Method for Content-Adaptive Video Encoding}, 
  year={2021},
  volume={},
  number={},
  pages={1-5},
  doi={10.1109/PCS50896.2021.9477507}}

{% endhighlight %}

## See also 
* [MSU Video Codecs Comparisons](http://compression.ru/video/codec_comparison/index_en.html/)
* [Machine-Learning-Based Method for Finding Optimal Video-Codec Conﬁgurations Using Physical Input-Video Features](https://videoprocessing.github.io/codec-configuration) 

## References
[1] D. Kulikov, M. Erofeev, A. Antsiferova, E. Sklyarov, A. Yakovenko,
and N. Safonov. [HEVC/AV1 Video Codecs Comparison 2020](https://www.compression.ru/compression.ru/video/codec_comparison/hevc_2020/).
Dec 07, 2020. Accessed on: Jan. 15, 2021.<br>
[2] D. Vatolin, D. Kulikov, M. Erofeev, S. Dolganov, and S. Zvezdakov.
[Eleventh MSU Video Codecs Comparison](https://www.compression.ru/video/codec_comparison/hevc_2016/). Aug 22, 2016. Accessed on:
Jan. 15, 2021. <br>
[3] R. Kazantsev, S. Zvezdakov, and D. Vatolin, “Machine-learning-based
method for finding optimal video-codec configurations using physical
input-video features,” in 2020 Data Compression Conference (DCC).
IEEE, 2020, pp. 374–374.<br>
[4] V. Popov, “Automatic method of choosing pareto optimal video codec’s
parameters,” Master’s thesis, Lomonosov Moscow State University,
2009.<br>
[5] K. Deb, A. Pratap, S. Agarwal, and T. Meyarivan, “A fast and elitist
multiobjective genetic algorithm: Nsga-ii,” IEEE transactions on evolu-
tionary computation, vol. 6, no. 2, pp. 182–197, 2002.<br>
[6] S. V. Zvezdakov and D. S. Vatolin, “Building a x264 video codec
model,” in Innovative technologies in cinema and education: IV
International Symposium. VGIK Moscow, 2017, pp. 56–65.