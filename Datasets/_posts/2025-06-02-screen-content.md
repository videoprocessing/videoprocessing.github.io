---
title: Screen content video dataset and benchmark
permalink: /screen-content-dataset
features:
  - Real-world distortions from video conferencing apps
  - 100 videos, 1600 sistorted versions
  - 8,000+ assessors
---


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
   src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

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

</style>


## Screen Content Dataset 
Screen sharing is a common feature in video conferencing applications, especially for remote work and presentations. However, internet conditions such as limited bandwidth, packet loss, and compression can significantly reduce the visual quality of shared screen content. Most existing video quality metrics are designed for natural scenes and were not benchmarked on screen content. In this work, we present a large-scale subjective dataset of screen content videos captured from video conferencing apps. The dataset includes 1,600 distorted videos with corresponding subjective quality scores. Subjective scores were collected using crowdsourced pairwise comparisons. The dataset provides a valuable resource for developing and benchmarking video quality metrics tailored to screen content. The evaluation of objective metrics revealed that several generalpurpose quality metrics outperform both full-reference and no-reference metrics. 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<video autoplay loop muted playsinline width="100%">
    <source src="/assets/videos/datasets/sc_dataset_compr.webm" type='video/webm'>
</video>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
<button class="download-button" role="button" onclick="window.open('https://titan.gml-team.ru:5003/sharing/5gBwOteQ6')"> <!-- Insert link here-->
    <i class="fa fa-download"></i>
    Download
</button>
</div>

<!-- ## <span id="cite"></span> Cite us

{% highlight BibTeX %}
{% endhighlight %} -->

## Benchmark
### Leaderboard

The chart below shows the correlation of metrics with subjective scores on our dataset. You can choose the type of correlation. We recommend that you focus on Spearman’s rank correlation coefficient. We also highlighting metrics developed specially for the screen content. 

<!-- Color Legend -->
<div style="margin-bottom: 10px; font-family: sans-serif;">
  <strong>Color Legend:</strong>
  <span style="display:inline-block;width:15px;height:15px;background:#76C7E0;margin-left:10px;"></span> No-Reference (NR)
  <span style="display:inline-block;width:15px;height:15px;background:#5D9C71;margin-left:10px;"></span> Full-Reference (FR)
  <span style="display:inline-block;width:15px;height:15px;background:#D6A34B;margin-left:10px;"></span> Screen Content (SC)
</div>

<!-- Dropdown Button -->
<div style="margin-bottom: 15px;">
  <label for="correlation-type"><strong>Select correlation type:</strong></label>
  <select id="correlation-type" style="margin-left: 10px; padding: 5px; font-size: 14px;">
    <option value="spearman">Spearman</option>
    <option value="pearson">Pearson</option>
  </select>
</div>

<!-- Chart Container -->
<div id="correlation-container" style="height: 1200px; max-width: 950px; margin: 0 auto;"></div>

