## 
	初始化html

在项目的根目录下新建一个index.html文件，复制以下代码。

<pre>
&lt;meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"&gt;

&lt;!-- Makes your prototype chrome-less once bookmarked to your phone's home screen --&gt;
&lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
&lt;meta name="apple-mobile-web-app-status-bar-style" content="black"&gt;

&lt;!-- Include the compiled Ratchet CSS --&gt;
&lt;link rel="stylesheet" href="css/ratchet.css"&gt;

&lt;!-- Include the compiled Ratchet JS --&gt;
&lt;script src="js/ratchet.js"&gt;&lt;/script&gt;

&lt;!-- Make sure all your bars are the first things in your &lt;body&gt; --&gt;
&lt;header class="bar bar-nav"&gt;
    &lt;h1 class="title"&gt;Ratchet&lt;/h1&gt;
&lt;/header&gt;

&lt;!-- Wrap all non-bar HTML in the .content div (this is actually what scrolls) --&gt;
&lt;div class="page"&gt;
    &lt;p class="content-padded"&gt;Thanks for downloading Ratchet...&lt;/p&gt;
    &lt;div class="card"&gt;
        &lt;ul class="table-view"&gt;
            &lt;li class="table-view-cell"&gt;
                &lt;a class="push-right" href="http://goratchet.com"&gt;
                    &lt;strong&gt;Ratchet documentation&lt;/strong&gt;
                &lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="table-view-cell"&gt;
                &lt;a class="push-right" href="https://github.com/twbs/ratchet/"&gt;
                    &lt;strong&gt;Ratchet on Github&lt;/strong&gt;
                &lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="table-view-cell"&gt;
                &lt;a class="push-right" href="https://groups.google.com/forum/#!forum/goratchet"&gt;
                    &lt;strong&gt;Ratchet Google group&lt;/strong&gt;
                &lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="table-view-cell"&gt;
                &lt;a class="push-right" href="https://twitter.com/goratchet"&gt;
                    &lt;strong&gt;Ratchet on Twitter&lt;/strong&gt;
                &lt;/a&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

就能看到如下的效果，是不是很快就入门了。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-15.jpg)

## 
	仿真

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-16.jpg)

chrome浏览器要开启仿真的效果，才能看到js效果。

## 
	ratchet组件

[组件](http://goratchet.com/components/)在官网有很全的展示，这里简单的翻译下，并自己把代码尝试了一遍。

### 
	标题栏

<pre>
&lt;header class="bar bar-nav"&gt;
    &lt;h1 class="title"&gt;Title&lt;/h1&gt;
&lt;/header&gt;
</pre>

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-17.jpg)

### 
	带按钮的标题栏

<pre>
&lt;header class="bar bar-nav"&gt;
    &lt;button class="btn pull-left"&gt;Left&lt;/button&gt;
    &lt;button class="btn pull-right"&gt;Right&lt;/button&gt;
    &lt;h1 class="title"&gt;Title&lt;/h1&gt;
&lt;/header&gt;
</pre>

使用pull-left和pull-right实现左右浮动，button样式下面会有介绍。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-18.jpg)

### 
	带图标的标题栏

<pre>
&lt;header class="bar bar-nav"&gt;
    &lt;a class="icon icon-left-nav pull-left"&gt;&lt;/a&gt;
    &lt;a class="icon icon-compose pull-right"&gt;&lt;/a&gt;
    &lt;h1 class="title"&gt;Title&lt;/h1&gt;
&lt;/header&gt;   
</pre>

图标样式下面会有介绍。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-19.jpg)

### 
	带按钮和图标的标题栏

<pre>
&lt;header class="bar bar-nav"&gt;
    &lt;button class="btn btn-link btn-nav pull-left"&gt;
        &lt;span class="icon icon-left-nav"&gt;&lt;/span&gt;
        Left
    &lt;/button&gt;
    &lt;button class="btn btn-link btn-nav pull-right"&gt;
        Right
        &lt;span class="icon icon-right-nav"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;h1 class="title"&gt;Title&lt;/h1&gt;
&lt;/header&gt;
</pre>

在botton里面包含icon，.btn-link去掉边框效果，.btn-nav让按钮更接近边框。
![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-20.jpg)

### 
	带切换效果的标题栏

