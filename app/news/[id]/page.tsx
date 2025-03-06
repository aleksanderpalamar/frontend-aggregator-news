"use client";

import { getNewsById } from "@/app/actions/news";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewsItem } from "@/types/news";
import { ArrowLeft, Calendar, ExternalLink, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function NewsPage() {
  const params = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    async function fetchNews() {
      const newsData = await getNewsById(params.id);
      if (!newsData) {
        notFound();
      } else {
        setNews(newsData);
      }
    }
    fetchNews();
  }, [params.id]);

  if (!news) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin h-6 w-6" />
      </div>
    );
  }

  if (!news) {
    notFound();
  }

  const formattedDate = news.datePublished
    ? new Date(news.datePublished).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Link>
      </Button>

      <Card>
        <div className="relative w-full h-[400px]">
          <Image
            src={news.urlImages || "/placeholder.svg"}
            alt={news.title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-3xl">{news.title}</CardTitle>
          <CardDescription className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </div>
            {news.source && <Badge>{news.source}</Badge>}
            {news.author && (
              <span className="text-sm text-muted-foreground">
                By {news.author}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p className="text-lg font-medium mb-4">{news.resume}</p>
            <p>{news.content}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          {news.urlOriginal && (
            <Button asChild>
              <Link
                href={news.urlOriginal}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read original article
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
