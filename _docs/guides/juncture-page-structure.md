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