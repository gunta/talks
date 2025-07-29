<template>
  <TwentyFirstToolbar v-if="isDev" :config="config" />
</template>


<script setup lang="ts">
import { TwentyFirstToolbar } from "@21st-extension/toolbar-vue";
import { VuePlugin } from "@21st-extension/vue";

// Check if we're in development mode
// @ts-ignore - Slidev provides import.meta.env
// const isDev = import.meta.env?.DEV ?? false
const isDev = true;

const config = {
	plugins: [VuePlugin],
};
</script> 