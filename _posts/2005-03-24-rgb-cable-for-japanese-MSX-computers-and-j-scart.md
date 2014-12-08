---
layout: post
title:  "RGB cable for japanese MSX computers and J-SCART"
date:   2005-03-24 00:00:00
categories: posts
---

*WARNING*: Procede at your own risk. You've been warned. I can't be held responsible for any damage.

All japanese MSX2, MSX2+ and TurboR computers have RGB out on a DIN-8 connector.
The pinout for this connector is available at Ultimate MSX FAQ:
<http://www.faq.msxnet.org/connector.html#rgbjap>

         7    6
        3   8   1    
         5     4
            2

        1 GND
        2 AUDIO
        3 NC
        4 C SYNC
        5 +5V
        6 R
        7 G
        8 B

Note: if you mod your MSX for PSG stereo output (ABC or ACB), you can use pin 1
for "AUDIO LEFT" and pin 2, which is not used by default, as "AUDIO RIGHT".

Our goal is to connect MSX RGB signal to a device with J-SCART input (for
example Micomsoft XRGB* family of upscanners or XAV* RGB to S-Video converter
series). The pinout for J-SCART is available from GameSX:
<http://www.gamesx.com/avpinouts/rgb21pinj.htm>

          1                 19
        +---------------------+
        | | | | | | | | | | |  \21
        |  | | | | | | | | | |  \ 
        +-----------------------+
           2                 20
        
        1  R AUDIO
        3  L/R AUDIO GND
        5  L AUDIO
        7  C SYNC GND
        9  C SYNC  
        13 R GND
        15 R
        16 +5V
        17 G GND
        18 B GND
        19 G
        20 B
        21 GND
        
Note: there are only 20 pins. Pin 21 is actually shielding that protects
connector.

I didn't know if GameSX pinout is 100% acurate. What I did is order a known
working XRGB cable for SEGA Genesis model 1, and then just replaced connector
on SEGA part with japanese MSX RGB connector. Here is what I ended up with:

        DIN-8     J-SCART  
        
        1         3,7,17
        2         5
        3         1 (*)
        4         9
        5         16 (**)
        6         15
        7         19
        8         20
        Shielding 21

\* Optional. You only need this signal if you plan to add PSG stereo mod.

\*\* Optional for XRGB and XAV. I think you only need this signal if you plan to
use japanese TV or VCR with J-SCART. I think that 5 volts on pin 16 switches
japanese A/V gear from composite to RGB mode.

As you can see, I don't have J-SCART pins 13 and 18 connected with the rest of
the GND pins. The cable works without them, but it might be a good idea to
connect them to DIN-8 pin 1, just like we did for 3, 7 and 17.

A good source for quality cable is any used VGA cable. I just cut off a cable
from a dead old 14" VGA monitor. It has thick copper wires for R, G and B
signals, each with it's own shielding as well as one common shielding. Also
there are four extra wires without separate shielding (in my cable they are
white, black, orange and yellow) that you can use for mono or stereo audio,
sync signal and +5v. I would stick to following convention: use yellow wire for
+5v, white wire for mono/left audio, orange wire for right audio and black for
composite sync signal.
