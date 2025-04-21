---
title: Entity Identifiers
layout: docs
category: guides
---

# Entity Identifiers

Juncture supports the use of **Entity Identifiers**, specifically *Wikidata QIDs*, to enhance the interactivity of your content. These identifiers let you:

- **Add info popups** to terms and names that reference real-world entities
- **Define map locations** using coordinates associated with Wikidata items

This document explains what Wikidata is, how QIDs work, and how to find and use them in your Juncture projects.

---

## What is Wikidata?

**Wikidata** is a free, open knowledge base created and maintained by the Wikimedia Foundation. It stores structured data about millions of topics—from historical figures and scientific concepts to cities, plants, and works of art.

Each topic, or **entity**, in Wikidata is assigned a unique identifier known as a **QID** (short for *Q-number ID*), such as:

- `Q42` for **Douglas Adams**
- `Q90` for **Paris**
- `Q1444` for **Monument Valley**

These identifiers are language-neutral and stable, making them perfect for referencing entities across different components in Juncture.

---

## Why Use QIDs in Juncture?

Using a QID in Juncture allows you to:

- Automatically retrieve and display information (label, image, description, etc.) from Wikidata
- Reuse entity data across image annotations, map locations, or popup text
- Support multilingual and linked data applications

You can add a QID to:

- **Text** to enable entity popups  
- **Map tags** to automatically center on a place (e.g., `map location=Q1444`)  
- **Annotations** in images to define what an area of an image depicts

---

## How to Find a QID

To find a QID for a person, place, or thing:

1. **Go to [Wikidata.org](https://www.wikidata.org/)**
2. **Enter a search term** (e.g., “Monument Valley” or “Jane Austen”) in the search box
3. **Select the correct result**
4. Look at the URL or the page title—it will include the QID.  
   Example: `https://www.wikidata.org/wiki/Q1444` → QID = `Q1444`

### Tip:
If you're on a related Wikipedia page, look in the "Wikidata item" link in the left sidebar (on desktop) or use the [Wikidata Bridge browser extension](https://www.wikidata.org/wiki/Wikidata:Wikidata_Bridge) to jump directly to the entity.

---

## Using a QID in Markdown

Here are a few examples of how to use QIDs in Juncture:

### Entity Info Popup (Inline)

```juncture
This was famously photographed in [Monument Valley](Q1444).
```

→ Creates a link, that when clicked will show a popup window with info about Monument Valley.

### Map Centered on a QID Location

```juncture
`map location=Q1444 caption="Monument Valley" marker`
```

→ Displays a map centered on Monument Valley with a caption and marker.

---

## Summary

Using Wikidata QIDs in your Juncture pages:

- Simplifies the reuse of rich, structured information
- Makes your content more interactive and informative
- Ensures consistency across references to the same entity

Whether you’re referencing people, places, or concepts, Wikidata QIDs help bring your web pages to life with just a few keystrokes.