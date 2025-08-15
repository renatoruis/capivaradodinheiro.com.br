import { defineNuxtPlugin } from '#app'
import ContentRenderer from '~/components/ContentRenderer.vue'

export default defineNuxtPlugin((nuxtApp) => {
  // Registrar o componente ContentRenderer personalizado globalmente
  nuxtApp.vueApp.component('ContentRenderer', ContentRenderer)
})
