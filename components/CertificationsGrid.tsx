import { Award, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { certifications } from '@/data/content'

export default function CertificationsGrid({
  showHeading = false,
}: {
  showHeading?: boolean
}) {
  return (
    <div>
      {showHeading ? (
        <div className="mb-8">
          <p className="text-sm font-medium text-primary">Credentials</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight">
            Certifications
          </h2>
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((cert) => (
          <Card key={cert.name} className="flex flex-col">
            <CardHeader>
              <Award className="mb-2 h-5 w-5 text-primary" />
              <CardTitle className="text-base leading-6">{cert.name}</CardTitle>
              <CardDescription>{cert.issuer}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button asChild variant="outline" size="sm">
                <a href={cert.href} target="_blank" rel="noreferrer">
                  View credential
                  <ExternalLink />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
