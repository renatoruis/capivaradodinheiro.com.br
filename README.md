# CapivaraDoDinheiro

Blog e landing page de educação financeira com Nuxt 3.

## Tecnologias

- Nuxt 3
- Vue.js 3 (Composition API + `<script setup>`)
- TypeScript
- Tailwind CSS v3
- @nuxt/content
- @nuxt/image

## Características

- **SSG (Static Site Generation)** para performance otimizada
- **SEO otimizado** (meta tags dinâmicas, OG, Twitter Cards, sitemap)
- **Conteúdo gerenciado via Markdown** com frontmatter
- **Google AdSense** integrado (componentes client-only)
- **Google Analytics 4** integrado
- **Design responsivo e acessível (WCAG)**

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Verificar tipos
pnpm type-check

# Formatar código
pnpm lint:fix
```

## Geração Estática (Recomendado)

Esse projeto gera arquivos estáticos HTML para melhor performance e SEO:

```bash
# Gerar site estático
pnpm static

# Visualizar site gerado localmente
pnpm static:serve
```

O site estático gerado estará na pasta `.output/public` e pode ser hospedado em qualquer servidor de arquivos estáticos como GitHub Pages, Netlify, Vercel, etc.

## Estrutura do Projeto

```
├── app.vue                # Ponto de entrada principal
├── assets/                # Arquivos de estilo e recursos
├── components/            # Componentes Vue reutilizáveis
│   ├── AdComponent.client.vue      # Componente de anúncio (client-only)
│   ├── CallToAction.vue            # Componente CTA
│   ├── ContentRenderer.vue         # Renderizador de conteúdo personalizado
│   ├── DonationModal.vue           # Modal de doação
│   ├── Footer.vue                  # Rodapé do site
│   ├── Header.vue                  # Cabeçalho do site
│   └── PlaceholderImage.vue        # Imagem placeholder
├── composables/           # Composables Vue
│   ├── useDate.ts                  # Formatação de datas
│   └── usePaths.ts                 # Helpers para caminhos de imagens
├── content/               # Conteúdo em Markdown
│   └── blog/                       # Posts do blog
├── layouts/               # Layouts do site
│   └── default.vue                 # Layout padrão
├── pages/                 # Páginas da aplicação
│   ├── index.vue                   # Landing page
│   └── blog/                       # Páginas do blog
│       ├── index.vue               # Lista de posts
│       └── [slug].vue              # Página individual de post
├── plugins/               # Plugins Nuxt
│   └── google-analytics.client.ts  # Plugin Google Analytics
├── public/                # Arquivos públicos
│   ├── assets/                     # Imagens e recursos estáticos
│   ├── imagens/                    # Imagens dos posts
│   ├── _redirects                  # Regras de redirecionamento para Netlify
│   ├── .nojekyll                   # Arquivo para GitHub Pages
│   └── robots.txt                  # Arquivo robots.txt
├── scripts/               # Scripts auxiliares
├── types/                 # Definições de tipos TypeScript
│   ├── global.d.ts                 # Tipos globais
│   └── post.d.ts                   # Interface do Post
├── utils/                 # Funções utilitárias
│   ├── seo.ts                      # Helpers de SEO
│   └── slugify.ts                  # Função para criar slugs
├── nuxt.config.ts         # Configuração do Nuxt
├── tailwind.config.js     # Configuração do Tailwind CSS
└── tsconfig.json          # Configuração do TypeScript
```

## Adicionando Novos Posts

1. Crie um arquivo Markdown na pasta `content/blog/`
2. Adicione o frontmatter necessário:

```markdown
---
title: Título do Post
description: Descrição curta para SEO
date: 2023-08-15
image: nome-da-imagem.jpg
alt: Texto alternativo da imagem
---

Conteúdo do post em Markdown...

<!-- AD -->

Mais conteúdo...
```

3. O marcador `<!-- AD -->` pode ser usado para inserir anúncios em meio ao conteúdo
4. **Importante**: Todos os posts são automaticamente incluídos na geração estática, não é necessário configuração adicional

## Configurações

### Google Analytics

O ID do Google Analytics está configurado no arquivo `app.vue` e no plugin `plugins/google-analytics.client.ts`.

### SEO

As configurações de SEO estão em `utils/seo.ts` e são aplicadas em cada página.

### Sitemap

O sitemap é gerado automaticamente com base nas páginas e posts disponíveis.