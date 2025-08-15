export default defineNuxtConfig({
  // Compatibility date
  compatibilityDate: '2025-01-15',

  // Módulos
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image'
  ],
  
  // Google Analytics
  app: {
    head: {
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=G-61BT9HZHZL`,
          async: true
        }
      ]
    }
  },

  // Configuração do Content
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },

  // Configuração para geração estática
  ssr: true,
  
  // Configuração do nitro para estático
  nitro: {
    preset: 'static',
    // Configuração para pré-renderizar com crawling + rotas explícitas
    prerender: {
      crawlLinks: true,
      routes: [
        '/blog/2023-11-01-reserva-de-emergencia-completo',
        '/blog/2023-12-01-como-comecar-investir-do-zero'
      ],
      ignore: [
        // Ignore qualquer rota que cause erro
        '/termos',
        '/privacidade'
      ]
    }
  },
  
  // Configuração da base URL, se necessário
  app: {
    baseURL: process.env.BASE_URL || '/',
    buildAssetsDir: 'assets'
  }
})