<!-- Highcharts Script -->
<script src="https://code.highcharts.com/highcharts.js"></script>
<script>
  const baseData = {
    spearman: [
      ['LIQE', 0.94, 'NR'], ['DISTS', 0.93, 'FR'], ['DBCNN', 0.90, 'NR'],
      ['CONTRIQUE', 0.88, 'NR'], ['TOPIQ', 0.87, 'NR'], ['ASIQE', 0.87, 'SC'], ['SIQE', 0.87, 'SC'],
      ['LINEARITY', 0.86, 'NR'], ['Koncept', 0.82, 'NR'], ['ARNIQA', 0.81, 'NR'],
      ['LPIPS', 0.81, 'FR'], ['CLIP-IQA+', 0.79, 'NR'], ['DOVER', 0.75, 'NR'],
      ['MDTVSFA', 0.71, 'NR'], ['META-IQA', 0.68, 'NR'], ['MANIQA', 0.63, 'NR'],
      ['RWQMS', 0.64, 'SC'], ['SVQI', 0.64, 'SC'], ['SQMS', 0.62, 'SC'],
      ['VMAF', 0.55, 'FR'], ['MSEA', 0.44, 'SC'], ['VSG', 0.47, 'SC'], ['ESIM', 0.38, 'SC'],
      ['PSNR', 0.37, 'FR'], ['SSIM', 0.35, 'FR'], ['GFM', 0.25, 'SC'], ['SIQM', 0.27, 'SC'],
      ['CNNIQA', 0.28, 'NR'], ['PIQE', 0.19, 'NR'], ['IW-SSIM', 0.14, 'FR'],
      ['RankIQA', 0.13, 'NR'], ['PaQ-2-PiQ', 0.14, 'NR'], ['BRISQUE', 0.07, 'NR'],
      ['KONIQ++', 0.06, 'NR'], ['FSIM', 0.03, 'FR'], ['EONSS', 0.02, 'NR'],
      ['HyperIQA', 0.02, 'NR'], ['TRES', 0.00, 'NR']
    ],
    pearson: [
      ['LIQE', 0.92, 'NR'], ['DISTS', 0.91, 'FR'], ['DBCNN', 0.89, 'NR'],
      ['CONTRIQUE', 0.87, 'NR'], ['TOPIQ', 0.86, 'NR'], ['ASIQE', 0.86, 'SC'], ['SIQE', 0.86, 'SC'],
      ['LINEARITY', 0.85, 'NR'], ['LPIPS', 0.83, 'FR'], ['ARNIQA', 0.80, 'NR'],
      ['CLIP-IQA+', 0.78, 'NR'], ['DOVER', 0.76, 'NR'], ['VMAF', 0.75, 'FR'],
      ['Koncept', 0.81, 'NR'], ['MDTVSFA', 0.72, 'NR'], ['META-IQA', 0.70, 'NR'],
      ['MANIQA', 0.65, 'NR'], ['RWQMS', 0.63, 'SC'], ['SVQI', 0.63, 'SC'], ['SQMS', 0.61, 'SC'],
      ['CNNIQA', 0.40, 'NR'], ['MSEA', 0.49, 'SC'], ['VSG', 0.50, 'SC'], ['ESIM', 0.47, 'SC'],
      ['PSNR', 0.57, 'FR'], ['SSIM', 0.55, 'FR'], ['GFM', 0.33, 'SC'], ['SIQM', 0.36, 'SC'],
      ['PaQ-2-PiQ', 0.32, 'NR'], ['PIQE', 0.35, 'NR'], ['RankIQA', 0.30, 'NR'],
      ['IW-SSIM', 0.34, 'FR'], ['BRISQUE', 0.20, 'NR'], ['KONIQ++', 0.18, 'NR'],
      ['FSIM', 0.25, 'FR'], ['EONSS', 0.08, 'NR'], ['HyperIQA', 0.12, 'NR'], ['TRES', 0.10, 'NR']
    ]
  };

  const colors = {
    'NR': '#76C7E0',       // No-Reference
    'FR': '#5D9C71',       // Full-Reference
    'SC': '#D6A34B',       // Screen Content
    'Subjective': '#4863A0' // Optional
  };

  function renderChart(type) {
    const sorted = baseData[type]
      .slice()
      .sort((a, b) => b[1] - a[1])
      .map(([label, value, category]) => ({
        name: label,
        y: value,
        color: colors[category] || '#999'
      }));

    Highcharts.chart('correlation-container', {
      chart: { type: 'bar' },
      title: { text: `${type.charAt(0).toUpperCase() + type.slice(1)} Correlation for Quality Metrics` },
      xAxis: {
        type: 'category',
        title: { text: null }
      },
      yAxis: {
        min: 0,
        max: 1,
        title: { text: 'Correlation' }
      },
      legend: { enabled: false },
      tooltip: {
        pointFormat: '<b>{point.y:.4f}</b>'
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.y:.2f}'
          }
        }
      },
      series: [{
        name: 'Correlation',
        data: sorted
      }]
    });
  }

  document.getElementById('correlation-type').addEventListener('change', function () {
    renderChart(this.value);
  });

  renderChart('spearman');
</script>


### Speed-Quality

Chart below shows Speed-Quality characteristics of metrics.

<div style="margin-bottom: 15px;">
  <label for="scatter-type"><strong>Select correlation type:</strong></label>
  <select id="scatter-type" style="margin-left: 10px; padding: 5px;">
    <option value="spearman">Spearman (SROCC)</option>
    <option value="pearson">Pearson (PLCC)</option>
  </select>
