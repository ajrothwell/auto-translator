# Locales

## Overview
The Locales package contains all of the text files for the RC & RCMini applications respectively.

Both UI's utilize an eng.english.json file that has all of their
english text. Further JSON language files named {iso-639-3 code}.{language name}.json are selectable for the UI.

## Translation
In order to diff all of the current (dev) files against production, run yarn diff:rc || yarn diff:mini.

These will invoke a pipeline that:
1) Finds any new keys between this english file and the last
2) Finds any changed keys between this english file and the last.
3) Iterates through each language file and adds missing & changed english keys
4) Prepares those by auto translating them as a 'proposed' value
5) Generates CSV's from this reducer
6) Emails partner@moutfitters.com to create a zendesk ticket for translation of that text.