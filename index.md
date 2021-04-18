---
layout: default
---

<link rel="stylesheet" href="/assets/css/style.css">

<div class="posts">
{% for category in site.ordered_categories %}
    <h2 style="text-align: center;">{{ category.title }}</h2>
    <ul>
    {% for post in site.categories[category.key] %}
        <li>
            <b><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></b>
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
