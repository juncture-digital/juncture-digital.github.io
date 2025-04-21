---
layout: docs
title: Docs
permalink: /docs
---

## Juncture Documentation

Click on a topic for more information.

<div class="for-mobile">
  
  {% assign sorted_docs = site.docs | sort: "order" %}
  <ul>
    {% if page.url == "/docs.html" %}
      <li class="active" data-path="{{site.baseurl}}/docs"><a href="{{site.baseurl}}/docs">Home</a></li>
    {% else %}
      <li data-path="{{site.baseurl}}/docs"><a href="{{site.baseurl}}/docs">Home</a></li>
    {% endif %}

    {% for doc in sorted_docs %}
      {% assign segments = doc.url | split: '/' %}
      {% assign last_segment = segments | last %}
      {% if last_segment == "" %}
        {% assign seg_size = segments | size %}
        {% assign index = seg_size | minus: 2 %}
        {% assign last_segment = segments[index] %}
      {% endif %}

      {% if last_segment == "index" %}
        {% if page.url == doc.url %}
          <li class="active" data-path="{{site.baseurl}}{{doc.url}}">
        {% else %}
          <li data-path="{{site.baseurl}}{{doc.url}}">
        {% endif %}
          <a href="{{site.baseurl}}{{doc.url}}">
            {{ doc.title | escape }}
          </a>
        </li>
        
        <ul>
        {% assign cat_docs = site.docs | where: "category", doc.category %}
        {% for cat_doc in cat_docs %}
          {% assign cat_docs_segments = cat_doc.url | split: '/' %}
          {% assign last_cat_doc_segment = cat_docs_segments | last %}
          {% if last_cat_doc_segment == "" %}
            {% assign cat_doc_seg_size = last_cat_doc_segment | size %}
            {% assign cat_doc_index = cat_doc_seg_size | minus: 2 %}
            {% assign last_cat_doc_segment = cat_docs_segments[cat_doc_index] %}
          {% endif %}
          
          {% if last_cat_doc_segment != "index" %}
            {% if page.url == cat_doc.url %}
              <li class="active" data-path="{{site.baseurl}}{{cat_doc.url}}">
            {% else %}
              <li data-path="{{site.baseurl}}{{cat_doc.url}}">
            {% endif %}
              <a href="{{site.baseurl}}{{cat_doc.url}}">
                {{ cat_doc.title | escape }}
              </a>
            </li>
          {% endif %}
        {% endfor %}
        </ul>
      {% endif %}
    {% endfor %}
  </ul>
</div>