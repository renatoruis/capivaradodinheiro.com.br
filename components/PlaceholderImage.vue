<template>
  <div
    class="w-full h-full bg-gradient-to-br from-orange-100 to-orange-300 flex items-center justify-center text-white"
    :style="{ aspectRatio: aspect }"
  >
    <div class="text-center">
      <svg 
        class="w-12 h-12 mx-auto mb-2 text-orange-500" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v8l4-2 4 2 8-4V6H4zm0 12h16v-2l-8 4-8-4v2z" />
      </svg>
      <span class="text-sm font-medium text-orange-800">{{ alt || 'Imagem do Post' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  alt: {
    type: String,
    default: ''
  },
  aspect: {
    type: String,
    default: '16/9'
  }
})
</script>
