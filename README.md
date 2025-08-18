# auto-translator - for testing

## Overview

This package contains all of the text files for testing the city of phila auto-translation cli.

It has an import/en.json file that has all of the
english text. Further JSON language files named {iso-639-3 code}.json are there.

## Translation

In order to diff all of the current (dev) files against production, import the cli globally, and from this folder run "translate".

These will invoke a pipeline that:
1) Finds any new keys between this english file and the last
2) Finds any changed keys between this english file and the last.
3) Iterates through each language file and adds missing & changed english keys
4) Prepares those by auto translating them

# The scripts folder

This folder is now defunct, these files have been used in the auto-translator cli

