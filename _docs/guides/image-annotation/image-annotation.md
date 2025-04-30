---
title: Image Annotation
layout: docs
category: guides
---

## Image Annotation

The Juncture `image` component supports **interactive image annotations** using [Annotorious](https://recogito.github.io/annotorious/) with [OpenSeadragon](https://openseadragon.github.io/). This allows authors to highlight and comment on specific regions of an image.

Below is an example of an annotated image.

`image #image1 src=wc:Monument_Valley,_Utah,_USA_(23611451292).jpg caption="Monument Valley" cover showannos .right .shadow`

- [West Mitten Butte](image1/zoomto/d3ebbd3e)
- [East Mitten Butte](image1/zoomto/cd3805ec)
- [Merrick Butte](image1/zoomto/e34e59e0)

##

`image #image2 src=wc:Monument_Valley,_Utah,_USA_(23611451292).jpg caption="Monument Valley" cover .right .shadow`

- [West Mitten Butte](image2/zoomto/pct:12.62,25.24,21.24,20.98)
- [East Mitten Butte](image2/zoomto/pct:41.57,30.61,20.97,20.71)
- [Merrick Butte](image2/zoomto/pct:61.07,23.52,32.77,32.36)

## How to Annotate an Image

### Overview

The Juncture `image` component uses the [Annotorious](https://annotorious.dev/) OpenSeadragon plugin for image annotation.  When a Juncture image is displayed any annotations found for the image are loaded and may be viewed on the image.  Annotations may be created, modified, or deleted by enabling the annotator from within the info drawer.  Any annotation updates must be manually saved by the annotation author as Juncture does not have the ability to create or modify files in a users GitHub account.

### Enabling Annotation Mode

Annotations can be created and managed directly within the viewer. To begin:

1. **Open the info drawer**  
   Click the **three vertical dots icon** located on the **left side of the caption bar** to open the info drawer.

2. **Switch to the Annotations tab**  
   Select the **"Annotations"** tab from the drawer interface.

3. **Click "Enable annotator"**  
   This activates annotation mode, allowing you to:
   - Draw annotation boxes
   - Add comments to regions
   - Modify or delete existing annotations

### Copying and Saving Annotations

Once annotations are created or modified:

- Click **"Copy annotations to clipboard"** to copy the annotations (in JSON format).
- Paste the copied JSON into a file in your GitHub repository.

By default, Juncture will look for the annotation file in the **same folder** as the Markdown file that uses the image.

For example, if your Markdown file is located at:

```
/docs/pages/example.md
```

And your image component is:

```
`image src=wc:Example_Image.jpg`
```

Then Juncture will look for:

```
/docs/pages/Example_Image.json
```

To override this default behavior, use the `annos` property to specify the annotation file location:

```
`image src=wc:Example_Image.jpg annos=gh:my-org/my-repo/main/assets/annotations/example.json`
```

### Displaying Annotations on Load

To automatically show annotations when the image is loaded, include the `showannos` property:

```
`image src=wc:Example_Image.jpg showannos`
```

Otherwise, viewers can toggle annotation display using the **annotation icon** in the caption bar.