import type { NewsItem } from "@/types/news"
import { Badge } from "./ui/badge"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

interface NewsCardProps {
  news: NewsItem
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const { id, title, resume, datePublished, source, urlImages } = news

  const formattedDate = datePublished
    ? new Date(datePublished).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    : null

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <Link href={`/news/${id}`}>
        <div className="relative w-full h-48">
          <Image
            src={urlImages || "/placeholder.svg?height=200width=400"}
            alt={title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          {formattedDate && (
            <CardDescription className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formattedDate}
              </div>
              {source && (
                <div className="text-xs text-muted-foreground">
                  {source && <Badge className="ml-2">{source}</Badge>}
                </div>
              )}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="flex-1">
          <p className="line-clamp-1">{resume}</p>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-end gap-2">
        {news.urlOriginal && (
          <Link
            href={news.urlOriginal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Read original
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}