---
title: MSU Video Quality Metrics Benchmark 2022
short_title: MSU Video Quality Metrics Benchmark
permalink: /video-quality-metrics
subprojects:
features:
  - "Largest compression dataset in this area (<b>2500+</b> streams)"
  - "40 different codecs of 10 compression standards"
  - "<b>780.000+</b> subjective responds"
  - "Both <b>VQA and IQA</b> metrics"
  - "<b>20+</b> metrics without variations"
  - "<b>150+</b> metrics with variations"

---

<style>
    .container1 {
        box-shadow: 0 5px 10px 1px grey;
        background: rgba(255, 255, 255, 0.90);
        text-align: center;
        border-radius: 5px;
        overflow: hidden;
        margin: 2.5em auto;
        width: 100%;
    }

    .product-details {
        position: relative;
        text-align: left;
        overflow: hidden;
        padding: 15px 15px;
        height: 100%;
        float: left;
        width: 44%;
    }
    .container1 .product-details h1{
        display: inline-block;
        position: relative;
        font-size: 20px;
        color: #344055;
        margin: 0;
    }

    .control{
        position: absolute;
        bottom: 20%;
        left: 22.8%;
    }


    @media (max-width: 420px) { 
        .container1 .product-details > p {
            font-size: 4.5vw;
        }
        .product-details {
            padding: 0px 0px 20px 20px;
        }
        .container1 .product-details h1{
            margin-top: 10px;
            font-size: 4.5vw;
        }
    }
</style>

<style method="text/css">
  .textcols {
    white-space: nowrap;
  }
  .textcols-item {
    white-space: normal;  
    display: inline-block;
    width: 31%;
    vertical-align: top;
    /*background: #fff2e1;*/
  }
  .textcols-item1 {
    white-space: normal;  
    display: inline-block;
    width: 48%;
    vertical-align: top;
    /*background: #fff2e1;*/
  }
  .textcols .textcols-item:first-child {
    margin-right: 4%;
  }


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

<hr class="btnsep">
<div class="nav-current subproject-links" style="margin-left: 120px;">
    <a href="/" class="button current_button">Home</a>
    <a href="https://videoprocessing.ai/benchmarks/video-quality-metrics_methodology.html" class="button">Methodology</a>
    <a href="https://videoprocessing.ai/benchmarks/video-quality-metrics_participants.html" class="button">Participants</a>
    <a href="#submit" class="button">Submission</a>
</div>


<h3 align="center"> We help researchers test the performance of their metrics on the largest compression dataset </h3>

<div class="center" style="padding-bottom: 0px; margin-bottom: 0px;">
    <video autoplay loop muted playsinline width="100%">
        <source src="/assets/img/benchmarks/vqm/output.webm" type='video/webm'>
    </video>
</div>

## Key features of our benchmark
<ul>
    <li>Extensive and diverse dataset
        <ul>
            <li>We used compression as distortion</li>
            <li><b>40 different codecs</b> of 10 compression standards</li>
            <li><b>2500+</b> compressed streams with  various target bitrates</li>
            <li><b>780.000+</b> subjective responds</li>
        </ul>
    </li>
    <li>VQA and IQA metrics
        <ul>
            <li><b>20+</b> metrics without variations</li>
            <li><b>150+</b> metrics with variations </li>
            <li>Calculations over U and V planes</li>
            <li>Metrics with different weighted <br> average for planes</li>
        </ul>
    </li>
    <li>Various charts
        <ul>
            <li>Bar chart with overall quality</li>
            <li>Compare metrics performance on difference compression standards with 95% confidence intervals</li>
            <li>Illustrative Speed-Quality chart </li>
        </ul>
    </li>
</ul>   


## Leaderboard

Chart below shows the correlation of metrics with subjective scores on our dataset.

<a href="https://videoprocessing.ai/benchmarks/video-quality-metrics.html">
    <img src = "/assets/img/benchmarks/vqm/leaderboard3.png" style="width: 250%;"/>
</a>

Chart below shows more detailed results of tested metrics. For more information visit our <a href="https://videoprocessing.ai/benchmarks/video-quality-metrics.html">site</a>.

<a href="https://videoprocessing.ai/benchmarks/video-quality-metrics.html">
    <img src = "/assets/img/benchmarks/vqm/table.png" style="width: 80%; text-align: center; display: block; margin: 0 auto;"/>
</a>

## Speed-Quality Plot

Chart below shows Speed-Quality characteristics of metrics.


<a href="https://videoprocessing.ai/benchmarks/video-quality-metrics.html">
    <img src = "/assets/img/benchmarks/vqm/speed-quality1.png" style="width: 250%;"/>
</a>

## Methodology and Dataset

You can find detailed description <a href="/benchmarks/video-quality-metrics_methodology.html">here</a>


<a href="https://videoprocessing.ai/benchmarks/video-quality-metrics_methodology.html">
    <img src = "/assets/img/benchmarks/vqm/Methodology_1.png" style="width: 150%;"/>
</a>

## <span id="submit"></span> How to submit

Send us an email to <vqa@videoprocessing.ai>   with the file of .exe extension with your algorithm and instructions to run it from console. When launched from console we expect your file to have following options (or their analogs):

<a name="srcomp"></a>
<div class="container1">    
    <div class="product-details" style="margin-left: 5%;">
        <h1>For Full-reference metrics:</h1>
        <br>
        <p class="information">
          <ul>
            <li> -<code>ref</code> — path to reference video</li>
            <li> -<code>dist</code> — path to distorted video</li>
            <li> -<code>output</code> — path to output of your algorithm</li>
            <li> -<code>t</code> — threshold, if it's required in your algorithm</li>
          </ul>
        </p>
    </div>
    <div class="product-details">
        <h1>For No-reference metrics:</h1>
        <br>
        <div class="information">
            <ul>
              <li> -<code>dist</code> — path to distorted video</li>
              <li> -<code>output</code> — path to output of your algorithm</li>
              <li> -<code>t</code> — threshold, if it's required in your algorithm</li>
            </ul>
        </div>
    </div>
</div>


Feel free to add any addition information about your algorithm.

We won't publish results of your algorithm without your permission.

If you have any suggestions or ideas how to improve our benchmark, please write us an e-mail on <vqa@videoprocessing.ai>.

## <span id="contacts"></span>Contacts

For questions and propositions, please contact us: <vqa@videoprocessing.ai>
