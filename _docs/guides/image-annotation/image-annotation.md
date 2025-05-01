---
title: Image Annotation
layout: docs
category: guides
---

## Image Annotation

Juncture supports two ways to add annotations to images. Each approach offers different benefits, depending on how you prefer to work.  The inline annotations are the easiest to use are are suitable for a wide range of use cases.  The inline annotations have the benefit of not using an external file to store the annotation data, everything is self-contained a single Markdown file.

---

### 1. Inline Annotations (Powered by Smart Links)

**Best for:** Quick, in-context annotations added directly in your Markdown.  This is often the best option for simple annotations.

Inline Annotations use **Smart Links** — a special kind of link in Juncture that combines your annotation text with instructions on how to zoom into a specific region of an image.

A basic Smart Link looks like this:

```
[This is a note](my-image-id/zoomto/100,50,200,75)
```

- `my-image-id` is the ID of the image being annotated  
- `zoomto` is the action that instructs Juncture to zoom into a specific region  
- `100,50,200,75` are the coordinates: `x`, `y`, `width`, `height`  
- Coordinates can be given in **pixels** (default) or **percentages**

#### Using percentage-based coordinates

When using **relative regions**, the coordinates must be prefixed with `pct:` (or `percentage:`). For example:

```
[This is a note](my-image-id/zoomto/pct:25,40,30,20)
```

> 💡 The coordinates copied from Juncture’s viewer use the relative version and include the `pct:` prefix, so you can paste them directly into your link.

For pixel values, you can optionally use `px:` or `pixels:`, but no prefix is needed since pixel units are the default:

```
[This is a note](my-image-id/zoomto/px:100,200,300,150)
```

#### How to get the coordinates

1. Click the image to activate **dynamic mode** (the zoomable viewer).  
2. Pan and zoom until your area of interest fills the viewport.  
3. Hover over the **top-right corner** of the viewer.  
4. A small window will appear showing coordinates in the format:  
   `pct:x,y,width,height`  
5. **Click the window** to copy the full string (including the `pct:` prefix).  
6. Paste it into your Smart Link.

#### Why use this method

- No separate files — everything stays in your Markdown document  
- Great for quick notes, storytelling, or creating guided image tours  
- Powered by Juncture’s flexible Smart Link system

---

### 2. W3C (External) Annotations

**Best for:** situations where more control over the dimensions of the annotation bounding box are required.  This approach is implemented using the annotorious plugin.

This method uses a drawing tool allowing the bounding box for the annotation region of interest to be defined by mouse click and drag.  It also follows the [W3C Web Annotation standard](https://www.w3.org/TR/annotation-model/). With this approach you can draw on the image and enter your annotation text directly in the image viewer.

Because Juncture doesn’t have permission to save files to your GitHub account, you’ll be given a snippet of JSON code to copy and paste into a GitHub file yourself.

The W3C annotations can also be used with Smart Links.  When using an annotation as the `zoomto` target in a Smart Link the annotation ID is used instead of the region coordinates.  After creating an annotation its ID can be found by opening the info drawer (by clicking the menu icon located at the left side of the caption bar) and then selecting the "Annotations" tab.  A list of image annotations will be shown.  Clicking on the `copy` button associated with an annotation will copy the ID to the clipboard.  It can then be pasted into a Smart Link.

#### How it works

1. Click the image to enter **dynamic mode**.  
2. Enable the annotation drawing tool by clicking on the `Enable annotator` button found in the `Annotations` tab in the info drawer.  The info drawer is opened by clicking on the menu icon found on the left side of the image caption bar.
3. After enabling the annotator, use the annotation drawing tool to draw a box and type your note. A box is defined by holding down the shift key and dragging your mouse to define the bounding box region.  After using the mouse to select the region of interest, annotation text is entered using a popup form.
4. Juncture will generate the annotation as a JSON snippet.  
5. **Copy the JSON** and paste it into a `.json` file in your GitHub repository.

#### Why use this method

- An intuitive visual interface for creating annotations  
- Great for precise, structured annotations  
- Follows a widely used standard (W3C Web Annotation)  

The Juncture `image` component supports **interactive image annotations** using [Annotorious](https://recogito.github.io/annotorious/) with [OpenSeadragon](https://openseadragon.github.io/). This allows authors to highlight and comment on specific regions of an image.

### Examples

- Example of an annotated image using the inline annotations approach.

   ```juncture
   `image #image1 src=wc:Monument_Valley,_Utah,_USA.jpg caption="Monument Valley" .right`

   - [West Mitten Butte](image1/zoomto/pct:9.3,28.44,26.25,26.21)
   - [East Mitten Butte](image1/zoomto/pct:45.76,41.95,13.44,13.42)
   - [Merrick Butte](image1/zoomto/pct:69.15,36.53,21,20.97)
   ```
   ---
   `image #image1 src=wc:Monument_Valley,_Utah,_USA.jpg caption="Monument Valley" .right`

   - [West Mitten Butte](image1/zoomto/pct:9.3,28.44,26.25,26.21)
   - [East Mitten Butte](image1/zoomto/pct:45.76,41.95,13.44,13.42)
   - [Merrick Butte](image1/zoomto/pct:69.15,36.53,21,20.97)

- Example using the annotorious plugin

   ```juncture
   `image #image2 src=wc:Monument_Valley,_Utah,_USA_(23611451292).jpg caption="Monument Valley" .center .medium`
   ```
   ---
   Click on the annotation icon located on the right side of the caption bar.  This will show the annotations which can then be clicked on to see the annotation text.

   `image #image2 src=wc:Monument_Valley,_Utah,_USA_(23611451292).jpg caption="Monument Valley" .center .medium`

- Example using the annotorious plugin annotations with Smart Links

   ```juncture
   `image #image3 src=wc:Monument_Valley,_Utah,_USA_(23611451292).jpg caption="Monument Valley" .right`

   - [West Mitten Butte](image3/zoomto/d3ebbd3e)
   - [East Mitten Butte](image3/zoomto/cd3805ec)
   - [Merrick Butte](image3/zoomto/e34e59e0)
   ```
   ---
   `image #image3 src=wc:Monument_Valley,_Utah,_USA_(23611451292).jpg caption="Monument Valley" .right`

   - [West Mitten Butte](image3/zoomto/d3ebbd3e)
   - [East Mitten Butte](image3/zoomto/cd3805ec)
   - [Merrick Butte](image3/zoomto/e34e59e0)
{: .example}

## How to Annotate an Image using the W3C approach

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
