---
title: YouTube
layout: docs
category: component
---

# YouTube

The `youtube` tag displays a YouTube video player with a specified video.

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

### Basic examples

#### Simple YouTube player
{: .example}

```juncture
`youtube vid=dQw4w9WgXcQ`
```
---
`youtube vid=dQw4w9WgXcQ`

### Positioning examples

#### Large and center
{: .example}

#####
{: .tabs}

###### Markdown

```juncture
`youtube vid=dQw4w9WgXcQ .large .center`
```
---
`youtube vid=dQw4w9WgXcQ .large .center`


#### Float Right
{: .example}

Video is aligned with right margin and is 50% of viewport width.  Text will wrap around the image.

```juncture
`youtube vid=dQw4w9WgXcQ .right`

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
---
`youtube vid=dQw4w9WgXcQ .right`

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