</div>

<div id="scatter-container" style="height: 800px; max-width: 1000px; margin: 0 auto;"></div>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script>
const data = {
  spearman: [
  {
    "name": "TRES",
    "data": [
      [
        11.2484890052695,
        0.06
      ]
    ],
    "color": "#390062",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "HyperIQA",
    "data": [
      [
        47.47899418830141,
        0.03
      ]
    ],
    "color": "#0cce35",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "EONSS",
    "data": [
      [
        111.05693294674774,
        0.08
      ]
    ],
    "color": "#8cd0a4",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "KONIQ++",
    "data": [
      [
        27.135049108272284,
        0.03
      ]
    ],
    "color": "#7d6277",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "BRISQUE",
    "data": [
      [
        44.21913088323041,
        0.17
      ]
    ],
    "color": "#7248ad",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "RankIQA",
    "data": [
      [
        113.33660919544384,
        0.18
      ]
    ],
    "color": "#477183",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "PaQ-2-PiQ",
    "data": [
      [
        59.19867231086774,
        0.17
      ]
    ],
    "color": "#347a3f",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "PIQE",
    "data": [
      [
        63.03386925227445,
        0.22
      ]
    ],
    "color": "#2c833f",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "CNNIQA",
    "data": [
      [
        1.208639180501152,
        0.25
      ]
    ],
    "color": "#d80623",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "MANIQA",
    "data": [
      [
        21.48054516337542,
        0.63
      ]
    ],
    "color": "#1045d1",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "META-IQA",
    "data": [
      [
        58.065861839284594,
        0.7
      ]
    ],
    "color": "#0f4194",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "MDTVSFA",
    "data": [
      [
        9.12,
        0.67
      ]
    ],
    "color": "#2ff8d2",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "DOVER",
    "data": [
      [
        25.56,
        0.67
      ]
    ],
    "color": "#6ff151",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "CLIP-IQA+",
    "data": [
      [
        17.79800126362327,
        0.69
      ]
    ],
    "color": "#771f54",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "ARNIQA",
    "data": [
      [
        24.08929179664622,
        0.77
      ]
    ],
    "color": "#0d961f",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "Koncept",
    "data": [
      [
        18.388584037864536,
        0.7
      ]
    ],
    "color": "#65ce0c",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "LINEARITY",
    "data": [
      [
        7.792098722827141,
        0.71
      ]
    ],
    "color": "#d6cb4d",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "TOPIQ",
    "data": [
      [
        16.17164888214512,
        0.8
      ]
    ],
    "color": "#70dd97",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "CONTRIQUE",
    "data": [
      [
        11.057529237012124,
        0.79
      ]
    ],
    "color": "#e5feba",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "DBCNN",
    "data": [
      [
        17.310069311946123,
        0.84
      ]
    ],
    "color": "#8e6f03",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "LIQE",
    "data": [
      [
        29.255255435511987,
        0.82
      ]
    ],
    "color": "#0353ce",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "ASIQE",
    "data": [
      [
        6.23,
        0.83
      ]
    ],
    "color": "#51bedd",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "SIQE",
    "data": [
      [
        6.25,
        0.82
      ]
    ],
    "color": "#d860ea",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "FSIM",
    "data": [
      [
        10.34,
        0.15
      ]
    ],
    "color": "#ae3550",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "IW-SSIM",
    "data": [
      [
        26.488812,
        0.25
      ]
    ],
    "color": "#8e4527",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "SSIM",
    "data": [
      [
        22.68546653678275,
        0.29
      ]
    ],
    "color": "#4f9b02",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "PSNR",
    "data": [
      [
        371.959,
        0.2
      ]
    ],
    "color": "#6e3d9a",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "VMAF",
    "data": [
      [
        56.622,
        0.43
      ]
    ],
    "color": "#ac561e",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "LPIPS",
    "data": [
      [
        3.2,
        0.76
      ]
    ],
    "color": "#3454e7",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "DISTS",
    "data": [
      [
        13.45630999038668,
        0.83
      ]
    ],
    "color": "#2f7c62",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "GFM",
    "data": [
      [
        6.872701,
        0.32
      ]
    ],
    "color": "#c285d4",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "SIQM",
    "data": [
      [
        9.753572,
        0.3
      ]
    ],
    "color": "#3184cf",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "ESIM",
    "data": [
      [
        8.65997,
        0.29
      ]
    ],
    "color": "#b7cc25",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "MSEA",
    "data": [
      [
        7.993292,
        0.33
      ]
    ],
    "color": "#b01af6",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "VSG",
    "data": [
      [
        5.780093,
        0.4
      ]
    ],
    "color": "#876f47",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "SQMS",
    "data": [
      [
        5.779973,
        0.49
      ]
    ],
    "color": "#163f22",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "RWQMS",
    "data": [
      [
        5.290418,
        0.59
      ]
    ],
    "color": "#eb39bc",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "SVQI",
    "data": [
      [
        9.330881,
        0.55
      ]
    ],
    "color": "#3fe936",
    "marker": {
      "symbol": "diamond"
    }
  }
],
  pearson: [
  {
    "name": "TRES",
    "data": [
      [
        11.2484890052695,
        0.0
      ]
    ],
    "color": "#390062",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "HyperIQA",
    "data": [
      [
        47.47899418830141,
        0.02
      ]
    ],
    "color": "#0cce35",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "EONSS",
    "data": [
      [
        111.05693294674774,
        0.02
      ]
    ],
    "color": "#8cd0a4",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "KONIQ++",
    "data": [
      [
        27.135049108272284,
        0.06
      ]
    ],
    "color": "#7d6277",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "BRISQUE",
    "data": [
      [
        44.21913088323041,
        0.07
      ]
    ],
    "color": "#7248ad",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "RankIQA",
    "data": [
      [
        113.33660919544384,
        0.13
      ]
    ],
    "color": "#477183",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "PaQ-2-PiQ",
    "data": [
      [
        59.19867231086774,
        0.14
      ]
    ],
    "color": "#347a3f",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "PIQE",
    "data": [
      [
        63.03386925227445,
        0.19
      ]
    ],
    "color": "#2c833f",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "CNNIQA",
    "data": [
      [
        1.208639180501152,
        0.28
      ]
    ],
    "color": "#d80623",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "MANIQA",
    "data": [
      [
        21.48054516337542,
        0.63
      ]
    ],
    "color": "#1045d1",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "META-IQA",
    "data": [
      [
        58.065861839284594,
        0.68
      ]
    ],
    "color": "#0f4194",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "MDTVSFA",
    "data": [
      [
        9.12,
        0.71
      ]
    ],
    "color": "#2ff8d2",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "DOVER",
    "data": [
      [
        25.56,
        0.75
      ]
    ],
    "color": "#6ff151",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "CLIP-IQA+",
    "data": [
      [
        17.79800126362327,
        0.79
      ]
    ],
    "color": "#771f54",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "ARNIQA",
    "data": [
      [
        24.08929179664622,
        0.81
      ]
    ],
    "color": "#0d961f",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "Koncept",
    "data": [
      [
        18.388584037864536,
        0.82
      ]
    ],
    "color": "#65ce0c",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "LINEARITY",
    "data": [
      [
        7.792098722827141,
        0.86
      ]
    ],
    "color": "#d6cb4d",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "TOPIQ",
    "data": [
      [
        16.17164888214512,
        0.87
      ]
    ],
    "color": "#70dd97",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "CONTRIQUE",
    "data": [
      [
        11.057529237012124,
        0.88
      ]
    ],
    "color": "#e5feba",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "DBCNN",
    "data": [
      [
        17.310069311946123,
        0.9
      ]
    ],
    "color": "#8e6f03",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "LIQE",
    "data": [
      [
        29.255255435511987,
        0.94
      ]
    ],
    "color": "#0353ce",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "ASIQE",
    "data": [
      [
        6.23,
        0.87
      ]
    ],
    "color": "#51bedd",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "SIQE",
    "data": [
      [
        6.25,
        0.87
      ]
    ],
    "color": "#d860ea",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "FSIM",
    "data": [
      [
        10.34,
        0.03
      ]
    ],
    "color": "#ae3550",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "IW-SSIM",
    "data": [
      [
        26.488812,
        0.14
      ]
    ],
    "color": "#8e4527",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "SSIM",
    "data": [
      [
        22.68546653678275,
        0.35
      ]
    ],
    "color": "#4f9b02",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "PSNR",
    "data": [
      [
        371.959,
        0.37
      ]
    ],
    "color": "#6e3d9a",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "VMAF",
    "data": [
      [
        56.622,
        0.55
      ]
    ],
    "color": "#ac561e",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "LPIPS",
    "data": [
      [
        3.2,
        0.81
      ]
    ],
    "color": "#3454e7",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "DISTS",
    "data": [
      [
        13.45630999038668,
        0.93
      ]
    ],
    "color": "#2f7c62",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "GFM",
    "data": [
      [
        6.872701,
        0.25
      ]
    ],
    "color": "#c285d4",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "SIQM",
    "data": [
      [
        9.753572,
        0.27
      ]
    ],
    "color": "#3184cf",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "ESIM",
    "data": [
      [
        8.65997,
        0.38
      ]
    ],
    "color": "#b7cc25",
    "marker": {
      "symbol": "diamond"
    }
  },
  {
    "name": "MSEA",
    "data": [
      [
        7.993292,
        0.44
      ]
    ],
    "color": "#b01af6",
    "marker": {
      "symbol": "triangle"
    }
  },
  {
    "name": "VSG",
    "data": [
      [
        5.780093,
        0.47
      ]
    ],
    "color": "#876f47",
    "marker": {
      "symbol": "triangle-down"
    }
  },
  {
    "name": "SQMS",
    "data": [
      [
        5.779973,
        0.62
      ]
    ],
    "color": "#163f22",
    "marker": {
      "symbol": "circle"
    }
  },
  {
    "name": "RWQMS",
    "data": [
      [
        5.290418,
        0.64
      ]
    ],
    "color": "#eb39bc",
    "marker": {
      "symbol": "square"
    }
  },
  {
    "name": "SVQI",
    "data": [
      [
        9.330881,
        0.64
      ]
    ],
    "color": "#3fe936",
    "marker": {
      "symbol": "diamond"
    }
  }
]
};

