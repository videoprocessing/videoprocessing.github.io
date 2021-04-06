---
title: MSU Video Matting Benchmark
description:
preview_img:
subprojects:
permalink: 
excerpt: "The VideoMatting project is the first public objective benchmark for video-matting methods."

---



<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
   src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
<script type="text/javascript"  src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


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

    table.deint {
        display: table;
    }
</style>


### Introduction
The VideoMatting project is the first public objective benchmark for video-matting methods. It contains scatter plots and rating tables for different quality metrics. In addition, results for participating methods are available for viewing on a player equipped with a movable zoom region. We believe our work will help rank existing methods and aid developers of new methods in improving their results.

### Leaderboard

<a href="https://videomatting.com/"><img src="/assets/img/videomatting_leaderboard.png"></a>



### Chart

<a href="https://videomatting.com/"><img src="/assets/img/videomatting_chart.png"></a>

### Participate
We invite developers of video-matting methods to use our benchmark. We will evaluate the submitted data and report scores to the developer. In cases where the developer specifically grants permission, we will publish the results on our site. We can also publish anonymous scores for blind-reviewed papers. To participate, simply follow these steps:
1. Download the data set containing our sequences: City, Flowers, Concert, Rain, Snow, Vitaliy, Artem, Slava, Juneau, Woods,
2. Apply your method to each of our test cases
3. Upload the alpha and foreground sequences to any file-sharing service. We kindly ask you to maintain these naming and directory-structure conventions. If your method doesn't explicitly produce the foreground images you can skip uploading them; in this case, we will generate them using method proposed in [7].
Fill in this form to provide information about your method

**If you would like to participate read the full submission rules [here](https://videomatting.com/#participate).**


### Contacts

Contact us by email with any questions or suggestions at <questions@videomatting.com>


## [Learn more](https://videomatting.com)