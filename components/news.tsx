import { NewsCard } from "@/components/news-card"
import type { NewsItem } from "@/types/news"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

async function getNews() {
  try {
    const res = await fetch("http://localhost:3001/api/news/", {
      next: { revalidate: 0 }, // Disable caching
    })

    if (!res.ok) {
      throw new Error("Failed to fetch news")
    }

    const news: NewsItem[] = await res.json()
    return news
  } catch (error) {
    console.error("Error fetching news:", error)
    return []
  }
}

export async function News() {
  const news = await getNews()

  if (!news.length) {
    return (
      <Alert className="bg-rose-100 border-rose-400 text-rose-800 rounded-md p-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="text-sm text-rose-800">
          Unable to load news. Please make sure your API server is running
          and accessible.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item: NewsItem) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  )
}