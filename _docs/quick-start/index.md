---
title: Quick Start
layout: docs
category: quick-start
order: 1
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

# Quick Start

Creating rich, interactive web content doesn’t need to be complicated. With **Juncture**, you can embed images, maps, videos, and audio players into your Markdown documents using a clean, readable syntax. This guide shows you how, step by step—no HTML required.

1. First, [Review the basics](#basics)
2. Next, [Create your first Juncture web page](#create-page)
3. Then, [Dive deeper](#dive-deeper)

---

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

```
`component-name property1=value1 property2=value2 booleanProperty`
```

- The **first word** is always the component type: `image`, `map`, `audio`, `youtube`, or `header`.
- After that come any number of **properties**, each defined with `key=value`.
- For **boolean properties**, you just use the key—no `=true` needed.  
  > Example: `marker` is the same as `marker=true`.

If a value contains **spaces**, wrap it in **quotes**:

### Example: Embedding a Map

Let’s say you want to show a map centered on Savannah, Georgia.  Here’s the Markdown to accomplish this.

```
`map location=32.051,-81.104,8 caption="Savannah, Georgia" marker`
```

- Click here to see the generated map

  `map location=32.051,-81.104,8 caption="Savannah, Georgia" marker`
{: .details }

**What this does:**
- Centers the map on Savannah
- Sets the zoom level to 8 (city-level detail)
- Adds a caption
- Displays a marker at the center point

This one line creates a responsive, interactive map viewer—right inside your page.

### Example: Embedding a YouTube Video

Want to add a video? Just specify the `youtube` component in the Juncture tag and include a YouTube ID (using the `vid` property).  Here’s the Markdown to accomplish this. 

```
`youtube vid=dQw4w9WgXcQ large center`
```

- Click here to see the generated YouTube player

  `youtube vid=dQw4w9WgXcQ large center`
{: .details }

**What this does:**

This plays the video in a viewer that:
- Scales to 75% of the screen (`large`)
- Is centered on the page (`center`)

Notice that `large` and `center` are boolean properties. You don’t need to write `large=true`—just listing the property name is enough.

---

## Creating Your First Juncture Web Page
{: #create-page}

Follow these steps to create your first interactive web page using Juncture. No coding experience needed—just follow along and you'll be viewing your page in minutes!

### 1. **Log in to GitHub**
Go to [github.com](https://github.com) and sign in with your GitHub account.  
> *Don’t have one yet?* [Create a free account here.](https://github.com/join)

### 2. **Create or open a repository**
You’ll need a GitHub repository (aka “repo”) to store your page content. You can:
- Use an existing repository, **or**
- Create a new one by clicking the ➕ icon in the top right and selecting **“New repository”**.  
Give it a short, memorable name (like `my-juncture-content`) and leave the rest of the settings at their default values.

### 3. **Add a Markdown file**
Once inside your repo, click the **“Add file”** button and choose **“Create new file”**.

- Name your file something like `example.md` (this will become the URL path to your web page).
- As a starting point, copy/paste the Markdown from this basic example:
  - Click here for the example Markdown code

    ```juncture
    # Monument Valley

    `image src=wc:Monument_Valley,_Utah,_USA_(23611451292).jpg caption="Monument Valley" right`

    **Monument Valley**, meaning "*valley of the rocks*", is a region of the Colorado Plateau characterized by a cluster of sandstone buttes, with the largest reaching 1,000 ft above the valley floor. The most famous butte formations are located in northeastern Arizona along the Utah–Arizona state line. The valley is considered sacred by the Navajo Nation, the Native American people within whose reservation it lies.

    `map location=36.983,-110.1,4 caption="Monument Valley" marker right`

    Major rock formations include West and East Mitten Buttes, Merrick Butte, Hunts Mesa, Eagle Mesa, Sentinel Mesa, Brighams Tomb, Castle Rock, Stagecoach, Big Indian, Rain God Mesa, Spearhead Mesa, Mitchell Mesa, Mitchell Butte, Gray Whiskers, Elephant Butte, Camel Butte, Cly Butte, King-on-his-Throne, Rooster Rock, and Setting Hen. Another notable formation is Totem Pole, a highly eroded butte remanent. The valley also includes large stone structures, such as the "Eye of the Sun".

    For more information refer to the [Monument Valley Wikipedia page](https://en.wikipedia.org/wiki/Monument_Valley)
    ```
  {: .example}

This starter example uses **Markdown**, a lightweight text format that lets you control formatting using simple symbols (like `#` for headings and `**` for bolded text). It also includes 2 **Juncture tags** that adds a simple image and map.

### 4. **Commit (save) the file**
Scroll to the bottom and click the green **“Commit new file”** button. This saves your changes to the repository.

### 5. **View your new web page!**
Now comes the magic ✨  

Go to: `https://juncture-digital.io/<GitHub username>/<repository name>/<path to your file>`

For example, if your GitHub username is `jane-doe` and your file is `example.md` in a repo called `my-juncture-site`, your page will be: `https://juncture-digital.io/jane-doe/my-juncture-site/example

If you used the basic example your page should look like <a href="https://juncture-digital.io/rsnyder/ifc/_examples/demo?branch=simple" target="_blank">this</a>.

### 6. **Edit, preview, repeat**
Any time you want to make changes:
- Open your `.md` file in GitHub
- Click the pencil ✏️ icon to edit
- Commit the changes
- Refresh your browser to see the updated version

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