<pre>
&lt;header class="bar bar-nav"&gt;
    &lt;button class="btn pull-left"&gt;Left&lt;/button&gt;
    &lt;button class="btn pull-right"&gt;Right&lt;/button&gt;
    &lt;div class="segmented-control"&gt;
        &lt;a class="control-item active"&gt;One&lt;/a&gt;
        &lt;a class="control-item"&gt;Two&lt;/a&gt;
        &lt;a class="control-item"&gt;Three&lt;/a&gt;
    &lt;/div&gt;
&lt;/header&gt;
</pre>

切换的效果会在下面介绍。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-21.jpg)

### 
	底部标签卡

<pre>
&lt;nav class="bar bar-tab"&gt;
    &lt;a class="tab-item active" href="#"&gt;
        &lt;span class="icon icon-home"&gt;&lt;/span&gt;
        &lt;span class="tab-label"&gt;Home&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class="tab-item" href="#"&gt;
        &lt;span class="icon icon-person"&gt;&lt;/span&gt;
        &lt;span class="tab-label"&gt;Profile&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class="tab-item" href="#"&gt;
        &lt;span class="icon icon-star-filled"&gt;&lt;/span&gt;
        &lt;span class="tab-label"&gt;Favorites&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class="tab-item" href="#"&gt;
        &lt;span class="icon icon-search"&gt;&lt;/span&gt;
        &lt;span class="tab-label"&gt;Search&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class="tab-item" href="#"&gt;
        &lt;span class="icon icon-gear"&gt;&lt;/span&gt;
        &lt;span class="tab-label"&gt;Settings&lt;/span&gt;
    &lt;/a&gt;
&lt;/nav&gt;  
</pre>

使用`.bar-tab`来使菜单固定在底部，官方文档有错。注意:可以用`push.js`来切换页面，`push.js`后面会介绍。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-22.jpg)

### 
	底部标签卡（纯文字）

<pre>
&lt;nav class="bar bar-tab"&gt;
    &lt;a class="tab-item active" href="#"&gt;Label&lt;/a&gt;
    &lt;a class="tab-item" href="#"&gt;Label&lt;/a&gt;
    &lt;a class="tab-item" href="#"&gt;Label&lt;/a&gt;
&lt;/nav&gt;
</pre>

如果只要显示文字，去掉icon，只要保留文字就可以了，文字可以垂直居中。注意:可以用push.js来切换页面，push.js后面会介绍。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-23.jpg)

### 
	标准栏

<pre>
&lt;!-- Segmented control in standard bar fixed to top --&gt;
&lt;nav class="bar bar-standard"&gt;
    &lt;div class="segmented-control"&gt;
        &lt;a class="control-item active"&gt;Thing one&lt;/a&gt;
        &lt;a class="control-item"&gt;Thing two&lt;/a&gt;
        &lt;a class="control-item"&gt;Thing three&lt;/a&gt;
    &lt;/div&gt;
&lt;/nav&gt;

&lt;!-- Block button in standard bar fixed below top bar --&gt;
&lt;div class="bar bar-standard bar-header-secondary"&gt;
    &lt;button class="btn btn-block"&gt;Block level button&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Block button in standard bar fixed above the footer --&gt;
&lt;div class="bar bar-standard bar-footer-secondary"&gt;
    &lt;button class="btn btn-block"&gt;Block level button&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Icons in standard bar fixed to the bottom of the screen --&gt;
&lt;div class="bar bar-standard bar-footer"&gt;
    &lt;a class="icon icon-compose pull-left"&gt;&lt;/a&gt;
    &lt;a class="icon icon-gear pull-right"&gt;&lt;/a&gt;
&lt;/div&gt;
</pre>

标准栏是固定在四个位置的元件，`.bar-header-secondary`在顶栏的下面，`.bar-footer-secondary在`底栏`.bar-footer`上面

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-24.jpg)

### 
	排版

<pre>
&lt;div class="content-padded"&gt;
    &lt;h1&gt;h1. Heading&lt;/h1&gt;
    &lt;h2&gt;h2. Heading&lt;/h2&gt;
    &lt;h3&gt;h3. Heading&lt;/h3&gt;
    &lt;h4&gt;h4. Heading&lt;/h4&gt;
    &lt;h5&gt;h5. Heading&lt;/h5&gt;
    &lt;h6&gt;h6. Heading&lt;/h6&gt;
    &lt;p&gt;Lorem ipsum dolor sit ...&lt;/p&gt;
&lt;/div&gt;
</pre>

