---
title: Components
layout: docs
category: component
order: 3
---

<style>
    blockquote { font-size: 95%; line-height: 1.3; margin-top: 1em; }
</style>

# Components

Juncture provides a simple extension to the basic Markdown tagging, enabling images, maps, YouTube videos, and other visual elements to be inserted into a web page generated from Markdown text.  The basic Juncture component tag is a single-line Markdown code string, enclosed in backticks, for example:

```juncture
`component-name #id property1=value1 property2="some value2" boolean-property .class1 .class2`
```

- The **first word** is always the component type: `image`, `map`, `audio`, `youtube`, or `header`.
- After that come any number of **properties**, each defined with `key=value`.
- For **boolean properties**, you just use the key—no `=true` needed.  
  > Example: `marker` is the same as `marker=true`.

If a value contains **spaces**, wrap it in **quotes**:

## Defining Juncture Components: Attributes, IDs, and Classes

Juncture components (like `image`, `map`, or `video`) can be customized using **attributes**, **IDs**, and **class names**. These options let you control the behavior, appearance, and interactivity of each component.

> 📝 Attributes may sometimes be referred to as *properties*. To stay consistent with HTML and Markdown conventions, we will refer to them as **attributes**.

---

### 1. **Attributes**

**What they do:**  
Attributes pass information directly to the Juncture component. You use them to set the source of a file, define captions, or enable layout options like centering or scaling.

**Example:**

```juncture
`image src=tree.jpg caption="Old Oak Tree" cover`
```

- `src=tree.jpg` sets the image file  
- `caption="Old Oak Tree"` adds a caption  
- `cover` is a **boolean attribute** — it works just by being present (no value needed)  
- Quotation marks are **only required** when a value contains spaces

**Syntax highlighting colors:**
- Attribute names (e.g. `src`, `caption`) → **Indigo**
- Attribute values (e.g. `"tree.jpg"`, `"Old Oak Tree"`) → **Green**
- Boolean flags (e.g. `cover`, `marker`) → **Orange italic**

---

### 2. **ID (Optional — for Smart Links)**

**What it does:**  
IDs give a unique identifier to a Juncture component instance. They are primarily used to support **Smart Links**, which can trigger component actions like zooming into an image region or navigating to a specific map location.

**Example:**

```juncture
`image #main-tree src=tree.jpg`
```

This sets the component ID to `main-tree`, which can be used in a Smart Link like this:

```juncture
    [Zoom In](#main-tree/zoomto/pct:30,45,25,25)
```

**Syntax highlighting color:**
- IDs (e.g. `#main-tree`) → **Purple**

---

### 3. **Class Names (Optional)**

**What they do:**  
Class names apply visual styling to the wrapper around a Juncture component. You can use them to control appearance or layout (e.g., borders, margins, effects). Multiple class names can be added.

**Example:**

```juncture
`image src=tree.jpg .center .medium`
```

- `.center` and `.medium` apply CSS classes to the wrapper  
- These styles are controlled by Juncture defaults or your custom stylesheet

**Syntax highlighting color:**
- Class names (e.g. `.center`, `.medium`) → **Light Blue**

Refer to the [Juncture Classes]({{ site.baseurl }}/docs/guides/juncture-classes) guide for a complete list of Juncture predefined classes.

---

### Examples

- Simple Image

    ```juncture
    `image src=wc:Sunflower_sky_backdrop.jpg`
    ```
    ---
    `image src=wc:Sunflower_sky_backdrop.jpg`

    For more information on the `image` tag refer to the [image]({{ site.baseurl }}/docs/component/image) component page.

- Simple Map

    ```juncture
    `map location=Q192017,4 marker`
    ```
    ---
    `map location=Q192017,4 marker`

    For more information on the `map` tag refer to the [map]({{ site.baseurl }}/docs/component/map) component page.

- YouTube video

    ```juncture
    `youtube vid=dQw4w9WgXcQ`
    ```
    ---
    `youtube vid=dQw4w9WgXcQ`

- Image with caption attribute, ID and classes specified

    ```juncture
    `image #img src=wc:Sunflower_sky_backdrop.jpg caption="Common Sunflower" .center .medium`
    ```
    ---
    `image #img src=wc:Sunflower_sky_backdrop.jpg caption="Common Sunflower" .center .medium`


    For more information on the `youtube` tag refer to the [youtube]({{ site.baseurl }}/docs/component/youtube) component page.
{: .example}


## Supplemental Tags

In some cases, such as when creating a `map` with multiple location markers, additional tags are needed in the construction of the component.  Simple maps can be defined using a single map tag, but in cases where additional location markers are added to a map, supplemental tags are used to define any extra data needed by the component.  These supplemental tags are defined using the character "-" as the first character in the tag followed by one or more attributes.  

In the example below a base map is defined using the `map` tag.  The map is centered on the location indicated by entity ID "Q192017" (Monument Valley), with a zoom level of "4".  A `marker` boolean attribute is included specifying that a location marker should be shown at the map center point.  Size ("medium") and position ("center") class attributes are also specified to control map presentation.  Because an entity ID is used for the map center, a `caption` attribute does not need to be specified as it is automatically obtained from the associated entity data.

Following the `map` tag are 3 supplemental tags that are used to add location markers to the base map.  The `location` values in each of the supplemental tags are defined using entity IDs.  

```juncture
`map #map location=Q192017,4 marker .center .medium`
`- location=Q118841`
`- location=Q777183`
`- location=Q223969`
```

- Click here to view the generated map

    `map #map location=Q192017,4 marker .center .medium`
    `- location=Q118841`
    `- location=Q777183`
    `- location=Q223969`
{: .example}

> **Note:**  In this example entity IDs are used for brevity, but lat/lon geo-coordinates could also have been used to specify the map center point and the marker locations in the supplemental tags.  Refer to the [Entity Identifiers Guide]({{ site.baseurl }}/docs/guides/entity-ids) for more information on finding and using entity IDs.
