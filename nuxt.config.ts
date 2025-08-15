// Importar script para obter todos os posts
const { getAllBlogPosts } = require('./scripts/getAllPosts');

export default defineNuxtConfig({
  // Compatibility date
  compatibilityDate: '2025-01-15',

  // Módulos
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-simple-sitemap'
  ],
  
  // Google Analytics
  app: {
    baseURL: process.env.BASE_URL || '/',
    buildAssetsDir: 'assets',
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
    },
    // Configuração para evitar erros de pré-renderização
    experimental: {
      clientDB: true
    },
    // Desativar API de conteúdo para geração estática
    api: {
      baseURL: '/api/_content'
    }
  },

  // Configuração para geração estática
  ssr: true,
  
  // Desativar validação de rotas para evitar erros de pré-renderização
  experimental: {
    noVueServer: true
  },
  
  // Configuração do nitro para estático
  nitro: {
    preset: 'static',
    // Configuração para pré-renderizar com crawling + rotas explícitas
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/blog',
        ...getAllBlogPosts() // Adiciona automaticamente todos os posts
      ],
      ignore: [
        // Ignore qualquer rota que cause erro
        '/termos',
        '/privacidade',
        '/api/**', // Ignorar todas as rotas de API durante a pré-renderização
        '/**/_payload.json'
      ],
      failOnError: false // Não falhar em caso de erros de pré-renderização
    }
  },
  
  // Configuração do sitemap
  sitemap: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://capivaradodinheiro.com.br',
    autoLastmod: true,
    xslTips: true,
    includeAppSources: true,
    include: [
      '/blog/**',
      '/'
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date().toISOString()
    }
  }
})