const tickLabels = [1, 2, 4, 8, 16, 32, 64, 128, 256];

function renderScatter(type) {
  Highcharts.chart('scatter-container', {
    chart: { type: 'scatter', zoomType: 'xy' },
    title: { text: `Correlation vs Speed (${type})` },
    xAxis: {
      title: { text: 'FPS (log scale)' },
      type: 'logarithmic',
      allowDecimals: false,
      tickPositions: tickLabels,
      labels: {
        formatter: function () { return this.value; }
      }
    },
    yAxis: {
      title: { text: `${type === "spearman" ? "SROCC" : "PLCC"} (↑ better)` },
      min: 0,
      max: 1
    },
    tooltip: {
      formatter: function () {
        return `<b>${this.series.name}</b><br/>FPS: ${this.x.toFixed(2)}<br/>${type.toUpperCase()}: ${this.y.toFixed(3)}`;
      }
    },
    legend: { enabled: false },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          allowOverlap: true
        }
      }
    },
    series: data[type]
  });
}

document.getElementById('scatter-type').addEventListener('change', function () {
  renderScatter(this.value);
});

renderScatter('spearman');
</script>
   

### Correlation of metrics on Natural Scenes and Screen Content

Comparison of metrics shift on natural videos on the images below. We compare metrics performance on proposed screen content dataset and CVQAD dataset containing natural professional and UGC videos compressed with different types of encoders.

