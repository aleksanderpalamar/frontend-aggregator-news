export interface NewsItem {
  id: string
  title: string
  content: string
  resume: string
  datePublished: string
  source: string
  author?: string
  categories?: string[]
  urlImages: string
  urlOriginal: string
}