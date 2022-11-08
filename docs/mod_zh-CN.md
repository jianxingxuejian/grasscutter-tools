关于 mod，请前往 [GIMI](https://github.com/SilentNightSound/GI-Model-Importer) 项目了解基础知识，本项目 mod 功能的使用方法：选择 3DMigoto Loader.exe 文件，并确保 Mods 文件夹在同一级。结构如下：

```
|-- 3DMigoto Loader.exe
|-- Mods
    |-- 刻晴
        |-- mod1
            |-- KeqingMod
                |-- Keqing.ini
                |-- ...
            |-- modinfo.json
            |-- *.png/jpg/jpeg/jfif
```

可以进行任意的嵌套和命名，但要注意每个 mod 一定要在一个单独的文件夹下，不能跟其它 mod 放在一起。程序会读取所有 mod，**自动生成 modinfo.json 文件**，然后你可以放置一张图片(与 mod 文件夹同一级)让程序读取到，也可以修改 modinfo.json 文件的 images 字段来使用网络图片。可以调整图片的宽高比例，填写名字和作者，使用关键字进行筛选。mod 浮窗上的复选框是用来选择是否加载这个 mod，取消勾选时 3dm 不会加载这个 mod。

现在已支持合并后的 mod，结构如下：

```
|-- 3DMigoto Loader.exe
|-- Mods
    |-- 刻晴
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

或者：

```
|-- 3DMigoto Loader.exe
|-- Mods
    |-- 刻晴
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
