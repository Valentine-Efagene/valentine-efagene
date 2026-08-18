import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function NavMenuItem({ children, tooltipTitle, href }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href}>{children}</Link>
      </TooltipTrigger>
      {tooltipTitle ? <TooltipContent>{tooltipTitle}</TooltipContent> : null}
    </Tooltip>
  )
}
