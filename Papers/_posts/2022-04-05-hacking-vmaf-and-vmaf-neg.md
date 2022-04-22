---
title: Hacking VMAF and VMAF NEG&#58; Vulnerability to&nbsp;Different Preprocessing Methods
permalink: /hacking-vmaf-and-vmaf-neg
features:
  - "Increase VMAF by&nbsp;up&nbsp;to&nbsp;218.8% and VMAF NEG by&nbsp;up&nbsp;to&nbsp;21.9%"
  - "Comparation of&nbsp;8 different preprocessing methods"
  - "Results verification on&nbsp;encoded streams"
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

### M.&#x202F;Siniukov, A.&#x202F;Antsiferova, D.&#x202F;Kulikov, and D.&#x202F;Vatolin

Contact&nbsp;us: [aantsiferova@graphics.cs.msu.ru](mailto:aantsiferova@graphics.cs.msu.ru), and&nbsp;[video@compression.ru](mailto:video@compression.ru)

## Abstract
Video quality measurement plays a&nbsp;critical role in&nbsp;the&nbsp;development of&nbsp;video processing applications. In&nbsp;this paper, we show how popular quality metrics VMAF and its tuning-resistant version VMAF NEG can be artificially increased by&nbsp;video preprocessing. We propose a&nbsp;pipeline for tuning parameters of&nbsp;processing algorithms which allows to&nbsp;increase VMAF by&nbsp;up&nbsp;to&nbsp;218.8%.

A&nbsp;subjective comparison of&nbsp;preprocessed videos showed that with the&nbsp;majority of&nbsp;methods visual quality drops down or&nbsp;stays unchanged. We show that VMAF NEG scores can also be increased by&nbsp;some preprocessing methods by&nbsp;up&nbsp;to&nbsp;21.9%.

<div>
<button class="download-button" role="button" onclick="location.href = 'https://arxiv.org/pdf/2107.04510'">
    <i class="fa fa-download"></i>
    Download Full Text
</button>
<p class="download-button-caption">(PDF,&nbsp;14.4&nbsp;MB)</p>
</div>

## Key Features
* Increase VMAF by&nbsp;up&nbsp;to&nbsp;**218.8%** and VMAF NEG by&nbsp;up&nbsp;to&nbsp;**21.9%**
* Comparation of&nbsp;8 different preprocessing methods
* Results verification on&nbsp;encoded streams
* Powered by&nbsp;[Subjectify.us](https://www.subjectify.us/)

## Examples

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
        <img src="/assets/img/papers/hacking-vmaf-and-vmaf-neg/vmaf-preprocessing-example.jpg" alt="VMAF preprocessing example"/><br>
        <i>After preprocessing VMAF was increased by&nbsp;<b>181.22%</b> and visual quality drops</i>
    </div>
    <div class="example">
        <img src="/assets/img/papers/hacking-vmaf-and-vmaf-neg/vmaf-neg-preprocessing-example.jpg" alt="VMAF NEG preprocessing example"/><br>
        <i>After preprocessing VMAF NEG was increased by&nbsp;<b>13.66%</b> and visual quality does not change</i>
    </div>
</div>

Below you can see VMAF gain in&nbsp;procents for the&nbsp;best preprocessing methods. CLAHE gives the&nbsp;largest gain for VMAF.

<div class="big-example">
    <img src="/assets/img/papers/hacking-vmaf-and-vmaf-neg/vmaf-preprocessing-comparison.jpg" alt="Best preprocessing methods for VMAF">
    <i>Best preprocessing methods for VMAF</i>
</div>

<div>
<button class="download-button" role="button" onclick="location.href = 'https://storage.videoprocessing.ai/papers/2021siniukov/hacking-vmaf-and-vmaf-neg-materials.zip'">
    <i class="fa fa-download"></i>
    Download Materials
</button>
<p class="download-button-caption">(ZIP,&nbsp;15.2&nbsp;MB)</p>
</div>

## Cite&nbsp;Us
{% highlight BibTeX %}
@inproceedings{10.1145/3508259.3508272,
    author = {Siniukov, Maksim and Antsiferova, Anastasia and Kulikov, Dmitriy and Vatolin, Dmitriy},
    title = {Hacking VMAF and VMAF NEG: Vulnerability to Different Preprocessing Methods},
    year = {2021},
    isbn = {9781450384162},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3508259.3508272},
    doi = {10.1145/3508259.3508272},
    abstract = {Video quality measurement plays a critical role in the development of video processing applications. In this paper, we show how popular quality metrics VMAF and its tuning-resistant version VMAF NEG can be artificially increased by video preprocessing. We propose a pipeline for tuning parameters of processing algorithms which allows to increase VMAF by up to 218.8%. A subjective comparison of preprocessed videos showed that with the majority of methods visual quality drops down or stays unchanged. We show that VMAF NEG scores can also be increased by some preprocessing methods by up to 21.9%.},
    booktitle = {2021 4th Artificial Intelligence and Cloud Computing Conference},
    pages = {89–96},
    numpages = {8},
    keywords = {video quality measurement, VMAF, video quality, video codecs comparisons, quality improvement, objective full-reference metric, codecs tuning},
    location = {Kyoto, Japan},
    series = {AICCC '21}
}
{% endhighlight %}

## Contact&nbsp;Us

Interested in&nbsp;this research? Contact&nbsp;us: [aantsiferova@graphics.cs.msu.ru](mailto:aantsiferova@graphics.cs.msu.ru), and&nbsp;[video@compression.ru](mailto:video@compression.ru)

## See Also
* [Hacking VMAF with Video Color and Contrast Distortion](https://www.researchgate.net/publication/334388692_Hacking_VMAF_with_Video_Color_and_Contrast_Distortion)
* [MSU Video Quality Metrics Benchmark 2022](https://videoprocessing.ai/benchmarks/video-quality-metrics.html) and [other benchmarks](https://videoprocessing.ai/benchmarks/)
