---
title: Entity Info Popups
layout: docs
category: guides
---

# Entity Information Popups

Juncture supports **Entity Information Popups**, a powerful feature that lets you enrich your pages with contextual information—automatically pulled from [Wikidata](https://www.wikidata.org).

## In Text

When you link to a Wikidata entity using its QID (for example, `Q243` for the Eiffel Tower), Juncture automatically adds a **clickable popup** to that link. The popup displays:

- The **label** (name/title of the entity)
- A short **description**
- A **thumbnail image** (when available)
- A link to the corresponding **Wikipedia page**

This allows readers to quickly get more information without leaving your page.

For example:

```markdown
[The Eiffel Tower](Q243)
```

In Juncture, this link will trigger a small popup showing key facts about the [Eiffel Tower](Q243).

---

## On Maps

Juncture also uses these popups in its interactive map component. When you reference a location using a Wikidata QID in a `map` tag, Juncture will:

- Automatically retrieve **geo-coordinates** to center the map and place a marker
- Use the **entity’s label** as the map caption
- Show an **info popup** on the marker with the same rich content: label, description, and image

Example:

```juncture
`map location=Q243 marker`
```

This creates a map centered on the Eiffel Tower, with a marker that shows a full popup when clicked—powered entirely by Wikidata.

---

These popups make your content more engaging, trustworthy, and user-friendly—all while keeping your Markdown clean and minimal. You get all the benefits of structured data without any of the manual work.