---
layout: default
---

<link rel="stylesheet" href="/assets/css/style.css">

<div class="posts">
  {% for category in site.categories %}

      {% capture category_name %}{{ category | first }}{% endcapture %}

	  <h1 style="text-align: center;">{{category_name}}</h1>

	  {% for post in site.categories[category_name] %}


	    <article class="post">

	      <h2 style="color: rgb(0, 0, 0);" ><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

	      <div class="entry">
	        {{ post.excerpt }}
	      </div>

	  	  <br>

	      <!-- <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a> -->
	    </article>
	  {% endfor %}
	{% endfor %}
</div>