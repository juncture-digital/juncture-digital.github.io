---
title: Juncture and Wikidata
layout: docs
category: guides
---

# What is Wikidata?

[Wikidata](https://www.wikidata.org) is a free, collaborative knowledge base maintained by the Wikimedia Foundation. It contains structured data about millions of real-world entities—like people, places, events, and concepts—that can be read by both humans and machines.

Each entity has a unique identifier (called a QID, such as `Q243` for the Eiffel Tower) and includes properties like labels (titles), descriptions, links to Wikipedia, images, and—especially useful for mapping—**latitude and longitude coordinates**.

Wikidata is also open for anyone to contribute. Whether you're fixing a typo, adding a new fact, or linking an image, your edits help enrich a global pool of free knowledge.

---

# How Juncture Uses Wikidata

Juncture integrates seamlessly with Wikidata to automatically add rich, contextual information to your pages—just by referencing an entity’s QID.

When you include a Wikidata QID in your content, Juncture automatically retrieves key metadata, including:

- **Label** – used as a heading or map caption
- **Description** – shown in info popups
- **Image/thumbnail** – used to visually enrich the popup
- **Geo-coordinates** – used to place and center markers on maps

This metadata powers **[Entity Info Popups]({{ site.baseurl }}/docs/guides/entity-info-popups)**, which can appear inline with your text or when clicking a **map marker**. These popups give readers a quick, informative summary without needing to leave the page.

---

# Why Use Wikidata with Maps?

Wikidata's structured location data makes it perfect for Juncture’s map component. With just a QID, Juncture can:

- **Center the map** on the right location
- **Drop a marker** automatically
- **Show a popup** with the entity’s name, image, description, and more
- **Display a caption** pulled directly from the entity label—no need to enter one manually

For example:

```juncture
`map location=Q243 marker`
```

This one line of Markdown creates an interactive map of the Eiffel Tower, complete with a marker and info popup—all powered by Wikidata.

**See the use of Wikidata in action**
- A map

    ```juncture
    `map location=Q243 marker`
    ```
    ---
    `map location=Q243 marker`
- An information popup

    ```juncture
    Something about the [Eiffel Tower](Q243)...    
    ```

    An entity information popup is created by using a Wikidata QID in a standard Markdown link

    ---
    Something about the [Eiffel Tower](Q243)...
{: .example}

By linking to Wikidata, you not only simplify your content creation, you also help your readers explore trustworthy, reusable knowledge in a visually engaging way.