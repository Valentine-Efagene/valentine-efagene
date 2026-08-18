import { Card } from '@/components/ui/card'

export default function GlassCard({ children, className, style, onClick }) {
  return (
    <Card className={className} style={style} onClick={onClick}>
      {children}
    </Card>
  )
}
