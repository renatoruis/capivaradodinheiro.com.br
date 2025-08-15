import type { SeoMeta } from '~/types/post'

/**
 * Gera meta tags para SEO baseado nos dados fornecidos
 * @param data - Dados para gerar as meta tags
 * @returns Objeto com meta tags formatadas
 */
export function generateSeoMeta(data: SeoMeta) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl
  
  const meta: Record<string, any> = {}
  
  // Basic meta
  if (data.title) {
    meta.title = data.title
    meta['og:title'] = data.title
    meta['twitter:title'] = data.title
  }
  
  if (data.description) {
    meta.description = data.description
    meta['og:description'] = data.description
    meta['twitter:description'] = data.description
  }
  
  if (data.url) {
    meta['og:url'] = data.url
    meta['twitter:url'] = data.url
    meta.canonical = data.url
  }
  
  if (data.image) {
    const imageUrl = data.image.startsWith('http') 
      ? data.image 
      : `${siteUrl}${data.image}`
    
    meta['og:image'] = imageUrl
    meta['twitter:image'] = imageUrl
    meta['og:image:alt'] = data.title || 'CapivaraDoDinheiro'
    meta['twitter:image:alt'] = data.title || 'CapivaraDoDinheiro'
  }
  
  if (data.type) {
    meta['og:type'] = data.type
  }
  
  if (data.publishedTime) {
    meta['article:published_time'] = data.publishedTime
  }
  
  if (data.modifiedTime) {
    meta['article:modified_time'] = data.modifiedTime
  }
  
  return meta
}

/**
 * Gera o título completo da página
 * @param title - Título da página
 * @param includesSiteName - Se deve incluir o nome do site
 * @returns Título formatado
 */
export function generatePageTitle(title: string, includesSiteName: boolean = true): string {
  const siteName = 'CapivaraDoDinheiro'
  
  if (!includesSiteName) {
    return title
  }
  
  return title === siteName ? title : `${title} | ${siteName}`
}

/**
 * Gera descrição truncada para SEO
 * @param text - Texto para truncar
 * @param maxLength - Comprimento máximo (padrão: 160)
 * @returns Descrição truncada
 */
export function generateMetaDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) {
    return text
  }
  
  const truncated = text.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  
  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace) + '...'
  }
  
  return truncated + '...'
}

/**
 * Gera dados estruturados para artigos
 * @param post - Dados do post
 * @returns JSON-LD estruturado
 */
export function generateArticleStructuredData(post: any) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? `${siteUrl}/imagens/${post.image}` : `${siteUrl}/assets/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'CapivaraDoDinheiro'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CapivaraDoDinheiro',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/logo.png`
      }
    }
  }
}
