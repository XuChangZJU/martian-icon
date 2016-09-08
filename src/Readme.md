# 如何将SVG文件转换成当前的数据格式
```
svg文件必须在16 * 16的大小格式下制作
```
1. 使用tools目录下的convert进行转换
```js
node .\tools\convert core .\svg\core\add.svg add    // 将.\svg\core\add.svg 添加到core组件中的add图标
node .\tools\convert core .\svg\core        // 将.\svg\core目录下所有的svg文件添加到core组件中（名称与文件名相同）
```

2. 对text、line、circle语法进行手工处理

_text_ ：添加相应的属性到text文件下对应的[group].js
_line_, _circle_：添加相应的属性到draw文件下对应的[group].js

语法都很简单，注意，在每个属性中的props属性又可以定义一些这个图标专有的属性，如 strokeWidth等
text的例子参见one.svg
circle的例子参见one.svg
line的例子参见key.svg