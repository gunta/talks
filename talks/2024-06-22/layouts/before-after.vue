<!--
Usage:

```md
---
layout: before-after
---
# Title

::before::
This shows the before content
::after::
This shows the after content
::bottom::
This shows at the bottom
```
-->

<script setup lang="ts">
const props = defineProps({
	class: {
		type: String,
	},
	layoutClass: {
		type: String,
	},
});
</script>

<template>
    <div class="slidev-layout two-cols-header w-full h-full" :class="layoutClass">
        <div class="col-header">
            <slot />
        </div>
        <div class="col-before" :class="props.class">
            <h2> <wpf-past class="text-2xl text-orange-800"/> BEFORE</h2>
            <slot name="before" />
        </div>
        <div class="col-after" :class="props.class">
            <h2> <fluent-emoji-flat-right-arrow class="text-2xl" /> AFTER</h2>
            <slot name="after" />
        </div>
        <div class="col-bottom" :class="props.class">
            <slot name="bottom" />
        </div>
    </div>
</template>

<style scoped>
.two-cols-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr 1fr;
    gap: 5%;
}

.col-header {
    grid-area: 1 / 1 / 2 / 3;
}
.col-before {
    grid-area: 2 / 1 / 4 / 2;
}

.col-before h2 {
    vertical-align: middle;
    background-color: #b64b2b;
    background-image: linear-gradient(45deg, #d47b4e 10%, #8c5a14 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}

.col-after {
    grid-area: 2 / 2 / 4 / 3;
}

.col-after h2 {
    vertical-align: middle;
    background-color: #2b85b6;
    background-image: linear-gradient(45deg, #4e8cd4 10%, #14688c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
.col-bottom {
    align-self: end;
    grid-area: 4 / 1 / 5 / 3;
}
</style>