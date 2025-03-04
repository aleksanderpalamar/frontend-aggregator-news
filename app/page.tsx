import { News } from "@/components/news";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 flex flex-col gap-6">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900">
          Last News
        </h2>
        <News />
      </section>

      <footer className="border-t px-4 md:px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center 
         justify-between gap-4 md:h-16 md:flex-row text-zinc-900"
        >
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} NewsHub. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
