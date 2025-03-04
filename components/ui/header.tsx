import { cn } from "@/lib/utils"
import { Newspaper } from "lucide-react"

function Header({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header className={cn(
      "sticky top-0 z-10 border-b bg-background/95 backdrop-blur support:-[backdrop-filter:blur(20px)]:bg-background/60",
      className,
      props
    )}
    >
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-center text-zinc-900">
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <Newspaper className="h-6 w-6" />
          <span>NewsHub</span>
        </h1>
      </div>
    </header>
  )
}

export { Header }