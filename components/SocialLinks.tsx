import type { LucideIcon } from 'lucide-react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/data/content'
import { cn } from '@/lib/utils'

const links: { href: string; label: string; icon: LucideIcon }[] = [
  { href: profile.social.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: profile.social.github, label: 'GitHub', icon: Github },
  { href: profile.social.email, label: 'Email', icon: Mail },
]

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-5', className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}
