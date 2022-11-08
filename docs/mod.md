About mods, please go to the [GIMI](https://github.com/SilentNightSound/GI-Model-Importer) project to understand the basics, how to use the mod function in this project: select the 3DMigoto Loader.exe file and make sure the Mods folder is at the same level. The document structure is as follows:

```
|-- 3DMigoto Loader.exe
|-- Mods
    |-- keqing
        |-- mod1
            |-- KeqingMod
                |-- Keqing.ini
                |-- ...
            |-- modinfo.json
            |-- *.png/jpg/jpeg/jfif
```

You can nest and name as many mods as you want, but be careful that each mod must be in a separate folder, not together with other mods. The program will read all mods and **automatically generate modinfo.json files**, then you can place a picture (at the same level as the mod folder) for the program to read, or you can modify the images field in the modinfo.json file to use network pictures. you can adjust the aspect ratio of the image, fill in the name and author, and use the keywords to filter. the checkbox on the mod floating window is used to select whether to load the mod or not, when unchecked 3dm will not load the mod.

The merged mod is now supported, with the following structure:

```
|-- 3DMigoto Loader.exe
|-- Mods
    |-- keqing
        |-- merged.ini
        |-- mod1
            |-- KeqingMod
                |-- DISABLEKeqing.ini
                |-- ...
            |-- modinfo.json
            |-- *.png/jpg/jpeg/jfif
        |-- mod2
            |-- KeqingMod
                |-- DISABLEKeqing.ini
                |-- ...
            |-- modinfo.json
            |-- *.png/jpg/jpeg/jfif
```

OR：

```
|-- 3DMigoto Loader.exe
|-- Mods
    |-- keqing
        |-- merged.ini
        |-- mod1
                |-- DISABLEKeqing.ini
                |-- ...
        |-- mod2
                |-- DISABLEKeqing.ini
                |-- ...
        |-- modinfo.json
        |-- *.png/jpg/jpeg/jfif
```
