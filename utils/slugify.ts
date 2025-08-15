import slugify from 'slugify'

/**
 * Gera um slug limpo removendo acentos e caracteres especiais
 * @param text - Texto para converter em slug
 * @returns Slug formatado
 */
export function createSlug(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,
    locale: 'pt',
    remove: /[*+~.()'"!:@]/g
  })
}

/**
 * Normaliza um slug existente
 * @param slug - Slug para normalizar
 * @returns Slug normalizado
 */
export function normalizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\-]/g, '-') // Substitui caracteres especiais por hífen
    .replace(/-+/g, '-') // Remove hífens duplicados
    .replace(/^-|-$/g, '') // Remove hífens no início e fim
}

/**
 * Extrai o slug de um path do @nuxt/content
 * @param path - Path do content (ex: /blog/meu-post)
 * @returns Slug extraído
 */
export function extractSlugFromPath(path: string): string {
  return path.split('/').pop() || ''
}
