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
            <h2>BEFORE</h2>
            <slot name="before" />
        </div>
        <div class="col-after" :class="props.class">
            <h2>AFTER</h2>
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
    column-gap: 8%;
}

.col-header {
    grid-area: 1 / 1 / 2 / 3;
}
.col-before {
    grid-area: 2 / 1 / 4 / 2;
}
.col-after {
    grid-area: 2 / 2 / 4 / 3;
}
.col-bottom {
    align-self: end;
    grid-area: 4 / 1 / 5 / 3;
}
</style>