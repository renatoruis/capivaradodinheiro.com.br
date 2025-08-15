<template>
  <div :class="containerClasses">
    <!-- Placeholder antes do carregamento -->
    <div 
      v-if="!isAdLoaded" 
      class="ad-placeholder"
      :style="placeholderStyle"
    >
      <div class="text-center">
        <div class="inline-flex items-center space-x-2">
          <div class="w-4 h-4 bg-gray-400 rounded animate-pulse"></div>
          <span>Publicidade</span>
        </div>
      </div>
    </div>

    <!-- Google AdSense -->
    <ins
      v-show="isAdLoaded"
      class="adsbygoogle"
      :style="adStyle"
      :data-ad-client="config.public.adsenseClient"
      :data-ad-slot="slot"
      :data-ad-format="format"
      :data-full-width-responsive="format === 'auto'"
    ></ins>
  </div>
</template>

<script setup lang="ts">
import type { AdComponentProps } from '~/types/post'

const props = withDefaults(defineProps<AdComponentProps>(), {
  format: 'auto',
  className: ''
})

const config = useRuntimeConfig()
const isAdLoaded = ref(false)

// Classes do container
const containerClasses = computed(() => [
  'ad-container my-8',
  props.className,
  {
    'text-center': props.format === 'auto' || props.format === 'rectangle'
  }
])

// Estilo do placeholder baseado no formato
const placeholderStyle = computed(() => {
  switch (props.format) {
    case 'rectangle':
      return { minHeight: '280px' }
    case 'horizontal':
      return { minHeight: '120px' }
    default:
      return { minHeight: '250px' }
  }
})

// Estilo do anúncio
const adStyle = computed(() => {
  const baseStyle: Record<string, string> = {
    display: 'block'
  }

  switch (props.format) {
    case 'rectangle':
      baseStyle.width = '300px'
      baseStyle.height = '250px'
      break
    case 'horizontal':
      baseStyle.width = '728px'
      baseStyle.height = '90px'
      break
    default:
      baseStyle.width = '100%'
      baseStyle.height = 'auto'
  }

  return baseStyle
})

// Carrega o AdSense apenas no client-side
onMounted(() => {
  // Carrega o script do AdSense se ainda não foi carregado
  if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)
  }

  // Aguarda um pequeno delay para carregar o anúncio
  nextTick(() => {
    setTimeout(() => {
      try {
        // Inicializa o anúncio
        if (window.adsbygoogle && window.adsbygoogle.loaded) {
          window.adsbygoogle.push({})
        } else {
          // Se o adsbygoogle ainda não está carregado, aguarda um pouco mais
          const checkAdSense = setInterval(() => {
            if (window.adsbygoogle) {
              window.adsbygoogle.push({})
              clearInterval(checkAdSense)
            }
          }, 100)
          
          // Para evitar loops infinitos
          setTimeout(() => clearInterval(checkAdSense), 5000)
        }
        
        isAdLoaded.value = true
      } catch (error) {
        console.warn('Erro ao carregar anúncio:', error)
        // Em caso de erro, mostra o anúncio mesmo assim (pode ser bloqueador de ads)
        isAdLoaded.value = true
      }
    }, 300)
  })
})

// Declara o tipo global para o adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}
</script>

<style scoped>
.ad-container {
  /* Evita Cumulative Layout Shift (CLS) */
  contain: layout;
}

.ad-placeholder {
  @apply bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-sm rounded-lg;
}

/* Responsividade para anúncios horizontais */
@media (max-width: 768px) {
  .adsbygoogle[data-ad-format="horizontal"] {
    width: 320px !important;
    height: 50px !important;
  }
}

/* Estilo para anúncios que falharam em carregar */
.adsbygoogle[data-adsbygoogle-status="unfilled"] {
  display: none !important;
}
</style>
