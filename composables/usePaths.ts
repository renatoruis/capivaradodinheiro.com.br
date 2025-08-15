/**
 * Composable para helpers de caminhos de arquivos e URLs
 */
export const usePaths = () => {
  const config = useRuntimeConfig()
  
  /**
   * Gera o caminho completo para uma imagem de post
   * @param imageName - Nome do arquivo de imagem
   * @returns Caminho completo da imagem
   */
  const getPostImagePath = (imageName: string): string => {
    if (!imageName) return '/assets/default-post.jpg'
    
    // Se já é uma URL completa, retorna como está
    if (imageName.startsWith('http')) {
      return imageName
    }
    
    // Se já começa com /, retorna como está
    if (imageName.startsWith('/')) {
      return imageName
    }
    
    // Caso contrário, adiciona o prefixo da pasta de imagens
    return `/imagens/${imageName}`
  }

  /**
   * Gera URL absoluta para imagens (útil para OG e Twitter Cards)
   * @param imagePath - Caminho da imagem (relativo ou absoluto)
   * @returns URL absoluta da imagem
   */
  const getAbsoluteImageUrl = (imagePath: string): string => {
    const siteUrl = config.public.siteUrl
    
    if (imagePath.startsWith('http')) {
      return imagePath
    }
    
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
    return `${siteUrl}${cleanPath}`
  }

  /**
   * Gera o caminho para assets estáticos
   * @param assetName - Nome do asset
   * @returns Caminho do asset
   */
  const getAssetPath = (assetName: string): string => {
    if (assetName.startsWith('/')) {
      return assetName
    }
    
    return `/assets/${assetName}`
  }

  /**
   * Gera URL absoluta para qualquer path
   * @param path - Caminho relativo ou absoluto
   * @returns URL absoluta
   */
  const getAbsoluteUrl = (path: string): string => {
    const siteUrl = config.public.siteUrl
    
    if (path.startsWith('http')) {
      return path
    }
    
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${siteUrl}${cleanPath}`
  }

  /**
   * Gera o caminho para a página de um post
   * @param slug - Slug do post
   * @returns Caminho da página do post
   */
  const getPostPath = (slug: string): string => {
    return `/blog/${slug}`
  }

  /**
   * Gera URL absoluta para a página de um post
   * @param slug - Slug do post
   * @returns URL absoluta da página do post
   */
  const getAbsolutePostUrl = (slug: string): string => {
    return getAbsoluteUrl(getPostPath(slug))
  }

  /**
   * Verifica se uma URL é externa
   * @param url - URL para verificar
   * @returns Boolean indicando se é externa
   */
  const isExternalUrl = (url: string): boolean => {
    return url.startsWith('http') && !url.includes(config.public.siteUrl)
  }

  return {
    getPostImagePath,
    getAbsoluteImageUrl,
    getAssetPath,
    getAbsoluteUrl,
    getPostPath,
    getAbsolutePostUrl,
    isExternalUrl
  }
}
