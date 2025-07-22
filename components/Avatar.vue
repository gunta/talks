<template>
  <div class="relative inline-block">
    <div
      :class="[
        'overflow-hidden bg-gray-200 flex items-center justify-center',
        sizeClasses,
        'rounded-full'
      ]"
    >
      <img
        v-if="imageUrl && !imageError"
        :src="imageUrl"
        :alt="`${username} avatar`"
        @load="handleImageLoad"
        @error="handleImageError"
        class="w-full h-full object-cover"
        :style="{ opacity: imageLoaded ? 1 : 0 }"
        :class="{ 'transition-opacity duration-300': true }"
      />
      <div
        v-if="!imageUrl || imageError || !imageLoaded"
        :class="[
          'flex items-center justify-center font-medium text-gray-600',
          textSizeClasses
        ]"
      >
        {{ initials }}
      </div>
    </div>
    <div
      v-if="showPlatformBadge"
      :class="[
        'absolute bottom-0 right-0 rounded-full p-1 shadow-sm',
        platform === 'github' ? 'bg-gray-900' : 'bg-blue-500'
      ]"
      :style="{ transform: 'translate(25%, 25%)' }"
    >
      <svg
        v-if="platform === 'github'"
        class="w-3 h-3 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      <svg
        v-else-if="platform === 'twitter'"
        class="w-3 h-3 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

interface Props {
  platform: 'github' | 'twitter'
  username: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  showPlatformBadge?: boolean
  quality?: 'low' | 'medium' | 'high' | 'max'
  fallbackName?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  showPlatformBadge: false,
  quality: 'max',
  fallbackName: ''
})

const imageUrl = ref<string>('')
const imageLoaded = ref(false)
const imageError = ref(false)

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24'
  }
  return sizes[props.size]
})

const textSizeClasses = computed(() => {
  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
    '2xl': 'text-xl'
  }
  return sizes[props.size]
})

const initials = computed(() => {
  const name = props.fallbackName || props.username
  return name
    .split(/[-_\s]/)
    .filter(Boolean)
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const getImageUrl = () => {
  if (props.platform === 'github') {
    // GitHub provides avatar URLs with size parameter
    const sizeParam = props.quality === 'max' ? 460 : props.quality === 'high' ? 200 : 100
    return `https://github.com/${props.username}.png?size=${sizeParam}`
  } else if (props.platform === 'twitter') {
    // For Twitter/X, we need to use a proxy service or have the URL provided externally
    // As Twitter requires authentication for their API
    // For now, we'll use unavatar.io as a fallback service
    return `https://unavatar.io/twitter/${props.username}?fallback=false`
  }
  return ''
}

const getCacheKey = () => {
  return `avatar_${props.platform}_${props.username}_${props.quality}`
}

const loadImageFromCache = () => {
  const cacheKey = getCacheKey()
  const cached = localStorage.getItem(cacheKey)
  if (cached) {
    try {
      const data = JSON.parse(cached)
      // Check if cache is still valid (24 hours)
      if (Date.now() - data.timestamp < 86400000) {
        return data.url
      }
    } catch (e) {
      // Invalid cache data
    }
  }
  return null
}

const saveImageToCache = (url: string) => {
  const cacheKey = getCacheKey()
  localStorage.setItem(cacheKey, JSON.stringify({
    url,
    timestamp: Date.now()
  }))
}

const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = url
  })
}

const handleImageLoad = () => {
  imageLoaded.value = true
  imageError.value = false
}

const handleImageError = () => {
  imageError.value = true
  imageLoaded.value = false
}

const loadAvatar = async () => {
  imageLoaded.value = false
  imageError.value = false
  
  // Try to load from cache first
  const cachedUrl = loadImageFromCache()
  if (cachedUrl) {
    imageUrl.value = cachedUrl
    try {
      await preloadImage(cachedUrl)
      return
    } catch (e) {
      // Cache might be stale, continue with fresh fetch
    }
  }
  
  // Get fresh URL
  const url = getImageUrl()
  if (url) {
    try {
      await preloadImage(url)
      imageUrl.value = url
      saveImageToCache(url)
    } catch (e) {
      imageError.value = true
    }
  }
}

// Load avatar on mount and when props change
onMounted(() => {
  loadAvatar()
})

watch([() => props.platform, () => props.username, () => props.quality], () => {
  loadAvatar()
})
</script> 