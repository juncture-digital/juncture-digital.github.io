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

## Agave

[]({{ site.baseurl }}/examples/agave)

![](wc:Gc29_agave_americana.jpg)

Agave is a genus of monocots, with some 200 species indigenous to Central America, the southwestern United States, and in some tropical areas of South America. Today, agaves are best known as the plant from which tequila is made. While blue agaves grown in Mexico are used to produce tequila in that country, the cultural salience of the plant extends well beyond the world of distilled spirits. Indeed, as this visual narrative shows, agave plants played a central role in ancient Amerindian religion and culture for centuries, encouraged a botanical revolution in Europe, helped form Mexican identity in the nineteenth and twentieth centuries, and offer solutions to present-day environmental challenges.

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