添加`.content-padded`来增加一些间隙。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-25.jpg)

### 
	列表

<pre>
&lt;ul class="table-view"&gt;
    &lt;li class="table-view-cell"&gt;Item 1&lt;/li&gt;
    &lt;li class="table-view-cell"&gt;Item 2&lt;/li&gt;
    &lt;li class="table-view-divider"&gt;Divider&lt;/li&gt;
    &lt;li class="table-view-cell"&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
</pre>

`table-view-divider`来划分列表，显示成灰色。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-26.jpg)

### 
	带箭头的列表

<pre>
&lt;ul class="table-view"&gt;
    &lt;li class="table-view-cell"&gt;
        &lt;a class="navigate-right"&gt;Item 1&lt;/a&gt;  
    &lt;/li&gt;
    &lt;li class="table-view-cell"&gt;
        &lt;a class="navigate-right"&gt;Item 2&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="table-view-cell"&gt;
        &lt;a class="navigate-right"&gt;Item 3&lt;/a&gt;   
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

`navigate-left`显示左边箭头，`navigate-left`显示右边箭头。android主题不显示箭头，具体可以看[这里](http://developer.android.com/design/patterns/pure-android.html)。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-27.jpg)

### 
	带消息提示的列表

<pre>
&lt;ul class="table-view"&gt;
    &lt;li class="table-view-cell"&gt;Item 1 &lt;span class="badge"&gt;4&lt;/span&gt;&lt;/li&gt;
    &lt;li class="table-view-cell"&gt;Item 2 &lt;span class="badge"&gt;1&lt;/span&gt;&lt;/li&gt;
    &lt;li class="table-view-cell"&gt;Item 3 &lt;span class="badge"&gt;5&lt;/span&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>

添加一个`.badge`的`span`元素，消息气泡的样式后面会介绍。
![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-28.jpg)

### 
	带消息提示和箭头的列表

<pre>
&lt;ul class="table-view"&gt;
    &lt;li class="table-view-cell"&gt;
        &lt;a class="navigate-right"&gt;
            &lt;span class="badge"&gt;5&lt;/span&gt;
            Item 1
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="table-view-cell"&gt;
        &lt;a class="navigate-right"&gt;
            &lt;span class="badge"&gt;5&lt;/span&gt;
            Item 2
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="table-view-cell"&gt;
        &lt;a class="navigate-right"&gt;
            &lt;span class="badge"&gt;5&lt;/span&gt;
            Item 3
        &lt;/a&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

前面两个的组合。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-29.jpg)

### 
	带图片的列表

