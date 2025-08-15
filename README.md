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

O output estará disponível na pasta `.output/public/` pronto para ser hospedado em qualquer servidor de hospedagem estática.

### Implantação

Para implantar o site:

1. Execute `pnpm static` para gerar os arquivos estáticos
2. Faça upload da pasta `.output/public/` para qualquer hospedagem estática:
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting
   - Amazon S3
   - etc.

## Estrutura de Arquivos

```
├── assets/              # Arquivos CSS globais, imagens
├── components/          # Componentes Vue reutilizáveis
│   ├── Header.vue       # Cabeçalho do site
│   ├── Footer.vue       # Rodapé do site
│   ├── AdComponent.client.vue  # Componente de anúncio (client-only)
│   ├── CallToAction.vue  # Componente de CTA
│   └── ...
├── composables/         # Composables Vue
├── content/             # Conteúdo em Markdown para o blog
│   └── blog/            # Posts do blog em Markdown
├── layouts/             # Layouts do site
├── pages/               # Páginas do site (rotas)
│   ├── index.vue        # Landing page
│   ├── blog/            # Páginas relacionadas ao blog
│   │   ├── index.vue    # Lista de posts
│   │   └── [slug].vue   # Página de post individual
├── public/              # Assets estáticos
│   ├── assets/          # Imagens do site (logo, etc)
│   └── imagens/         # Imagens dos posts
├── types/               # Definições de tipos TypeScript
└── utils/               # Funções utilitárias
```

## Arquivos de Configuração

- `nuxt.config.ts`: Configuração principal do Nuxt
- `tailwind.config.js`: Configuração do Tailwind CSS
- `tsconfig.json`: Configuração do TypeScript