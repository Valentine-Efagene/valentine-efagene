import type { LucideIcon } from 'lucide-react'
import { Github, Linkedin, Mail, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/content'

const links: { href: string; label: string; icon: LucideIcon }[] = [
  { href: profile.social.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: profile.social.github, label: 'GitHub', icon: Github },
  { href: profile.social.email, label: 'Email', icon: Mail },
  { href: profile.social.youtube, label: 'YouTube', icon: Youtube },
]

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        <Button key={label} asChild variant="outline" size="icon">
          <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon />
          </a>
        </Button>
      ))}
    </div>
  )
}
