<template>
  <section class="py-16 bg-gradient-orange">
    <div class="container-custom">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Título -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {{ title }}
        </h2>

        <!-- Descrição -->
        <p class="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
          {{ description }}
        </p>

        <!-- Botão CTA -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <component
            :is="isExternalLink ? 'a' : 'NuxtLink'"
            :to="!isExternalLink ? buttonUrl : undefined"
            :href="isExternalLink ? buttonUrl : undefined"
            :target="isExternalLink ? '_blank' : undefined"
            :rel="isExternalLink ? 'noopener noreferrer' : undefined"
            :class="buttonClasses"
          >
            {{ buttonText }}
            <svg 
              v-if="isExternalLink"
              class="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <svg 
              v-else
              class="ml-2 w-5 h-5" 
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
          </component>

          <!-- Botão secundário (opcional) -->
          <slot name="secondary-button" />
        </div>

        <!-- Informações extras (opcional) -->
        <div v-if="$slots.extra" class="mt-8 text-orange-200">
          <slot name="extra" />
        </div>
      </div>
    </div>

    <!-- Elementos decorativos -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Círculos decorativos -->
      <div class="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full"></div>
      <div class="absolute top-1/2 -right-5 w-16 h-16 bg-white/5 rounded-full"></div>
      <div class="absolute -bottom-8 left-1/3 w-12 h-12 bg-white/10 rounded-full"></div>
      
      <!-- Padrão de pontos -->
      <div class="absolute top-10 right-10 opacity-20">
        <div class="grid grid-cols-4 gap-2">
          <div v-for="i in 12" :key="i" class="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CallToActionProps } from '~/types/post'

const props = withDefaults(defineProps<CallToActionProps>(), {
  title: 'Pronto para Transformar suas Finanças?',
  description: 'Junte-se a milhares de pessoas que já estão construindo um futuro financeiro mais sólido. Comece sua jornada hoje mesmo!',
  buttonText: 'Começar Agora',
  buttonUrl: 'https://exemplo.com/newsletter',
  variant: 'primary'
})

const { isExternalUrl } = usePaths()

// Determina se o link é externo
const isExternalLink = computed(() => 
  props.buttonUrl.startsWith('http') || props.buttonUrl.startsWith('mailto:') || props.buttonUrl.startsWith('tel:')
)

// Classes do botão baseadas na variante
const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/25'
  
  if (props.variant === 'secondary') {
    return `${baseClasses} border-2 border-white text-white hover:bg-white hover:text-primary-600 bg-transparent`
  }
  
  return `${baseClasses} bg-white text-primary-600 hover:bg-orange-50 shadow-lg hover:shadow-xl`
})
</script>

<style scoped>
section {
  position: relative;
}

/* Animação sutil para os elementos decorativos */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.absolute.inset-0 > div:nth-child(1) {
  animation: float 6s ease-in-out infinite;
}

.absolute.inset-0 > div:nth-child(2) {
  animation: float 4s ease-in-out infinite reverse;
}

.absolute.inset-0 > div:nth-child(3) {
  animation: float 8s ease-in-out infinite;
}
</style>
