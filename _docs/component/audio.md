---
title: Audio
layout: docs
category: component
---

# Audio

The `audio` tag displays an HTML audio player with a specified file.

## Attributes
{: .attributes}

**[caption](#basic-example)** (_string_): Defines the text to use for a caption that is displayed below the video player.

**[nocaption](#basic-examples)** (_boolean_):  This property inhibits the display of the caption at the bottom of the player.

**[src](#basic-example)** (_url_):  A URL to the audio file to play.

## Examples

### Basic examples

#### Simple Audio player
{: .example}

```juncture
`audio src=https://upload.wikimedia.org/wikipedia/commons/6/65/Wikipedia_-_Earth_(spoken_by_AI_voice).mp3`
```
---
`audio src=https://upload.wikimedia.org/wikipedia/commons/6/65/Wikipedia_-_Earth_(spoken_by_AI_voice).mp3`


#### Using Wikimedia Commons "wc:" Prefix
{: .example}

```juncture
`audio src=wc:Wikipedia_-_Earth_(spoken_by_AI_voice).mp3`
```
---
`audio src=wc:Wikipedia_-_Earth_(spoken_by_AI_voice).mp3`


#### Using GitHub Hosted Audio File
{: .example}

```juncture
`audio src=gh:schh-commons/podcasts/main/SunSations_April_2025.mp3`
```
---
`audio src=gh:schh-commons/podcasts/main/SunSations_April_2025.mp3`