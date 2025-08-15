<template>
  <article class="card group overflow-hidden h-full">
    <NuxtLink :to="postUrl" class="block h-full">
      <!-- Imagem -->
      <div class="relative overflow-hidden aspect-video">
        <NuxtImg
          :src="imagePath"
          :alt="alt"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          :placeholder="[400, 225, 75, 5]"
          loading="lazy"
          sizes="sm:100vw md:50vw lg:33vw"
        />
        
        <!-- Badge Featured (se aplicável) -->
        <div 
          v-if="featured" 
          class="absolute top-3 left-3 bg-gradient-orange text-white text-xs font-semibold px-2 py-1 rounded-full"
        >
          Destaque
        </div>
      </div>

      <!-- Conteúdo -->
      <div class="p-6 flex flex-col h-full">
        <!-- Data -->
        <div class="flex items-center mb-3">
          <time :datetime="formattedDateISO" class="text-sm text-dark-500 font-medium">
            {{ formattedDate }}
          </time>
        </div>

        <!-- Título -->
        <h3 class="font-bold text-xl text-dark-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
          {{ title }}
        </h3>

        <!-- Descrição -->
        <p class="text-dark-600 text-base line-clamp-3 leading-relaxed flex-grow">
          {{ description }}
        </p>

        <!-- Link de leitura -->
        <div class="mt-4 pt-4">
          <span class="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-200">
            Ler artigo
            <svg 
              class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { PostCardProps } from '~/types/post'

const props = withDefaults(defineProps<PostCardProps>(), {
  featured: false
})

const { formatDate, formatDateISO } = useDate()
const { getPostImagePath, getPostPath } = usePaths()

// URLs e formatações computadas
const imagePath = computed(() => getPostImagePath(props.image))
const postUrl = computed(() => getPostPath(props.slug))
const formattedDate = computed(() => formatDate(props.date))
const formattedDateISO = computed(() => formatDateISO(props.date))
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
