import { profile } from '@/data/content'

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/80 py-8 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          {profile.title} · {profile.location}
        </p>
      </div>
    </footer>
  )
}