<pre>
`    &lt;ul class="table-view"&gt;
          &lt;li class="table-view-cell media"&gt;
            &lt;a class="navigate-right"&gt;
                  &lt;img class="media-object pull-left" src="http://placehold.it/42x42"&gt;
                  &lt;div class="media-body"&gt;
                    Item 1
                    &lt;p&gt;Lorem ipsu...&lt;/p&gt;
                  &lt;/div&gt;
            &lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="table-view-cell media"&gt;
            &lt;a class="navigate-right"&gt;
                  &lt;img class="media-object pull-left" src="http://placehold.it/42x42"&gt;
                  &lt;div class="media-body"&gt;
                    Item 1
                    &lt;p&gt;Lorem ipsum...&lt;/p&gt;
                  &lt;/div&gt;
            &lt;/a&gt; 
          &lt;/li&gt;
          &lt;li class="table-view-cell media"&gt;
            &lt;a class="navigate-right"&gt;
                  &lt;img class="media-object pull-left" src="http://placehold.it/42x42"&gt;
                  &lt;div class="media-body"&gt;
                    Item 1
                    &lt;p&gt;Lorem ipsum dolor ...&lt;/p&gt;
                  &lt;/div&gt;
            &lt;/a&gt; 
        &lt;/li&gt;
    &lt;/ul&gt;
</pre>

图片左浮动，内容放`media-body`里面触发BFC。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-30.jpg)

### 
	带图标的列表

<pre>
&lt;ul class="table-view"&gt;
    &lt;li class="table-view-cell media"&gt;
        &lt;a class="navigate-right"&gt;
            &lt;span class="media-object pull-left icon icon-trash"&gt;&lt;/span&gt;
            &lt;div class="media-body"&gt;Item 1&lt;/div&gt;
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="table-view-cell media"&gt;
        &lt;a class="navigate-right"&gt;
            &lt;span class="media-object pull-left icon icon-gear"&gt;&lt;/span&gt;
            &lt;div class="media-body"&gt;Item 2&lt;/div&gt;
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="table-view-cell media"&gt;
        &lt;a class="navigate-right"&gt;
            &lt;span class="media-object pull-left icon icon-pages"&gt;&lt;/span&gt;
            &lt;div class="media-body"&gt;Item 3&lt;/div&gt;
        &lt;/a&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

用法和图片一样

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-31.jpg)

### 
	带按钮的列表

<pre>
&lt;ul class="table-view"&gt;
    &lt;li class="table-view-cell"&gt;Item 1 &lt;button class="btn"&gt;Button&lt;/button&gt;&lt;/li&gt;
    &lt;li class="table-view-cell"&gt;Item 2 &lt;button class="btn btn-primary"&gt;Button&lt;/button&gt;&lt;/li&gt;
    &lt;li class="table-view-cell"&gt;Item 3 &lt;button class="btn btn-positive"&gt;Button&lt;/button&gt;&lt;/li&gt;
    &lt;li class="table-view-cell"&gt;Item 4 &lt;button class="btn btn-negative"&gt;Button&lt;/button&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>

放入`.btn`元素，会自动定位到右边。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-32.jpg)

### 
	带开关按钮的列表

<pre>
&lt;ul class="table-view"&gt;
    &lt;li class="table-view-cell"&gt;
        Item 1
        &lt;div class="toggle"&gt;
            &lt;div class="toggle-handle"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="table-view-cell"&gt;
        Item 2
        &lt;div class="toggle active"&gt;
            &lt;div class="toggle-handle"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="table-view-cell"&gt;
        Item 3
        &lt;div class="toggle"&gt;
            &lt;div class="toggle-handle"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

把按钮换成开关，交互效果要在仿真才能看到。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-33.jpg)

### 
	卡片式列表

<pre>
&lt;div class="card"&gt;
    &lt;ul class="table-view"&gt;
        &lt;li class="table-view-cell"&gt;Item 1&lt;/li&gt;             &lt;li class="table-view-cell"&gt;Item 2&lt;/li&gt;
        &lt;li class="table-view-cell table-view-divider"&gt;Divider&lt;/li&gt;
        &lt;li class="table-view-cell"&gt;Item 3&lt;/li&gt;
        &lt;li class="table-view-cell"&gt;Item 4&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre>

外面包一层`card`，设置间隙，还有边框和圆角。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-34.jpg)

### 
	按钮

<pre>
&lt;button class="btn"&gt;Button&lt;/button&gt;
&lt;button class="btn btn-primary"&gt;Button&lt;/button&gt;
&lt;button class="btn btn-positive"&gt;Button&lt;/button&gt;
&lt;button class="btn btn-negative"&gt;Button&lt;/button&gt;
&lt;button class="btn btn-link"&gt;Button&lt;/button&gt;

&lt;button class="btn btn-outlined"&gt;Button&lt;/button&gt;
&lt;button class="btn btn-primary btn-outlined"&gt;Button&lt;/button&gt;
&lt;button class="btn btn-positive btn-outlined"&gt;Button&lt;/button&gt;
&lt;button class="btn btn-negative btn-outlined"&gt;Button&lt;/button&gt;
</pre>

按钮的效果，`btn-primary`显示为蓝色，`btn-positive`显示为绿色，`btn-negative`显示为红色，`btn-link`显示为链接的样子。添加`btn-outlined`会变成只有边框，没有背景色。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-35.jpg)

### 
	带图标的按钮

<pre>
&lt;button class="btn"&gt;
    &lt;span class="icon icon-search"&gt;&lt;/span&gt;
    Button
&lt;/button&gt;
&lt;button class="btn btn-primary"&gt;
    &lt;span class="icon icon-search"&gt;&lt;/span&gt;
    Button
&lt;/button&gt;
&lt;button class="btn btn-positive"&gt;
    &lt;span class="icon icon-search"&gt;&lt;/span&gt;
    Button
&lt;/button&gt;
&lt;button class="btn btn-negative"&gt;
    &lt;span class="icon icon-search"&gt;&lt;/span&gt;
    Button
&lt;/button&gt;
&lt;button class="btn btn-link"&gt;
    &lt;span class="icon icon-left"&gt;&lt;/span&gt;
    Button
&lt;/button&gt;
</pre>

在按钮里面放入相应的`icon`。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-36.jpg)

### 
	带提示的按钮

<pre>
&lt;button class="btn"&gt;Badge button &lt;span class="badge"&gt;1&lt;/span&gt;&lt;/button&gt;
&lt;button class="btn btn-primary"&gt;Badge button &lt;span class="badge badge-primary"&gt;1&lt;/span&gt;&lt;/button&gt;
&lt;button class="btn btn-positive"&gt;Badge button &lt;span class="badge badge-positive"&gt;1&lt;/span&gt;&lt;/button&gt;
&lt;button class="btn btn-negative"&gt;Badge button &lt;span class="badge badge-negative"&gt;1&lt;/span&gt;&lt;/button&gt;

&lt;button class="btn btn-outlined"&gt;Badge button &lt;span class="badge badge-inverted"&gt;1&lt;/span&gt;&lt;/button&gt;
&lt;button class="btn btn-outlined btn-primary"&gt;Badge button &lt;span class="badge badge-primary badge-inverted"&gt;1&lt;/span&gt;&lt;/button&gt;
&lt;button class="btn btn-outlined btn-positive"&gt;Badge button &lt;span class="badge badge-positive badge-inverted"&gt;1&lt;/span&gt;&lt;/button&gt;
&lt;button class="btn btn-outlined btn-negative"&gt;Badge button &lt;span class="badge badge-negative badge-inverted"&gt;1&lt;/span&gt;&lt;/button&gt;
</pre>

在按钮里面放入相应的`badge`。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-37.jpg)

### 
	块级按钮

<pre>
&lt;button class="btn btn-block"&gt;Block button&lt;/button&gt;
&lt;button class="btn btn-primary btn-block"&gt;Block button&lt;/button&gt;
&lt;button class="btn btn-positive btn-block"&gt;Block button&lt;/button&gt;
&lt;button class="btn btn-negative btn-block"&gt;Block button&lt;/button&gt;

&lt;button class="btn btn-block btn-outlined"&gt;Block button&lt;/button&gt;
&lt;button class="btn btn-primary btn-block btn-outlined"&gt;Block button&lt;/button&gt;
&lt;button class="btn btn-positive btn-block btn-outlined"&gt;Block button&lt;/button&gt;
&lt;button class="btn btn-negative btn-block btn-outlined"&gt;Block button&lt;/button&gt;
</pre>

添加`btn-block`，按钮会整行显示。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-38.jpg)

### 
	标签卡切换

<pre>
&lt;div class="segmented-control"&gt;
    &lt;a class="control-item active" href="#item1mobile"&gt;Thing one&lt;/a&gt;
    &lt;a class="control-item" href="#item2mobile"&gt;Thing two&lt;/a&gt;
    &lt;a class="control-item" href="#item3mobile"&gt;Thing three&lt;/a&gt;
&lt;/div&gt;
&lt;div class="card"&gt;
    &lt;span id="item1mobile" class="control-content active"&gt;Item 1&lt;/span&gt;
    &lt;span id="item2mobile" class="control-content"&gt;Item 2&lt;/span&gt;
    &lt;span id="item3mobile" class="control-content"&gt;Item 3&lt;/span&gt;
&lt;/div&gt;
</pre>

`control-content`为切换的面板，需要添加对应的id，跟上面的锚点对应。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-39.jpg)

### 
	提示按钮

<pre>
&lt;span class="badge"&gt;1&lt;/span&gt;
&lt;span class="badge badge-primary"&gt;2&lt;/span&gt;
&lt;span class="badge badge-positive"&gt;3&lt;/span&gt;
&lt;span class="badge badge-negative"&gt;4&lt;/span&gt;

&lt;span class="badge badge-inverted"&gt;1&lt;/span&gt;
&lt;span class="badge badge-primary badge-inverted"&gt;2&lt;/span&gt;
&lt;span class="badge badge-positive badge-inverted"&gt;3&lt;/span&gt;
&lt;span class="badge badge-negative badge-inverted"&gt;4&lt;/span&gt;
</pre>

添加`badge-inverted`，没有背景色。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-40.jpg)

### 
	表单

<pre>
&lt;form&gt;
    &lt;input placeholder="Full name"&gt;
    &lt;input placeholder="Search"&gt;
    &lt;textarea rows="5"&gt;&lt;/textarea&gt;
    &lt;button class="btn btn-positive btn-block"&gt;Choose existing&lt;/button&gt;
&lt;/form&gt;
</pre>

表单元素整行显示。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-41.jpg)

### 
	输入框组

<pre>
&lt;form class="input-group"&gt;
    &lt;input placeholder="Full name"&gt;
    &lt;input placeholder="Email"&gt;
    &lt;input placeholder="Username"&gt;
&lt;/form&gt;
</pre>

添加`input-group`，表单元素之间没有空隙。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-42.jpg)

### 
	带label标签的输入框组

<pre>
&lt;form class="input-group"&gt;
    &lt;div class="input-row"&gt;
        &lt;label&gt;Full name&lt;/label&gt;
        &lt;input placeholder="Mister Ratchet"&gt;
    &lt;/div&gt;
    &lt;div class="input-row"&gt;
        &lt;label&gt;Email&lt;/label&gt;
        &lt;input placeholder="ratchetframework@gmail.com"&gt;
    &lt;/div&gt;
    &lt;div class="input-row"&gt;
        &lt;label&gt;Username&lt;/label&gt;
        &lt;input placeholder="goRatchet"&gt;
    &lt;/div&gt;
&lt;/form&gt;
</pre>

用`input-row`包裹`label`和表单元素，一行显示。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-43.jpg)

### 
	按钮切换

<pre>
&lt;div class="toggle active"&gt;
    &lt;div class="toggle-handle"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="toggle"&gt;
    &lt;div class="toggle-handle"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

切换按钮，默认选中添加`active`，切换效果需要仿真才能看到

	// Only needed if you want to fire a callback document .querySelector('#myToggle') .addEventListener('toggle', myFunction)

如果需要回调，添加相应的js

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-44.jpg)

### 
	弹出菜单

<pre>
&lt;div id="popover" class="popover"&gt;
    &lt;header class="bar bar-nav"&gt;
        &lt;h1 class="title"&gt;Popover title&lt;/h1&gt;
    &lt;/header&gt;
    &lt;ul class="table-view"&gt;
        &lt;li class="table-view-cell"&gt;Item1&lt;/li&gt;
        &lt;li class="table-view-cell"&gt;Item2&lt;/li&gt;
        &lt;li class="table-view-cell"&gt;Item3&lt;/li&gt;
        &lt;li class="table-view-cell"&gt;Item4&lt;/li&gt;
        &lt;li class="table-view-cell"&gt;Item5&lt;/li&gt;
        &lt;li class="table-view-cell"&gt;Item6&lt;/li&gt;
        &lt;li class="table-view-cell"&gt;Item7&lt;/li&gt;
        &lt;li class="table-view-cell"&gt;Item8&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;

&lt;header class="bar bar-nav"&gt;
    &lt;a href="#popover"&gt;
        &lt;h1 class="title"&gt;
            Tap title
            &lt;span class="icon icon-caret"&gt;&lt;/span&gt;
        &lt;/h1&gt;
    &lt;/a&gt;
&lt;/header&gt;
</pre>

只能用在标题栏，锚链接要对应`popover`的id，官方文档有错，效果需要仿真。
![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-45.jpg)

### 
	对话框

<pre>
&lt;a class="btn" href="#myModalexample"&gt;Open modal&lt;/a&gt;
&lt;div id="myModalexample" class="modal"&gt;
    &lt;header class="bar bar-nav"&gt;
        &lt;a class="icon icon-close pull-right" href="#myModalexample"&gt;&lt;/a&gt;
        &lt;h1 class="title"&gt;Modal&lt;/h1&gt;
    &lt;/header&gt;

    &lt;div class="page"&gt;
        &lt;p class="content-padded"&gt;The contents of my modal ...&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

锚链接对应`modal`的id，效果需要仿真。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-46.jpg)

点击按钮之后会有一个弹出层：

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-47.jpg)

### 
	滑动效果

<pre>
&lt;div id="mySlider" class="slider"&gt;
    &lt;div class="slide-group"&gt;
        &lt;div class="slide"&gt;
            &lt;img src="/assets/img/slide-1.jpg"&gt;
            &lt;span class="slide-text"&gt;
                &lt;span class="icon icon-left-nav"&gt;&lt;/span&gt;
                Slide me
            &lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="slide"&gt;
            &lt;img src="/assets/img/slide-2.jpg"&gt;
        &lt;/div&gt;
        &lt;div class="slide"&gt;
            &lt;img src="/assets/img/slide-3.jpg"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

需要回调，添加对应的js，效果需要仿真。

<pre>
`// Only needed if you want to fire a callback
document
.querySelector('#mySlider')
.addEventListener('slide', myFunction)  
</pre>

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-48.jpg)