<table>
  <tr>
    <td>
      <iframe src="/assets/img/benchmarks/itm/scsp.pdf" width="100%" height="200px" style="border: 1px solid #ccc;"></iframe>
    </td>
    <td>
      <iframe src="/assets/img/benchmarks/itm/scpr.pdf" width="100%" height="200px" style="border: 1px solid #ccc;"></iframe>
    </td>
    <td>
      <iframe src="/assets/img/benchmarks/itm/sckd.pdf" width="100%" height="200px" style="border: 1px solid #ccc;"></iframe>
    </td>
  </tr>
</table>

## Data description
The archive contains a set of numbered folders, each corresponding to a specific video.  
Inside each folder, you will find several distorted versions of the video along with the original file, named `orig.mkv`.
The file `Subjective_scores.csv` provides subjective quality scores for each method on each video, along with a brief description of the applied distortions.

Due to the nature of video conferencing applications, which may drop frames under limited network conditions, some distorted video versions may not contain all frames from the original. To account for this, we include a mapping between frames in the distorted versions and the original video. To facilitate frame alignment between the original and distorted videos, a rectangular region displaying a timer was embedded into each frame. During preprocessing, this region was consistently cropped, and the embedded timestamps were extracted. These extracted time values were then used to accurately align frames by matching corresponding timestamps. Before the subjective tests area with the timer was cropped out. 

