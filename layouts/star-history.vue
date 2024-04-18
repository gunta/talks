<script setup lang="ts">
const props = defineProps({
	repo: {
		required: true,
	},
    title: {
        required: true
    }
});
</script>

<template>
    <div class="slidev-layout">
        <slot />
        <div class="image-container">
            <img alt="Star History" :src="`https://api.star-history.com/svg?repos=${props.repo}`" width="70%" height="auto">
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