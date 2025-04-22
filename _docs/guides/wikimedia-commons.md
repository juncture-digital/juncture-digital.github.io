---
title: Juncture and Wikimedia Commons
layout: docs
category: guides
---

# What is Wikimedia Commons?

<a href="https://commons.wikimedia.org" target="_blank">Wikimedia Commons</a> is a massive online library of freely usable media—including images, audio, and video—contributed by people all over the world. It’s part of the Wikimedia Foundation, the same organization behind Wikipedia, and is designed to support free knowledge by making media openly available for anyone to use, remix, and share.

In addition to being a rich source of open-access media, Wikimedia Commons is also a great place for anyone to contribute. Whether it’s a photo of a historical site, a diagram you created, or a recording of local birdsong, uploading your content can help others learn, teach, and create.

When sharing media on Wikimedia Commons, you can choose how you want it to be used:

- Release it into the **public domain** using licenses like **CC0**
- Retain ownership but allow reuse with **attribution** using **CC BY**
- Require sharing under the same terms with **CC BY-SA**

These flexible licensing options make it easy to share responsibly while still maintaining control over how your work is used.

---

# Using Wikimedia Commons Images in Juncture

Juncture makes it easy to include high-quality images from [Wikimedia Commons](https://commons.wikimedia.org) in your pages.

To use a Wikimedia-hosted image, all you need is the file name, prefixed with `wc:`. For example:

```juncture
`image src=wc:Sunflower_sky_backdrop.jpg`
```

You can also use the full image URL, but the `wc:` shorthand is cleaner, more readable, and easier to work with.

When you include a Wikimedia Commons image, Juncture automatically:

- Retrieves the **highest-resolution version** available
- Enables **zooming, panning, cropping**, and other advanced features using IIIF
- Pulls in **metadata** such as title, creator, license, and reuse rights
- Displays this metadata in a sidebar or caption—ensuring **proper attribution** without extra effort

This makes it simple to use open-access media in a way that is both powerful and respectful of licensing guidelines.