---
layout: default
title: Examples
permalink: /examples
---

# Juncture Examples
{: .cards}

## Monument Valley

[]({{ site.baseurl }}/examples/monument-valley)

![](wc:Monument_Valley_Aussichtspunkt.JPG)

An essay on the Monument Valley demonstrating the use of a header, footnotes, an interactive image and map, entity info popups, and YouTube videos.

{%- comment -%} 
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
{%- endcomment -%}