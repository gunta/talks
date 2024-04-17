<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
	repo: {
		required: true,
	},
});

const repo = ref(props.repo);
</script>

<template>
    <div class="image-container">
        <img alt="Star History" :src="`https://api.star-history.com/svg?repos=${repo}`" width="70%" height="auto">
    </div>
</template>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>