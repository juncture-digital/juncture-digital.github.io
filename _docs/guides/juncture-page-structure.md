---
title: Juncture Page Structure
layout: docs
category: guides
---

# How Juncture Uses Headings to Structure Your Page

In Juncture, every Markdown heading you write—`#`, `##`, `###`, and so on—automatically becomes a **section**, and each lower-level heading becomes a **subsection within the section above it**. This creates a clear **parent-child hierarchy**, like an outline.

Each section is wrapped in its own container, and **child sections inherit styles from their parent**, which helps keep your page visually consistent and well organized.

But this structure does more than just organize content—it’s the foundation for advanced page layouts that go far beyond plain Markdown. By turning your flat Markdown into a meaningful hierarchy, Juncture makes it easy to create:

- **[Multi-column layouts]({{ site.baseurl }}/docs/layout/multi-column)**
- **[Tabbed sections]({{ site.baseurl }}/docs/layout/tabs)**
- **[Grid-style cards and galleries]({{ site.baseurl }}/docs/layout/cards)**

And the best part? **This all happens automatically**. You don’t need to do anything special—the structure is created for you, just by using headings.

The example below illustrates the hierarchical document structure that Juncture applies based on the Markdown headings.
<style>
    .demo section { margin: 1em; padding: 0 0.5em; }
    .demo.section1 { border: 1px solid #444; background-color: #eee; }
    .demo .section2 { border: 1px solid #444; background-color: #ccc; }
    .demo .section3 { border: 1px solid #444; background-color: #aaa; }
</style>

# Heading 1
{: .demo}

## Heading 1.1

### Heading 1.1.1

### Heading 1.1.2

## Heading 1.2

### Heading 1.2.1

### Heading 1.2.2