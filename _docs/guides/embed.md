---
title: Using Embed Codes
layout: docs
category: guides
---

# Embedding External Content

The Juncture extensions to Markdown include several **custom components** such as `image`, `audio`, `map`, and `youtube`. These components are implemented using **iframes** and provide enhanced features like **Smart Links**, zooming, annotations, and interactive behaviors.

Importantly, authors are **not limited** to using Juncture components to add functionality to their pages. You have three main ways to embed external or custom content:

1. Use Juncture’s built-in components (`image`, `audio`, `map`, `youtube`, etc.).
2. Use the **generic Juncture iframe component** with a `src` attribute to embed any iframe-compatible content.
3. Copy and paste **embed codes** (such as `<iframe>`) directly from third-party sites.

## What Are HTML Embed Codes?

An **HTML embed code** is a snippet provided by many websites (such as `<iframe>`, `<embed>`, or `<script>`) that lets you display media or functionality from another site within your own page.

Example YouTube embed code:

```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
```

Juncture Markdown supports raw HTML, so you can paste these embed codes directly into your Markdown files.

## Juncture Components (Implemented with Iframes)

The following Juncture components are implemented using iframes and provide advanced features:

| Component  | Description                              | Example Markdown                                         |
|------------|----------------------------------------|---------------------------------------------------------|
| `image`   | Zoomable, annotated image viewer       | `image src=wc:Sunflower_sky_backdrop.jpg`            |
| `audio`   | Audio player with captions             | `audio src=https://example.com/audio.mp3`            |
| `youtube` | Embedded YouTube video player          | `youtube vid=dQw4w9WgXcQ`                           |
| `map`     | Interactive map using Leaflet          | `map location=32.051,-81.104,8 caption="Savannah, GA" marker` |
| `header`  | Full-width page header with title/nav  | `header title="My Page" img=wc:Banner.jpg`          |

These components simplify adding interactivity and visual elements without requiring manual HTML or JavaScript.

## Using the Generic Juncture Iframe Component

To embed content not directly supported by Juncture, use the **generic iframe component**:

```markdown
`iframe src=https://example.com/embed`
```

This allows you to embed any external webpage or service using an iframe.

## Adding Raw Embed Codes

Many third-party sites (like YouTube, Google Maps, and Vimeo) provide ready-made embed codes you can paste directly into your Markdown.

### Example: YouTube iframe

```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
```

### Example: Google Maps iframe

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
></iframe>
```

Just paste the code where you want the content to appear—Juncture will render it along with the rest of the page.

## Tips and Best Practices

- Place raw HTML or iframe blocks on their own line in the Markdown file.
- Use Juncture’s **custom components** when available for the best experience and Smart Link support.
- You can mix Juncture components and raw embed codes within the same Markdown file.
- If using Jekyll or GitHub Pages, make sure raw HTML is allowed (the default `kramdown` setup supports it).

## Learn More

- [Juncture Image Documentation](./image.md)
- [Juncture Audio Documentation](./audio.md)
- [Juncture YouTube Documentation](./youtube.md)
- [Juncture Map Documentation](./map.md)
- [Juncture Header Documentation](./header.md)

With Juncture, you combine Markdown simplicity with powerful interactive content—no programming required.