---
title: Smart Links
layout: docs
category: guides
---

<style>
    p.center { text-align: center; font-size: 2em; }
    details > div:first-of-type { margin-top: 1em; }
    details p:last-of-type { margin-bottom: 1em; }
</style>

# Smart Links  

**Smart Links** are ordinary‑looking Markdown links that “talk” to the Juncture components on the same page.
Click one and the image zooms in on a specific region, a map flies to a new location, an entity information card pops up … all without writing JavaScript.

**Why you’ll love them**
- **Zero code.** You write a normal Markdown `[link]( … )` and Juncture does the rest.  
- **Point‑and‑click storytelling.** Lead readers through an image, tour locations on a map, or reveal quick bios of unfamiliar entities (people, places, anything...).
- **Works everywhere.** Many Juncture components can respond, including the [image]({{ site.baseurl }}/docs/component/image), [map]({{ site.baseurl }}/docs/component/map), [audio]({{ site.baseurl }}/docs/component/audio), and [youtube]({{ site.baseurl }}/docs/component/youtube) components.  Refer to the components documentation for more information about the actions supported and any required component-specific parameters.

---

## Quick Start (3 common uses)

```juncture
`image #image-id src=wc:Monument_Valley,_Utah,_USA_(23611451292).jpg`

`map #map-id`

[Zoom to the mittens](#image-id/zoomto/pct:40,35,20,20)   <!-- image -->
[Fly to London](#map-id/flyto/Q84,12)                     <!-- map -->
[Who was John Wesley?](Q12138)                            <!-- popup -->
```

## How it works — in plain English

When the page loads, a tiny Juncture script scans for two special link patterns:
1.	Action links – the URL begins with **component-id/action-name**.  
  Clicking sends a message (e.g. zoomto, flyto, play) to the matching component iframe.
2.	Entity links – the URL is just a Wikidata "QID" such as **Q937**.  
  Clicking shows a small pop‑up card with the entity’s name, image, and description — handy when you mention people, places, or concepts a reader may not know.  Refer to the [Entity Identifiers Guide]({{ site.baseurl }}/docs/guides/entity-ids) for more information on Entity IDs and Wikidata

You never touch the script — just follow the patterns in your link creation.

---

## Anatomy of a Smart Link

| Kind             | Markdown skeleton              | What it does                                                     |
|------------------|--------------------------------|------------------------------------------------------------------|
| **Action link**  | `[text](#component-id/action-name/arguments)`| Tells a component to do something (zoomto, flyto, play …)            |
| **Entity link**  | `[text](Q12345)`               | Opens an on‑page info card about that Wikidata entity            |

---

## Action Cheat‑Sheet

| Component type | Action(s)          | Link pattern (examples)                             | Result                                  |
|----------------|--------------------|-----------------------------------------------------|-----------------------------------------|
| **Image**      | `zoomto`           | `#image-id/zoomto/100,200,300,300`  · `#image-id/zoomto/pct:40,35,20,20` | Viewer pans & zooms to region (click again to reset) |
| **Image**      | `gotopage`         | `#image-id/gotopage/3`                                       | Jumps to page 3 of a multi‑page manifest |
| **Map**        | `flyto`            | `#map-id/flyto/51.5,-0.1,10`  · `#map-id/flyto/Q84,12`            | Map flies to coordinates or entity place |
| **Audio**      | `play`, `pause`    | `#audio-id/play` · `#audio-id/pause`                                  | Starts or pauses playback                |
| **YouTube**    | `play`, `pause`    | `#player-id/play/00:30/01:00` · `#player-id/pause`                      | Plays a clip or pauses the video         |
| **Entity card**| *(built‑in)*       | `Q12345`                                           | Opens an information popup               |

---

## Practical examples

- Pop‑up bios in a paragraph

  ```juncture
  Many credit [Ada Lovelace](Q7259) as the world’s first computer programmer, while [Alan Turing](Q7251) laid the theoretical groundwork for modern computing.
  ```
  ---
  Many credit [Ada Lovelace](Q7259) as the world’s first computer programmer, while [Alan Turing](Q7251) laid the theoretical groundwork for modern computing.

- Interactive map itinerary

  ```juncture
  `map #lowcountry-map location=32.051,-81.104,6 caption="Lowcountry Tour" marker`

  - **Stop 1:** [Savannah Historic District](#lowcountry-map/flyto/32.076,-81.088,14)  
  - **Stop 2:** [Tybee Island Lighthouse](#lowcountry-map/flyto/31.993,-80.848,15)  
  - **Stop 3:** [John Wesley’s Monument](Q12138)      <!-- entity popup -->
  ```
  ---
  `map #lowcountry-map location=32.051,-81.104,6 caption="Lowcountry Tour" marker right`

  - **Stop 1:** [Savannah Historic District](lowcountry-map/flyto/32.076,-81.088,14)  
  - **Stop 2:** [Tybee Island Lighthouse](lowcountry-map/flyto/31.993,-80.848,15)  
  - **Stop 3:** [John Wesley](Q213393)      <!-- entity popup -->

- Guided image tour + entity card

   ```juncture
  `image #incense-image src=wc:Incense_in_Vietnam.jpg right`

    1. [Incense sticks](incense-image/zoomto/pct:30,45,25,25)  
    2. [Artisan at work](incense-image/zoomto/pct:60,35,20,30)  
    3. [What is incense?](Q273131)                 <!-- entity popup -->
  ```
  ---
  `image #incense-image src=wc:Incense_in_Vietnam.jpg right`

  1. [Incense sticks](incense-image/zoomto/pct:30,45,25,25)  
  2. [Artisan at work](incense-image/zoomto/pct:60,35,20,30)  
  3. [What is incense?](Q273131)  
{: .example}

---

## Ready to try?

1. Embed any Juncture component.  
2. Add a `#component-id/action-name/...` link **or** a plain QID link.  
3. Commit your Markdown file—GitHub Pages will rebuild automatically.  
4. Open your site and click. Voilà: **Smart Links** in action!