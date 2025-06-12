---
title: IFrame
layout: docs
category: component
---

# IFrame

The `iframe` tag ...

## Attributes
{: .attributes}

**[alt](#basic-examples)** (_string_):  The text to use in the _alt_ tag used by screen readers.  If not provided an _alt_ tag is automatically generated from the IIIF manifest label property or inferred from the filename.

**[autoplay](#basic-example)** (_boolean_):  Automatically play video when the viewer is loaded.

**[caption](#basic-example)** (_string_): Defines the text to use for a caption that is displayed below the video player.

**[end](#basic-example)** (_string_):  Time position to stop playing, in `hh:mm:ss` format.

**[muted](#basic-example)** (_boolean_):  Mute video when initially played.

**[nocaption](#basic-examples)** (_boolean_):  This property inhibits the display of the caption at the bottom of the image.

**[poster](#basic-example)** (_url_):  Image displayed in viewer before video plays.

**[start](#basic-example)** (_string_):  Time position to begin playing, in `hh:mm:ss` format.

**[vid](#basic-example)** (_string_):  The YouTube ID of the image to stream

Notes:
- Boolean attributes are specified using the property name only, for instance - `marker`.
- Non-boolean attributes are specified using property=value syntax (i.e., `caption=Example`).  If the value includes spaces the value must be quoted (i.e., `caption="An Example Map"`).


## Examples

<iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk&font=Default&lang=en&initial_zoom=2&height=650" width="100%" height="650" frameborder="0"></iframe>

`iframe src=https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html source=1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk font=Default lang=en initial_zoom=2 height=650`