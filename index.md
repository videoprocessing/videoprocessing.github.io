---
layout: default
---

<link rel="stylesheet" href="/assets/css/style.css">

<h3 style="align-self: center;">Our plan is to develop #1 benchmark collection in Video Processing area</h3>

<div class="posts">
{% for category in site.ordered_categories %}
    <h2 style="text-align: center;">{{ category.title }}</h2>
    <ul>
    {% for post in site[category.type][category.key] %}
        <li>
            <b><a href="
            {% if post.external_url %}
                {{ post.external_url }}
            {% else %}
                {{ site.baseurl }}{{ post.url }}
            {% endif %}">
            {% if post.short_title %}
                {{ post.short_title }}
            {% else %}
                {{ post.title }}
            {% endif %}
            </a></b>
            <ul>
            {% for feature in post.features %}
                <li>{{ feature }}</li>
            {% endfor %}
            </ul>
        </li>
    {% endfor %}
    </ul>
{% endfor %}
</div>