The mapping is provided in the file `frames_mappings.json`, which links frame indices from the original videos to their corresponding frames in selected distorted versions. The file has following structure: 
<code>
 {[Original sequence] : [Method] : [Distorted frame index] : [Сorresponding original frame index]}
</code>``

## Methodology
### Video preparation
To construct a diverse and representative set of reference videos, we recorded a wide range of screen content typically encountered in
real-world scenarios. This includes slide-based presentations, code editors, terminal windows, web browsing, spreadsheets, data visualizations, mixed-content graphical interfaces and gaming. Care was taken to include both static and dynamic content, varying text sizes, color schemes, background complexities, and interaction patterns (e.g., mouse movements, scrolling, typing). All reference videos were captured at 1920x1080 resolution and 30 frames per second to ensure high visual fidelity. The recordings were captured using OBS Studio with lossless compression and 4:4:4 chroma subsampling. In total, the dataset includes 100 reference videos with durations ranging from 7 to 10 seconds.

We generated distorted video versions using two main approaches: screen recording of video conferencing apps and video compression with standard codecs. For the video conference apps recording, we used OBS Studio with lossless compression and 4:4:4 chroma subsampling. The color space settings were configured to match the original content, ensuring that recordings without transmission produce frames identical to the source video. This is critical for enabling accurate full-reference quality evaluation. Most recordings were made in native FullHD resolution. However, two services (Google Meet and Microsoft Teams) have no full-screen mode without interface elements. After cropping these interface elements, the resulting streams were rescaled to FullHD resolution. As a result, these videos are not pixel-aligned with the original reference and are therefore unsuitable for full-reference metric evaluation. They should be excluded when validating full-reference VQA models.

To emulate network fluctuations during screen content transmission, we used the tc-netem module on the sender side. Before each streaming session, specific network profiles were configured to simulate constrained network conditions. Both the transmitter and receiver machines were connected to a high-speed network with stable baseline conditions. The available bandwidth exceeded 100 Mbps, and baseline packet loss was consistently below 1%, ensuring that any observed degradation was due to the imposed emulation settings.

### Alignment 
Accurate frame alignment between original and distorted videos is crucial for the reliable application of full-reference video quality
metrics. To match frames of the original and the distorted versions, we added a rectangular area with a timer. On the alignment stage from each frame, a fixed region containing the timer was cropped. Text within this region was recognized using pytesseract. The recognized timestamps were used to match frames based on their displayed time values. To improve alignment robustness and reduce OCR errors, we added a horizontal progress bar above the timer during recording. This provided an additional feature for alignment by matching the relative length of the bar across frames. If the OCR failed to produce a valid match, the system flagged the frame and requested manual verification. The timer areas were removed before the subjective evaluation by cropping frames horizontally. This alignment procedure allows us to map distorted frames to their original counterparts, enabling usage of full-reference VQA models in our benchmark.

### Subjective Test
We used subjective pairwise comparison to rank the distorted video versions. Subjective votes were collected using crowdsourcing, for the evaluation, we used side-by-side preference selection. Participants were asked to choose which of two videos had better visual quality, with three response options: “left,” “right,” or “can’t choose.” Each participant evaluated 20 video pairs, including 2 hidden validation pairs with known answers. These validation pairs were created by compressing original videos using high CRF values to

### IQA methods calculation
Due to the results of our small (in terms of the data size) research for IQA methods Mean Temporal Pooling was selected as a way of aggregatig of each frame scores.

Therefore, to get a quality score for a video using IQA methods, we compared the given distorted sequence frame by frame with the corresponding frames of the reference video and then averaged calculated scores. The research mentioned above will be reproduced with more data in the future. 

* To encode the video we used the following command:

