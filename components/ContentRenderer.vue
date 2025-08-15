<template>
  <div>
    <ContentRendererMarkdown
      v-if="value?._type === 'markdown'"
      :value="value"
      :components="components"
      v-slot="{ body }"
    >
      <div v-if="body">
        <!-- Processa partes do conteúdo e insere anúncios onde marcado -->
        <template v-for="(part, index) in processedContent(body)">
          <!-- Anúncio -->
          <AdComponent 
            v-if="part.type === 'ad'" 
            :key="'ad-' + index"
            :slot="getRandomAdSlot()"
            format="rectangle" 
            class="my-8"
          />
          <!-- Conteúdo normal do markdown -->
          <div 
            v-else 
            :key="'content-' + index"
            v-html="part.content"
          ></div>
        </template>
      </div>
    </ContentRendererMarkdown>

    <!-- Fallback para outros tipos de conteúdo -->
    <ContentRendererIsland v-else-if="value?.type?.includes('island')" :value="value" />
    <pre v-else><code>{{ value }}</code></pre>
  </div>
</template>

<script setup>
import { ContentRendererMarkdown } from '#components'
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Object,
    required: false,
    default: () => ({})
  },
  components: {
    type: Object,
    default: () => ({})
  }
})

// Slots de anúncios disponíveis
const adSlots = [
  '1234567890',
  '2345678901',
  '3456789012',
  '4567890123',
  '5678901234'
]

// Obtém um slot de anúncio aleatório
const getRandomAdSlot = () => {
  const randomIndex = Math.floor(Math.random() * adSlots.length)
  return adSlots[randomIndex]
}

// Processa o conteúdo markdown, dividindo onde houver marcadores <!-- AD -->
const processedContent = (body) => {
  if (!body) return []
  
  // Divide o conteúdo nos marcadores de anúncio
  const parts = body.split('<!-- AD -->')
  
  // Prepara os blocos de conteúdo alternando conteúdo/anúncio
  const result = []
  
  parts.forEach((part, index) => {
    // Adiciona o conteúdo
    if (part.trim()) {
      result.push({
        type: 'content',
        content: part
      })
    }
    
    // Adiciona um anúncio após cada parte (exceto a última)
    if (index < parts.length - 1) {
      result.push({
        type: 'ad'
      })
    }
  })
  
  return result
}
</script>
