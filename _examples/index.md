---
layout: default
title: Examples
permalink: /examples
---

<ul>
{% assign posts = site['examples'] %}
{% for post in posts %}
    {% if page.url == post.url %}
        <li class="chapter active" data-level="1.2" data-path="{{site.baseurl}}{{post.url}}">
    {% else %}
        <li class="chapter" data-level="1.1" data-path="{{site.baseurl}}{{post.url}}">
    {% endif %}
        <a href="{{site.baseurl}}{{post.url}}" onclick="pageScrollToTop(this)">
        {{ post.title | escape }}
    </a>
    {% if site.toc.enabled %}
        {% if page.url == post.url %}
        {% include toc.html html=content h_min=site.toc.h_min h_max=site.toc.h_max %}
        {% endif %}
    {% endif %}
    </li>
{% endfor %}
</ul>
