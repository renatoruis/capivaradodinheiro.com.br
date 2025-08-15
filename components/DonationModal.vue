<template>
  <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div 
      class="relative bg-white rounded-xl shadow-xl border border-gray-200 max-w-md w-full mx-4 overflow-hidden"
      @click.stop
    >
      <!-- Modal Header -->
      <div class="bg-gray-50 p-4 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-800">
            <span class="text-gray-800">
              Apoie este projeto
            </span>
          </h3>
          <button
            @click="$emit('update:modelValue', false)"
            class="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Modal Content -->
      <div class="p-6">
        <div class="flex items-center justify-center mb-6">
          <div class="relative">
            <div class="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center">
              <span class="text-4xl">☕</span>
            </div>
            <div class="absolute -bottom-2 -right-2 bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              <span class="text-white text-xs">BR</span>
            </div>
          </div>
        </div>
        
        <p class="text-gray-600 text-center mb-6">
          Se você achar esta ferramenta útil, considere me pagar um café para ajudar a mantê-la funcionando
        </p>
        
        <!-- PIX Key -->
        <div class="p-4 mb-4 flex flex-col gap-2">
          
          <a 
            href="https://link.mercadopago.com.br/capivaradodinheiro" 
            target="_blank"
            class="flex items-center justify-center bg-primary-500 text-white rounded-md px-3 py-2 mb-1"
          >
            <span class="text-sm">Doar via link</span>
          </a>

          <button
            @click="copyToClipboard"
            :class="`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
              copied 
                ? 'bg-green-100 text-green-600 border border-green-200' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200'
            }`"
          >
            {{ copied ? 'Copiado!' : 'Copiar chave PIX' }}
          </button>

          <p class="text-xs text-gray-500 mb-1 text-center">
            Chave PIX: {{ pixKey }}
          </p>
        </div>
        
        <div class="text-center text-gray-500 text-sm">
          Obrigado pelo seu apoio! 💖
        </div>
      </div>
    </div>
    
    <!-- Background overlay for closing -->
    <div 
      class="absolute inset-0 -z-10" 
      @click="$emit('update:modelValue', false)"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

defineEmits(['update:modelValue'])

const pixKey = "a7f1a823-d3b5-4ab3-b63f-03ffed9459f7"
const copied = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(pixKey)
    copied.value = true
    
    // Reset copied state after 2 seconds
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>