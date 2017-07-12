<template>
    <div class="list">
        <item :link="moreLink">
            {{title}}
            <span class="item-note" v-if="moreLink">更多</span>
        </item>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: [Number, String],
                default: ''
            },
            moreLink: {
                type: String,
                default: ''
            },
        },
    }
</script>