<code>
 ffmpeg −f rawvideo −vcodec rawvideo −s {width}x{height} −r {FPS} −pix_fmt yuv420p −i {video name}.yuv −c:v libx265 −x265−params " lossless =1:qp=0" −t {hours : minutes : seconds} −vsync 0 {video name}.mp4
</code>

* To decode the video back to YUV you can use:

<code>
 ffmpeg -i {video name}.mp4 -pix_fmt yuv420p -vcodec rawvideo -f rawvideo {video name}.yuv
</code>

* To convert the encoded video to the set of PNG images you can use:

<code>
 ffmpeg -i {video name}.mp4 {frames dir}/frame_%05d.png
</code>

### Correlation coefficients
To calculate correlation measure subjective scores and metric's output we chose Spearman’s Rank Correlation Coefficient ([SRCC](https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient)), Kendall’s Rank Correlation Coefficient ([KRCC](https://en.wikipedia.org/wiki/Kendall_rank_correlation_coefficient)).
<!-- As the most robust methods to measure correlation between subjective score of videos and metric's output Spearman’s Rank Correlation Coefficient ([SRCC](https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient)), Kendall’s Rank Correlation Coefficient ([KRCC](https://en.wikipedia.org/wiki/Kendall_rank_correlation_coefficient)) have been chosen.  -->Both measure the prediction monotonicity (the limit, to which the quality scores of a metric agree with the relative magnitude of the subjective scores).

<p align="center">
    <img src = "/assets/img/benchmarks/itm/corr.png" style="width: 50%;"/>
</p>

### Speed perfomance
We have also measured the metrics speed performance, expressed in FPS (the execution time of a full model runtime divided by the number of sequence frames). 
1.  Used videos:
* 5 reference videos
* 3 metric calculation for each distorted video
* 15 compressed videos and 45 total amount of measurements 
2. Output: maximum FPS of metric on any video.
3. Calculations were made using the following hardware:
* NVIDIA Titan RTX GPU
* 64 CPUs cluster, Intel(R) Xeon(R) Silver 4216 CPU @ 2.10GHz


## Metrics

