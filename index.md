---
layout: default
---

<link rel="stylesheet" href="/assets/css/style.css">

<div class="posts">
  {% for category in site.categories %}

      {% capture category_name %}{{ category | first }}{% endcapture %}

	  <h1 style="text-align: center;">{{category_name}}</h1>

	  <ul>
	  {% for post in site.categories[category_name] %}

	  	<li>
	    <article class="post">

	      <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

	      <div class="entry">
	        {{ post.excerpt }}
	      </div>

	    </article>
	    </li>
	  {% endfor %}
	  </ul>
	{% endfor %}
</div>