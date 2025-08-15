export interface PostFrontmatter {
  title: string
  description: string
  image: string
  alt: string
  date: string
  slug?: string
  draft?: boolean
  featured?: boolean
  tags?: string[]
  author?: string
  readTime?: number
}

export interface Post extends PostFrontmatter {
  _path: string
  body: any
  excerpt?: string
}

export interface PostCardProps {
  title: string
  description: string
  date: string
  slug: string
  image: string
  alt: string
  featured?: boolean
}

export interface AdComponentProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal'
  className?: string
}

export interface CallToActionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
  variant?: 'primary' | 'secondary'
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface SeoMeta {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
  publishedTime?: string
  modifiedTime?: string
}

export interface PaginationData {
  page: number
  perPage: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}