### 
	push

切换页面的时候可以用到

<pre>
&lt;!-- A one.html link --&gt;
&lt;a href="two.html"&gt;Two&lt;/a&gt;
</pre>

one页面有一个页面链接到two

<pre>
&lt;a href="two.html" data-transition="fade"&gt;Two&lt;/a&gt;
</pre>

可以用`data-transition`属性添加动画效果

<pre>
&lt;a href="http://www.google.com" data-ignore="push"&gt;Google&lt;/a&gt;&lt;a&gt;
</pre>

可以用`data-ignore="push"`阻止链接跳转。

<pre>
`// Only needed if you want to fire a callback
window.addEventListener('push', myFunction);
</pre>

需要回调的时候添加相应的js。

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-49.jpg)

点击列表后效果：

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-50.jpg)

### 
	图标

<pre>
&lt;div class="content-padded"&gt;
    &lt;span class="icon icon-back"&gt;&lt;/span&gt;
    &lt;span class="icon icon-bars"&gt;&lt;/span&gt;
    &lt;span class="icon icon-caret"&gt;&lt;/span&gt;
    &lt;span class="icon icon-check"&gt;&lt;/span&gt;
    &lt;span class="icon icon-close"&gt;&lt;/span&gt;
    &lt;span class="icon icon-code"&gt;&lt;/span&gt;
    &lt;span class="icon icon-compose"&gt;&lt;/span&gt;
    &lt;span class="icon icon-download"&gt;&lt;/span&gt;
    &lt;span class="icon icon-edit"&gt;&lt;/span&gt;
    &lt;span class="icon icon-forward"&gt;&lt;/span&gt;
    &lt;span class="icon icon-gear"&gt;&lt;/span&gt;
    &lt;span class="icon icon-home"&gt;&lt;/span&gt;
    &lt;span class="icon icon-info"&gt;&lt;/span&gt;
    &lt;span class="icon icon-list"&gt;&lt;/span&gt;
    &lt;span class="icon icon-more-vertical"&gt;&lt;/span&gt;
    &lt;span class="icon icon-more"&gt;&lt;/span&gt;
    &lt;span class="icon icon-pages"&gt;&lt;/span&gt;
    &lt;span class="icon icon-pause"&gt;&lt;/span&gt;
    &lt;span class="icon icon-person"&gt;&lt;/span&gt;
    &lt;span class="icon icon-play"&gt;&lt;/span&gt;
    &lt;span class="icon icon-plus"&gt;&lt;/span&gt;
    &lt;span class="icon icon-refresh"&gt;&lt;/span&gt;
    &lt;span class="icon icon-search"&gt;&lt;/span&gt;
    &lt;span class="icon icon-share"&gt;&lt;/span&gt;
    &lt;span class="icon icon-sound"&gt;&lt;/span&gt;
    &lt;span class="icon icon-sound2"&gt;&lt;/span&gt;
    &lt;span class="icon icon-sound3"&gt;&lt;/span&gt;
    &lt;span class="icon icon-sound4"&gt;&lt;/span&gt;
    &lt;span class="icon icon-star-filled"&gt;&lt;/span&gt;
    &lt;span class="icon icon-star"&gt;&lt;/span&gt;
    &lt;span class="icon icon-stop"&gt;&lt;/span&gt;
    &lt;span class="icon icon-trash"&gt;&lt;/span&gt;
    &lt;span class="icon icon-up-nav"&gt;&lt;/span&gt;
    &lt;span class="icon icon-up"&gt;&lt;/span&gt;
    &lt;span class="icon icon-right-nav"&gt;&lt;/span&gt;
    &lt;span class="icon icon-right"&gt;&lt;/span&gt;
    &lt;span class="icon icon-down-nav"&gt;&lt;/span&gt;
    &lt;span class="icon icon-down"&gt;&lt;/span&gt;
    &lt;span class="icon icon-left-nav"&gt;&lt;/span&gt;
    &lt;span class="icon icon-left"&gt;&lt;/span&gt;
&lt;/div&gt;
</pre>

![Ratchet教程：自动化部署与组件概览](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1405/Ratchet-51.jpg)
