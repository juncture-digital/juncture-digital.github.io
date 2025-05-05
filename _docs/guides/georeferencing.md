---
title: Image Georeferencing
layout: docs
category: guides
---

# 🗺️ Using Allmaps to Warp and Overlay Historical Maps

## 📌 Overview: What Is Image Georeferencing and Allmaps?

**Image georeferencing** is the process of taking an old or scanned map and figuring out where it fits on a modern map. Imagine you have a hand-drawn map from 1800—it doesn’t know anything about GPS or Google Maps. Georeferencing helps place that historical map in the right spot on today’s globe so you can see how things have changed over time.

**Allmaps** is a free, web-based tool that makes it easy to georeference old maps—even if you're not a tech expert. It lets you:

- Open a scanned map (usually from a library or archive),
- Match key points on it to real-world locations,
- And view the result "warped" or stretched to fit over a modern map like Google Maps or OpenStreetMap.

### 💡 Why Use It?

- **Compare Then vs. Now**: See how towns, rivers, or coastlines have changed over time.
- **Tell Stories with Maps**: Use old maps as interactive backdrops for historical or cultural projects.
- **Add Depth to Exhibits or Research**: Great for museums, education, genealogy, and local history.

For example, you could overlay a Civil War-era map of your region onto a modern one and explore what landmarks have remained—or disappeared—over the past 150 years.

---

## 🔧 Step-by-Step: Warp a Historical Map and Add It to Juncture

### Step 1: Prepare a IIIF-Compatible Map Image

Allmaps works with IIIF (International Image Interoperability Framework) images. Many libraries and archives (like the British Library or David Rumsey Map Collection) provide maps using IIIF. 

- Example IIIF Manifest URL:  
  `https://iiif.library.harvard.edu/manifests/view/drs:48309543`

If you're hosting your own map, you'll need to serve it using a IIIF-compatible image server such as **Cantaloupe** or **Loris**.

---

### Step 2: Georeference the Map Using Allmaps Editor

1. Go to the [Allmaps Editor](https://editor.allmaps.org/).
2. Paste your **IIIF Manifest URL** or image info URL into the input field.
3. Click **"Open"** to load the historical map.
4. On the left, you’ll see your old map. On the right is a modern map.
5. Add **Control Points**:
   - Click a known location on the old map (left).
   - Click the corresponding location on the modern map (right).
   - Add at least **3 to 5 well-spaced points** for better accuracy.
6. Once you’re done, click the **"Annotation"** button to:
   - **Copy** the resulting annotation JSON.
   - Or **Download** it.
   - Or **Copy a link** if it’s hosted online.

---

### Step 3: View or Host the Warped Map

1. To preview your warped map, go to the [Allmaps Viewer](https://viewer.allmaps.org/).
2. Paste in your **annotation URL** and see the historical map stretched to align with the real world.
3. You can now host the annotation file on GitHub, a web server, or any public URL.

---

### Step 4: Add It as an Overlay in a Juncture Map Component

Here’s how to embed your warped map into a Juncture narrative:

```juncture
`map location=51.13224,0.25153,14.53 caption="Tunbridge Wells" opacity=100`
`- allmaps=7c569bcd9d292a49 name="Tunbridge Wells (c.1870-1890)"`
`- marker=Q665489`
```

---

## Example

`map location=51.13224,0.25153,14.53 caption="Tunbridge Wells"`
`- allmaps=7c569bcd9d292a49 name="Tunbridge Wells (c.1870-1890)" opacity=100`
`- marker=Q665489`

---

## 🧩 Tips

- You can use public annotations from Allmaps or host your own.
- Look for maps with good detail and known landmarks to make georeferencing easier.
- Combine multiple overlays to show changes across time periods.

---

## 🔗 Resources

- [Allmaps Editor](https://editor.allmaps.org/)
- [Allmaps Viewer](https://viewer.allmaps.org/)
- [What is IIIF?](https://iiif.io/)