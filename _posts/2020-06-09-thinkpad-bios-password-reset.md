---
layout: post
title:  "Thinkpad BIOS password reset"
date:   2020-06-09 10:30:00
categories: posts
---

I'm not the author, just preseving the information here.
All copyrights belong to xiphmont.
Their [original article](https://web.archive.org/web/20170222202252/https://xiphmont.livejournal.com/70560.html)
is still available on Internet Archive, but this may change in the future. Below is my copy.

## Notes to myself: (Re)discovering/correcting a ThinkPad supervisor password crack
November 26th, 2016

You can bypass and remove the supervisor password from ThinkPads by shorting
two pins on an EEPROM at the right time during boot.

Don't believe it? I didn't either; it never worked for me.
It turns out that's only because the contemporary instructions for how to do it are wrong,
or rather, they've mutated into a form that only works on some machines.
As originally discovered, the hack reliably unlocks any* ThinkPad up to
and including the Ivy Bridge models.

The SL300, SL400, SL500, and G550 do not store the supervisor password in EEPROM,
so they're the only exceptions of which I'm aware.

## DISCLAIMER

Any discussion of how to crack security on even vintage machines is banned on most ThinkPad forums.
So much as mentioning this page can get you banned in some places.

## SOME BACKGROUND

ThinkPads have three types of security passwords.

A 'Supervisor' password (SVP) locks access to portions of the BIOS setup.
The machine will still boot to OS, but if the CMOS battery is temporarily removed or dies,
the SVP will also lock all power-on access to the machine.
It's stored encrypted in a non-volatile EEPROM along with other asset information.

The 'Hard Drive' password protects access to the hard drive.
The drive will be physically inaccessible to any machine without the password.
I don't address the Hard Drive password at all here.

Lastly, a 'Power On' aka 'User' password (UP) locks boot access the machine.
It's stored in volatile CMOS settings. Disconnecting the round yellow CMOS battery clears it.

A machine with a User password will almost certainly also have a Supervisor password.
Clearing the UP by disconnecting the CMOS battery will cause the machine to demand the SVP at next boot.
The password prompt icons for the UP and SVP are the same on older machines,
so if it seems like clearing the User password didn't work, it did - but now the machine is asking for
the Supervisor password instead.

## FINALLY THE INSTRUCTIONS:

*Step 1:* You might as well make life easier by disconnecting the CMOS battery for a few seconds
to clear any user password that may be present. Count to 15, reconnect the battery and proceed...

*Step 2:* Find the physical EEPROM that holds the supervisor password.
These EEPROMs have varying numbers of pins.
A few examples: On the T23, the chip is a 14-pin Atmel 28RF08.
On the X31, the EEPROM is an 8-pin Atmel AT28RF08.
On an X61, it's an 8-pin Philips 24S08.
On a T60 it's a 40-pin Atmel 8356908.

On some machines you can access the EEPROM just by lifting the keyboard.
On other machines, you'll have to disassemble the entire laptop.
Locations of many ThinkPad EEPROM chips can be found at <http://www.ja.axxs.net/eeprom_location.htm>
if you don't want to hunt for it.

*Step 3:* Locate the PROT and GND pins.
These are the pins we'll short to subvert the ThinkPad's access to the supervisor password.
On a 14-pin Atmel 28RF08, these are pins 5 and 6. On (I think all) 8-pin EEPROMs, these are pins 3 and 4.
On the 8356908, it's pins 31 and 32 (pin 32 is actually the write-protect pin, but it will be grounded).

Personally I solder small-gauge wires to the pins to avoid any fumbling around while bypassing the password.
If the chip is easily accessible, you can just short the pins with tweezers or a precision screwdriver.
Either way, be careful not to short anything you don't mean to short.

Note: I know I'm telling you to use different pins than virtually all the other instructions on the web.
When this hack was first discovered, descriptions simply listed pin numbers for a few models,
but it's clear from context that the intended pins were PROT and GND.

At some point, for some reason, reposts started saying to short SCL and SDA instead,
possibly due to mixing up pins between 8 and 14 pin EEPROM variants.
The mistake was probably cemented by the fact that shorting SCL and SDA does work on some models.

*Step 4:* Boot the machine. Upon the 'ThinkPad' logo boot screen appearing,
immediately short the pins and press the appropriate key to enter the BIOS (F1 on most models).
The BIOS may take longer to appear than normal, and the machine will throw one or more errors; that's expected.
It may also ask you to press F1 again (do so). Keep the pins shorted until you're in the BIOS screen,
then release the short.

*Step 5:* Navigate to the BIOS 'Security' menu, then arrow down to the 'Supervisor password' selection,
which should currently read 'Enabled'.

*Step 6:* Short the pins again. While holding the short, press Enter to select the Supervisor password entry,
then release the short. It should not ask for the old password, only to enter a new password twice.
After releasing the short, press Enter twice to disable the password.

*Step 7:* Press F10 to save and exit.

*Step 8:* Before reassembling or desoldering any temporary wires, reboot and test that you can enter the BIOS
without any password.

Done!
