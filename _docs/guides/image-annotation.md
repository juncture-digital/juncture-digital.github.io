---
title: Image Annotation
layout: docs
category: guides
---

## Image Annotations in Juncture

Juncture supports a easy-to-use method for annotating images: **inline annotations** using **Smart Links**. Everything stays within your Markdown file—no external tools or data files required.

Juncture annotations use **[Smart Links]({{ site.baseurl }}/docs/guides/smart-links)**—a special kind of link that combines annotation text with zoom instructions targeting a specific region of an image.

### Example

```Juncture
`image #anno-example src=wc:Monument_Valley,_Utah,_USA.jpg center medium`

- [West Mitten Butte](anno-example/zoomto/pct:11,31,20,23)
- [East Mitten Butte](anno-example/zoomto/pct:44.71,39.51,15.32,18.96)
- [Merrick Butte](anno-example/zoomto/pct:69.65,35.38,21.82,23.43)
```

- `anno-example` is the ID of the image being annotated  
- `zoomto` tells Juncture to zoom to the specified region  
- `pct:11,31,20,23` defines the region using percentage-based coordinates:  
  `x`, `y`, `width`, and `height`

---
<br/>

`image #anno-example src=wc:Monument_Valley,_Utah,_USA.jpg center medium`

- [West Mitten Butte](anno-example/zoomto/pct:11.05,30.81,20.23,23.42)
- [East Mitten Butte](anno-example/zoomto/pct:44.71,39.51,15.32,18.96)
- [Merrick Butte](anno-example/zoomto/pct:69.65,35.38,21.82,23.43)

---

### How to Get the Coordinates

You can define annotation regions using an interactive drawing tool in the image viewer:

1. Click on the image to enter **dynamic mode** (zoomable viewer).  
2. **Hold down the Shift key** and **drag with your mouse** to draw a bounding box over the region you want to annotate.  
3. After creating the annotation bounding box, you can then **resize and reposition** the box as needed.  
4. When the box is correctly placed, click the **copy icon** in the bottom-right corner of the box.  
5. The coordinates (with the `pct:` prefix) are copied to your clipboard.  
6. Paste them into your Smart Link inside your Markdown file.

To cancel or remove the current bounding box, press the **Escape** key.

---

### Another Example Using a High Resolution Image

`image #bedroom src=wc:Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg`

- [Picture above bed](bedroom/zoomto/pct:43.40,9.92,11.06,9.65)
- [Heavy paint example](bedroom/zoomto/pct:35.26,41.20,1.28,1.43)