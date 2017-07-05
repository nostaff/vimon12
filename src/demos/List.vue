<template>
  <div class="content" v-nav="{title: '列表', showBackButton: true}">
    <div class="page-content">

      <list title="Thin Border">
        <item>
          normal
        </item>
        <item disabled>
          disabled
        </item>
        <item is-link>
          normal with link
        </item>
        <item>
          normal with badge
          <span class="badge">4</span>
        </item>
        <item is-link>
          normal with badge & link
          <span class="badge">4</span>
        </item>
        <item>
          normal with badge & link
          <span class="badge">4</span>
        </item>
      </list>

      <list title="With Icon">
        <item>
          <span class="media-object pull-left icon icon-trash"></span>
          <div class="media-body">Item 1</div>
        </item>
        <item is-link>
          <span class="media-object pull-left icon icon-gear"></span>
          <div class="media-body">Item 2</div>
        </item>
        <item link="/home">
          <span class="media-object pull-left icon icon-pages"></span>
          <div class="media-body">Item 3</div>
          <span class="value">Value</span>
        </item>
      </list>

      <list title="With Button/Toggle">
        <item>
          Item 1 <button class="btn">Button</button>
        </item>
        <item>
          Item 2 <button class="btn btn-primary">Button</button>
        </item>
        <item>
          Item 3 <button class="btn btn-positive">Button</button>
        </item>
        <item>
          Item 1
          <div class="toggle">
            <div class="toggle-handle"></div>
          </div>
        </item>
        <item>
          Item 2
          <div class="toggle active">
            <div class="toggle-handle"></div>
          </div>
        </item>
      </list>

      <list title="With Button">
        <item>
          Item 1 <button class="btn">Button</button>
        </item>
        <item>
          Item 2 <button class="btn btn-primary">Button</button>
        </item>
        <item>
          Item 3 <button class="btn btn-positive">Button</button>
        </item>
        <item>
          Item 4 <button class="btn btn-negative">Button</button>
        </item>
      </list>


      <list title="With Icon & List">
        <item is-media>
          <img class="media-object pull-left" src="http://placehold.it/42x42">
          <div class="media-body">
            Item 1
            <p>Lorem ipsu..asdasss ssssssssss ssssssssssssss ssssssssssssss sssssssssss.</p>
          </div>
        </item>
        <item is-media is-link>
          <img class="media-object pull-left" src="http://placehold.it/42x42">
          <div class="media-body">
            Item 1
            <p>Lorem ipsu..asdasss ssssssssss ssssssssssssss ssssssssssssss sssssssssss.</p>
          </div>
        </item>
        <item is-media>
          <img class="media-object pull-left" src="http://placehold.it/42x42">
          <div class="media-body">
            Item 1
            <p>Lorem ipsu..asdasss ssssssssss ssssssssssssss ssssssssssssss sssssssssss.</p>
          </div>
        </item>
      </list>

    </div>
  </div>
</template>
