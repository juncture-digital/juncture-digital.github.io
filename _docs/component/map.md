---
title: Map
layout: docs
category: component
---

# Map

The `map` tag displays an interactive map centered on a specified location.  This map component uses the [Leaflet](https://leafletjs.com/).  Leaflet is a tool that lets websites show interactive maps. You can zoom in, zoom out, and move around the map, just like you would with Google Maps. It’s lightweight, fast, and works on phones, tablets, and computers. Many websites use Leaflet to help people explore locations, see points of interest, or display custom map data.

## Attributes
{: .attributes}

**[caption](#basic-examples)** (_string_): Defines the text to use for a caption that is displayed below the map.

**[location](##basic-examples)** (_string_): The center coordinates and zoom level for the map.   

**[marker](##basic-examples)** (_boolean_):  If set, a marker will be displayed at the `location` coordinates

Notes:
- Boolean attributes are specified using the property name only, for instance - `marker`.
- Non-boolean attributes are specified using property=value syntax (i.e., `caption=Example`).  If the value includes spaces the value must be quoted (i.e., `caption="An Example Map"`).

## Zoom levels

Leaflet uses zoom levels to control how much of the map you can see at once. The scale typically ranges from 0 to 18 or higher, depending on the map provider:

- Zoom level 0 shows the entire world on one screen.
- Zoom level 10 shows a city and surrounding area.
- Zoom level 18 shows individual buildings and street details.

Higher zoom levels show more detail but cover a smaller area, while lower zoom levels show less detail but a larger area.

## Examples

### Basic examples

#### Simple map
{: .example}

Displays a map with a caption and marker.  The location consists of comma-separated values for the latitude and longitude of the map center and a zoom level.  In this example the latitude is `32.051` and longitude is `-81.104`, which centers the map on Savannah, Georgia.  The zoom level is set to `8`.

```juncture
`map location=32.051,-81.104,8 caption="Savannah, GA" marker`
```
---
`map location=32.051,-81.104,8 caption="Savannah, GA" marker`

#### Zoom level comparison
{: .example}

```juncture
`map location=32.051,-81.104,3 caption="Savannah, GA" marker`
`map location=32.051,-81.104,6 caption="Savannah, GA" marker`
`map location=32.051,-81.104,9 caption="Savannah, GA" marker`
`map location=32.051,-81.104,12 caption="Savannah, GA" marker`
```
---
`map location=32.051,-81.104,3 caption="Savannah, GA (zoom level 3)" marker`
`map location=32.051,-81.104,6 caption="Savannah, GA (zoom level 6)" marker`
`map location=32.051,-81.104,9 caption="Savannah, GA (zoom level 9)" marker`
`map location=32.051,-81.104,12 caption="Savannah, GA (zoom level 12" marker`