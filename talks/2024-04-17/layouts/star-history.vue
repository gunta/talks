<script setup lang="ts">
const props = defineProps({
	repos: {
		required: true,
	},
	title: {
		required: false,
	},
});
</script>

<template>
    <div class="slidev-layout">
        <slot />
        <div class="image-container">
            <img alt="Star History" :src="`https://api.star-history.com/svg?repos=${props.repos}`" width="70%" height="auto">
        </div>
    </div>
</template>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>