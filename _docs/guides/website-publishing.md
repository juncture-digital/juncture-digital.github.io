---
title: Website Publishing
layout: docs
category: guides
---

# Getting Started

This guide walks you through the steps to create and publish a rich, interactive website—using just a GitHub account, Markdown files, and the Juncture platform.

---

## Step 1: Create a GitHub Account

1. Visit [https://github.com](https://github.com)
2. Click **Sign up**
3. Choose a username, enter your email, and create a password
4. Follow the prompts to complete setup

---

## Step 2: Create a New Website Repository

Create a Juncture-enabled GitHub repository using this link - [https://github.com/juncture-digital/template/generate](https://github.com/juncture-digital/template/generate)
  - Add a repository name and (optional) description
  - Ensure **Public** is selected for repository visibility
  = Click the green **Create repository** button

This sets up a new site with a working Jekyll + Juncture configuration.

---

## Step 3: Update Configuration Setting

1. Go to the **_config.yml_** file in your newly created repository.  This is located at the repository root.
2. Update the `title`, `description` `author name`, and `author email` values as needed using the GitHub web editor. 
3. Save ("Commit") the _config.yml after the changes have been made.

This sets up a new site with a working Jekyll + Juncture configuration.  This website is pre-configured as a simple blog-style site.

---

## Step 4: Enable GitHub Pages

1. In your new repository, click the **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, choose the `main` branch and `/ (root)` folder
4. Click **Save**

Your site will be published at:

```
https://<your-username>.github.io/<repository-name>/
```

It may take a minutes or so for the site to appear.

---

## Step 5: Edit Your Markdown Content

In your repository, open or create a Markdown file—such as `index.md`. You can do this directly in GitHub:

1. Click **Add file > Create new file**
2. Name it `index.md`
3. Add your Markdown content

### Markdown Example

```juncture
# Welcome to My Site

This is my first Juncture-powered page.

`map location=32.051,-81.104,8 caption="Savannah, GA" marker`

`youtube vid=dQw4w9WgXcQ large center`
```

This adds a heading, a map of Savannah, and a YouTube video.

---

## How It Works Behind the Scenes

| Tool             | What It Does                                  |
|------------------|------------------------------------------------|
| **Markdown**     | Simple language to write content               |
| **Juncture**     | Adds interactive features via custom tags      |
| **Jekyll**       | Converts Markdown to HTML web pages            |
| **GitHub Pages** | Hosts and publishes your site for free         |

When you **save (commit)** your Markdown file, your site is **automatically updated** and re-published. No need to press a publish button!

---

## Customize Your Site

You can:
- Add more pages (just create more `.md` files)
- Add images or audio with Juncture tags like:

```juncture
`image src=wc:Sunflower_sky_backdrop.jpg center medium`

`audio src=wc:Wikipedia_-_Earth_(spoken_by_AI_voice).mp3`
```

- Edit the navigation bar in `_data/navigation.yml`
- Customize your home page in `index.md`

---

## You Did It!

You now have:
- A live website
- Interactive features
- A no-cost, no-code publishing workflow

All powered by **Markdown**, **Jekyll**, **GitHub**, and **Juncture**.

---

🔗 Want to learn more?
- [GitHub Docs](https://docs.github.com/en)
- [Jekyll Docs](https://jekyllrb.com/docs/)
