import { type ReactNode } from 'react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { cn } from '@/lib/utils'

type PageShellProps = {
  children: ReactNode
  className?: string
  showFooter?: boolean
}

export default function PageShell({
  children,
  className,
  showFooter = true,
}: PageShellProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen overflow-x-hidden bg-background',
        className
      )}
    >
      <SiteHeader />
      <main className="relative z-10 pt-16">{children}</main>
      {showFooter ? <SiteFooter /> : null}
    </div>
  )
}
