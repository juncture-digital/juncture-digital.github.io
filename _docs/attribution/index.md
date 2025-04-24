---
title: Attribution
layout: docs
category: attribution
order: 6
---

## Technologies Used by Juncture

Juncture is built on a modular architecture that combines modern web technologies with the simplicity of Markdown. Below is a list of the key libraries, services, and technologies that power the Juncture IFC system.

---

### 📦 Frontend Libraries & Frameworks

- **[OpenSeadragon](https://openseadragon.github.io/)**  
  High-resolution, zoomable image viewing used in the `image` component.

- **[Annotorious](https://recogito.github.io/annotorious/)**  
  Region-based image annotation, integrated with OpenSeadragon.

- **[Leaflet](https://leafletjs.com/)**  
  Interactive map rendering for the `map` component.

- **[Shoelace](https://shoelace.style/)**  
  Web component UI library used for drawers, tabs, buttons, etc.

- **[Marked](https://marked.js.org/)**  
  Markdown-to-HTML parsing inside iframe components.

- **[js-md5](https://github.com/emn178/js-md5)**  
  Used to generate MD5 hashes, especially for Wikimedia Commons image URLs.

---

### 🌍 Data & Media Services

- **[Wikimedia Commons](https://commons.wikimedia.org/)**  
  Source for public domain and freely licensed media, referenced using the `wc:` prefix.

- **[Wikidata](https://www.wikidata.org/)**  
  Structured data source for entities used in maps and popups. Juncture components can reference Wikidata QIDs (e.g., `Q60` for New York City) to dynamically retrieve entity labels, descriptions, coordinates, images, and links.

- **[IIIF (International Image Interoperability Framework)](https://iiif.io/)**  
  Protocol for structured image access and metadata, powering Juncture’s image delivery and info panels.

- **[GitHub](https://github.com/)**  
  Markdown files, image/audio assets, and annotation JSON files are typically hosted in GitHub repositories. Works seamlessly with GitHub Pages.

---

### 🧩 Technologies & Architecture

- **Iframe-based Component Embeds**  
  Each component is rendered in its own iframe for modularity and encapsulation.

- **Markdown Extensions**  
  Juncture introduces custom inline tags (e.g., \`image\`, \`map\`, \`audio\`) that translate to rich interactive components.

- **No Build Tools Required**  
  All components are written using native JavaScript, ES modules, and web standards—no bundlers or transpilers needed.

- **Static Site Generators**  
  Compatible with static site workflows (e.g., Jekyll + GitHub Pages), allowing easy hosting and deployment without a CMS.

---