<!-- Participants Table -->
<div id="participants_id" style="width: 90%; margin: 4rem auto;">
  <table class="datatable display" id="participants_table" style="background-color: #d4d4d4">
    <thead>
      <tr style="font-size: large; background-color: #3d6f96">
        <th style="background-color: #3d6f96; padding: 20px;">Name</th>
        <th style="background-color: #3d6f96; padding: 20px;">IQA/VQA</th>
        <th style="background-color: #3d6f96; padding: 20px;">Type</th>
        <th style="background-color: #3d6f96; padding: 20px;">Implementation</th>
      </tr>
    </thead>
    <tbody>
        <tr class='item'><td>ARNIQA [<a href="ARNIQA">3</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/chaofengc/IQA-PyTorch/">Link</a></td></tr>
        <tr class='item'><td>BRISQUE [<a href="BRISQUE">5</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/chaofengc/IQA-PyTorch">Link</a></td></tr>
        <tr class='item'><td>CLIP IQA [<a href="CLIP IQA">7</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/IceClear/CLIP-IQA">Link</a></td></tr>
        <tr class='item'><td>CLIP-IQA+ [<a href="CLIP-IQA+">8</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/chaofengc/IQA-PyTorch">Link</a></td></tr>
        <tr class='item'><td>CONTRIQUE [<a href="CONTRIQUE">12</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/pavancm/CONTRIQUE">Link</a></td></tr>
        <tr class='item'><td>COVER [<a href="COVER">13</a>]</td><td>VQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/vztu/COVER">Link</a></td></tr>
        <tr class='item'><td>CVRKD [<a href="CVRKD">14</a>]</td><td>IQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://github.com/guanghaoyin/CVRKD-IQA">Link</a></td></tr>
        <tr class='item'><td>DBCNN [<a href="DBCNN">15</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/zwx8981/DBCNN-PyTorch">Link</a></td></tr>
        <tr class='item'><td>DISTS [<a href="DISTS">16</a>]</td><td>IQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://github.com/dingkeyan93/IQA-optimization">Link</a></td></tr>
        <tr class='item'><td>DOVER [<a href="DOVER">17</a>]</td><td>VQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/teowu/DOVER-Dev">Link</a></td></tr>
        <tr class='item'><td>EONSS [<a href="EONSS">21</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/icbcbicc/EONSS-demo">Link</a></td></tr>
        <tr class='item'><td>FSIM [<a href="FSIM">25</a>]</td><td>IQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://github.com/photosynthesis-team/piq">Link</a></td></tr>
        <tr class='item'><td>FasterVQA [<a href="FasterVQA">26</a>]</td><td>VQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/teowu/FAST-VQA-and-FasterVQA">Link</a></td></tr>
        <tr class='item'><td>HyperIQA [<a href="HyperIQA">32</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/SSL92/hyperIQA">Link</a></td></tr>
        <tr class='item'><td>IW-SSIM [<a href="IW-SSIM">33</a>]</td><td>IQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://github.com/photosynthesis-team/piq">Link</a></td></tr>
        <tr class='item'><td>KonCept512 [<a href="KonCept512">34</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/ZhengyuZhao/koniq-PyTorch">Link</a></td></tr>
        <tr class='item'><td>Koncept [<a href="Koncept">35</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/subpic/koniq">Link</a></td></tr>
        <tr class='item'><td>LINEARITY [<a href="LINEARITY">36</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/lidq92/LinearityIQA">Link</a></td></tr>
        <tr class='item'><td>LIQE [<a href="LIQE">37</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/zwx8981/LIQE">Link</a></td></tr>
        <tr class='item'><td>LPIPS [<a href="LPIPS">38</a>]</td><td>IQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://github.com/richzhang/PerceptualSimilarity">Link</a></td></tr>
        <tr class='item'><td>MANIQA [<a href="MANIQA">43</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/IIGROUP/MANIQA">Link</a></td></tr>
        <tr class='item'><td>MDTVSFA [<a href="MDTVSFA">45</a>]</td><td>VQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/lidq92/MDTVSFA">Link</a></td></tr>
        <tr class='item'><td>MEON [<a href="MEON">46</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td>–</td></tr>
        <tr class='item'><td>MUSIQ [<a href="MUSIQ">52</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/chaofengc/IQA-PyTorch">Link</a></td></tr>
        <tr class='item'><td>PAQ-2-PIQ [<a href="PAQ-2-PIQ">56</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/baidut/paq2piq">Link</a></td></tr>
        <tr class='item'><td>PIQE [<a href="PIQE">57</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/chaofengc/IQA-PyTorch/">Link</a></td></tr>
        <tr class='item'><td>PSNR</td><td>IQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://videoprocessing.ai/vqmt/">MSU VQMT</a></td></tr>
        <tr class='item'><td>RankIQA [<a href="RankIQA">60</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/YunanZhu/Pytorch-TestRankIQA">Link</a></td></tr>
        <tr class='item'><td>SPAQ [<a href="SPAQ">61</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/h4nwei/SPAQ">Link</a></td></tr>
        <tr class='item'><td>SSIM [<a href="SSIM">63</a>]</td><td>IQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://videoprocessing.ai/vqmt/">MSU VQMT</a></td></tr>
        <tr class='item'><td>TOPIQ [<a href="TOPIQ">70</a>]</td><td>IQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://github.com/chaofengc/IQA-PyTorch">Link</a></td></tr>
        <tr class='item'><td>TRES [<a href="TRES">71</a>]</td><td>IQA</td><td style="color: #f4a261;"><b>NR</b></td><td><a href="https://github.com/isalirezag/TReS">Link</a></td></tr>
        <tr class='item'><td>VMAF [<a href="VMAF">75</a>]</td><td>VQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://videoprocessing.ai/vqmt/">MSU VQMT</a></td></tr>
        <tr class='item'><td>VQM</td><td>VQA</td><td style="color: #2a9d8f;"><b>FR</b></td><td><a href="https://videoprocessing.ai/vqmt/">MSU VQMT</a></td></tr>

    </tbody>
  </table>
</div>


## Contact us

For questions, propositions please contact authors: <nikolay.safonov@graphics.cs.msu.ru>, <mihail.rakhmanov@graphics.cs.msu.ru>, <dmitriy@graphics.cs.msu.ru> 
