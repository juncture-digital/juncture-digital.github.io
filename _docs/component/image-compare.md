---
title: Image Compare
layout: docs
category: component
---

# Image Compare

The `image-compare` tag creates a viewer that allows users to compare two images interactively using a slider. One image is placed in the **before** slot and the other in the **after** slot. A draggable handle lets the user reveal more or less of each image.

This component is useful for visualizing changes over time, before/after scenarios, or comparing different versions of an image.

## Attributes
{: .attributes}

**[before](#basic-examples)** (_url_):  URL of the image to display in the "before" slot. Supports full URLs, relative URLs, and shorthand prefixes (`wc:` for Wikimedia Commons and `gh:` for GitHub-hosted content).

**[after](#basic-examples)** (_url_):  URL of the image to display in the "after" slot. Same conventions as `before`.

**[beforeRegion](#basic-examples)** (_string_):  IIIF region definition applied to the before image. Accepts standard region syntax (`full`, `square`, `x,y,w,h`, `pct:x,y,w,h`).

**[afterRegion](#basic-examples)** (_string_):  IIIF region definition applied to the after image.

**[beforeAlt](#basic-examples)** (_string_):  Alt text for accessibility for the before image.

**[afterAlt](#basic-examples)** (_string_):  Alt text for accessibility for the after image.

**[caption](#basic-examples)** (_string_):  Optional caption text displayed below the comparison viewer.

**[nocaption](#basic-examples)** (_boolean_):  Hides the caption area when set.

**[position](#basic-examples)** (_integer_):  Initial slider position as a percentage. Default is `50` (centered).

### Positioning properties

**[left](#positioning-examples)** (_boolean_):  Align the component with the left side of the window.  The component’s width is 50% of the window and any section text following the component tag will wrap around the component.

**[right](#positioning-examples)** (_boolean_):  Align the component with the right side of the window.  The component’s width is 50% of the window and any section text following the component tag will wrap around the component.

**[center](#positioning-examples)** (_boolean_):  The component is centered in the window.

**[large](#positioning-examples)** (_boolean_):  The component is sized to 75% of the window.

**[medium](#positioning-examples)** (_boolean_):  The component is sized to 50% of the window.

**[small](#positioning-examples)** (_boolean_):  The component is sized to 33% of the window.

Notes:
- Boolean properties are specified using the property name only, for instance - `nocaption`.
- Non-boolean properties are specified using property=value syntax (i.e., `caption=Example`).  If the value includes spaces the value must be quoted (i.e., `caption="Before and After"`).

---

## Examples

### Basic Compare Usage
{: .example}

```juncture
``image-compare before=/static/images/Westgate_Towers,_Canterbury_(circa_1905).jpg after=/static/images/Westgate_Towers,_Canterbury_(2021).jpg caption="Westgate Towers, Canterbury" beforeRegion=pct:10,15,80,77 afterRegion=pct:18,0,55,100 aspect=1``
```
---
`image-compare before=/static/images/Westgate_Towers,_Canterbury_(circa_1905).jpg after=/static/images/Westgate_Towers,_Canterbury_(2021).jpg caption="Westgate Towers, Canterbury" beforeRegion=pct:10,15,80,77 afterRegion=pct:18,0,55,100 aspect=1`
