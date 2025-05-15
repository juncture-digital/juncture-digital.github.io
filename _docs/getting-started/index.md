---
title: Getting Started
layout: docs
category: getting-started
order: 2
---

<style>
  [id]::before {
    content: "";
    display: block;
    height: 80px; /* height of your fixed header */
    margin-top: -80px;
    visibility: hidden;
  }
  .highlight, pre {
      margin-bottom: 0 !important;
  }
</style>

# Getting Started

Creating rich, interactive web content doesn’t need to be complicated. With **Juncture**, you can embed images, maps, videos, and audio players into your Markdown documents using a clean, readable syntax. This simple guide shows you how, step by step—no HTML required.

1. [Add bookmark to browser](#bookmark)
1. [Review the basics](#basics)
1. [Create your first Juncture web page](#create-page)
1. [Dive deeper](#dive-deeper)

---

## Add Juncture Bookmark to Browser

Drag this link to your bookmarks bar - **[🔗 View in Juncture](javascript:(function()%7Bwindow.location.href%3D%22https%3A%2F%2Fjuncture-digital.io%3Fgithub%3D%22%2Bdocument.URL%7D)()%3B)**{: .shadow style="padding:0.5em; border:1px solid #ccc;"}

This makes it convenient to view any GitHub hosted Markdown file as a Juncture-enabled web page.  Then, when you're on a GitHub page you can simply click the bookmark to view a Juncture-rendered version of the page.  This makes it easy to preview edits (after committing) when authoring a new page.

## The Basics: Markdown
{: #basics}

**Markdown** is a lightweight way to format plain text so it looks good when viewed as a web page or document. It’s simple, readable, and widely used for writing content online.

With just a few easy symbols, you can:
- Create headings, bold text, and lists
- Add links and images
- Write clean, readable content that’s easy to maintain

Here’s how Markdown compares to what you see on the page:

| Task            | Markdown Syntax            | Result                  |
|-----------------|----------------------------|--------------------------|
| Heading         | `# My Title`               | **My Title**             |
| Bold text       | `**bold**`                 | **bold**                 |
| Link            | `[Google](https://google.com)` | [Google](https://google.com) |
| List item       | `- Item`                   | – Item                   |

It’s that easy!  Refer to this [Markdown guide]({{ site.baseurl }}/docs/guides/markdown) for a more comprehensive overview of Markdown tagging.

---

## The Basics: Juncture Tags

Juncture provides a simple extension to the basic Markdown tagging, enabling images, maps, videos, and other visual elements to be inserted into a web page generated from Markdown text.  A Juncture tag is a single-line Markdown code string, enclosed in backticks, for example:

```juncture
`component attr1=value attr2="value with space" boolean-attr`
```

- The **first word** is always the component type: `image`, `map`, `audio`, `youtube`, or `header`.
- After that come any number of **attributes**, each defined with `key=value`.
- For **boolean attributes**, you just use the key—no `=true` needed.  
  > Example: `marker` is the same as `marker=true`.

If a value contains **spaces**, wrap it in **quotes**:

### Example: Adding a Map

Let’s say you want to add a map to your page centered on Monument Valley (located on the Colorado Plateau on the Arizona–Utah border in the western United States).  Here’s the Markdown to accomplish this.

```juncture
`map location=36.98,-110.1,12 caption="Monument Valley" marker`
```

- Click here to see the generated map

  `map location=36.98,-110.1,12 caption="Monument Valley" marker`
{: .details }

**What this does:**
- Specifies the `map` component
- Centers the map on Savannah (using the `location` attribute).  The map location attribute values consists of a comma-separated list with lat/log coordinates and the map zoom level
    - The documentation for the map component explains how location values are obtained
- Adds a caption to the map viewer component (using the `caption` attribute)
- Displays a marker at the map center point (using the `marker' boolean attribute)

This one line creates a responsive, interactive map viewer—right inside your page.  More information on the Juncture map component can be found on the [map documentation page]({{ site.baseurl }}/docs/component/map)

### Example: Adding an Image

Want to add an image? Just specify the `image` component in the Juncture tag and Juncture will include add an interactive image viewer using the image referenced in the `src` attribute.  Here’s the Markdown to accomplish this. 

```juncture
`image src=wc:Monument_Valley,_Utah,_USA.jpg .large .center`
```

- Click here to see the generated image

  `image src=wc:Monument_Valley,_Utah,_USA.jpg .large .center`
{: .details }

**What this does:**
- Specifies the `image` component
- Identifies the location of the image using the `src` attribute
    - There are a number of ways in which an image location can be specified.  In this example we're using an image hosted on Wikimedia Commons using the `wc:` prefix. 
- Scales the image width to 75% of the screen (`.large`)
- Centers the image on the page (`.center`)

The `.large` and `.center` are sizing and positioning classes.  Classes can easily be identified by the dot prefix.  Note that these are not specific to the image component.  Classes can be applied to any Juncture component to alter the components default size and position.  The [Juncture Classes documentation page]({{ site.baseurl }}/docs/guides/juncture-classes) lists all of the classes available for use on a Juncture component.

Note that in this image example an image viewer caption has been added but none was specified in the image tag.  The image viewer (and other viewers) can often infer a caption if one is not specified.  The `caption` attribute can be used to override the default.  In this example we're going with the default.  Also note that captions can be disabled entirely using a `nocaption` boolean attribute.

---

## Creating Your First Juncture Web Page
{: #create-page}

Follow these steps to create your first interactive web page using Juncture. No coding experience needed—just follow along and you'll be viewing your page in minutes!

### 1. **Log in to GitHub**
Go to [github.com](https://github.com) and sign in with your GitHub account.  
> *Don’t have one yet?* [Create a free account here.](https://github.com/join)

### 2. **Create or use an existing repository**
You’ll need a GitHub repository (aka “repo”) to store your page content. You can:
- Use an existing repository, **or**
- Create a new one by clicking the ➕ icon in the top right and selecting **“New repository”**.  
Give it a short, meaningful name (like `my-juncture-content`) and leave the rest of the settings at their default values.

### 3. **Add a Markdown file**
Once inside your repo, click the **“Add file”** button and choose **“Create new file”**.

- Name your file something like `example.md` (this name, along with your GitHub username and the repository name, will become the URL to your new web page).
- As a starting point, copy/paste the Markdown from this basic example:

```juncture
# Monument Valley

`image src=wc:Monument_Valley,_Utah,_USA.jpg caption="Monument Valley" .right`

**Monument Valley**, meaning "*valley of the rocks*", is a region of the Colorado Plateau characterized by a cluster of sandstone buttes, with the largest reaching 1,000 ft above the valley floor. The most famous butte formations are located in northeastern Arizona along the Utah–Arizona state line. The valley is considered sacred by the Navajo Nation, the Native American people within whose reservation it lies.

`map location=36.983,-110.1,4 caption="Monument Valley" marker .right`

Major rock formations include West and East Mitten Buttes, Merrick Butte, Hunts Mesa, Eagle Mesa, Sentinel Mesa, Brighams Tomb, Castle Rock, Stagecoach, Big Indian, Rain God Mesa, Spearhead Mesa, Mitchell Mesa, Mitchell Butte, Gray Whiskers, Elephant Butte, Camel Butte, Cly Butte, King-on-his-Throne, Rooster Rock, and Setting Hen. Another notable formation is Totem Pole, a highly eroded butte remanent. The valley also includes large stone structures, such as the "Eye of the Sun".

For more information refer to the [Monument Valley Wikipedia page](https://en.wikipedia.org/wiki/Monument_Valley)
```

This starter example uses **Markdown**, a lightweight text format that lets you control formatting using simple symbols (like `#` for headings and `**` for bolded text). It also includes 2 **Juncture tags** that adds a simple image and map.

### 4. **Commit (save) the file**
Scroll to the bottom and click the green **“Commit new file”** button. This saves your changes to the repository.

### 5. **View your new web page!**

Now comes the magic ✨  

Your new web page is found at `https://juncture-digital.io/<GitHub username>/<repository name>/<path to your file>`

For example, if your GitHub username is `jane-doe` and your file is `example.md` in a repo called `my-juncture-site`, your page will be: `https://juncture-digital.io/jane-doe/my-juncture-site/example

If you added the Juncture bookmark to your browser you can simply click on the `View in Juncture` bookmark when on the GitHub page for your Markdown file.

If you used the basic example your page should look like <a href="https://juncture-digital.io/juncture-digital/juncture-digital.github.io/_examples/demo" target="_blank">this</a>.

### 6. **Edit, preview, repeat**

Authoring a web page with Juncture is typically an iterative process of edit and review until it's just right.

Any time you want to make changes:
- Open your `.md` file in the GitHub editor (Click the pencil ✏️ icon to open the editor)
- Edit your Markdown text and Commit the changes
- View the rendered page in the Juncture by clicking the `View in Juncture` bookmark

It is often convenient to have 2 browser windows open side-by-side, both located at the GitHub page of the Markdown file you're working on.  One window can then be used for editing and the other for previewing changes.

---

## Next Steps
{: #dive-deeper}

1. Try updating your example essay with the [Enhanced example](https://juncture-digital.io/examples/enhanced-demo.md).  The enhanced example includes:
  - More text formatted with Markdown, including the use of footnotes
  - A page header with navigation links
  - A map with a center point and additional markers defined using [Entity IDs]({{ site.baseurl }}/docs/guides/entity-ids)
  - YouTube videos
  - Entity information popups defined using [Entity IDs]({{ site.baseurl }}/docs/guides/entity-ids)
  - Image and map interactions using Juncture [Component Interactions]({{ site.baseurl }}/docs/guides/component-interactions)
2. Use the [Getting Started tutorial]({{ site.baseurl }}/docs/getting-started/index) and [HowTo Guides]({{ site.baseurl }}/docs/guides/index) to dive deeper into what's possible with Juncture, including the [creation of a fully functional website]({{ site.baseurl }}/docs/guides/website-publishing/) such as a blog.