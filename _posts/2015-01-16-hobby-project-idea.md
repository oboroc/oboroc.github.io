---
layout: post
title:  "Hobby project idea"
date:   2015-01-16 13:00:00
categories: posts
---

I was thinking about some fun hobby project with potentially useful applications.
I decided that it would be fun building reasonably accurate 3d model of apartment or some other space from a thorough video that covers detailed 360 panorama of said apartment or space.

The video would be analyzed using computer vision algorithms.
It would use a community-curated library of 3d models of popular items: Billy bookshelf, 25 cents, flat screen TV, washer and dryer etc.
If there are not many recognizable items in the room, user may want to put a few easily recognizable items around, so that CV algorithms have some point of reference to judge distance and size of other objects.
System would use some sort of AI knowledge base system to judge how similar and unknown object is to some of the known objects and based on this suggest it belongs to the same category.
If input video is stereoscopic (3D), it could further improve depth perception of CV algorithms.
Some of the algorithms can benefit from custom FPGA or GPGPU solutions to speed things up and/or reduce power consumption.
With enough video footage it should be possible to build a fairly high resolution texture models for object surfaces.
Microsoft Research lab did something similar for building high quality 3d models of human face from a grainy low resolution surveilance videos.

I would like to release it as a smartphone app, but offload all processing to servers in the Internet.
It could also be offered to other developers as SaaS service to integrate functionality in their products.

Given the population of our planet, probably hundreds of people considered the same idea ("It's like Google Street View, but for interiors!").
I haven't seen any good implementations yet, so definitely this is something interesting to pursue.
