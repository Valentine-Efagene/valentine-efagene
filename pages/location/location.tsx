import PageShell from '@/components/PageShell'
import Seo from '@/components/Seo'
import SocialLinks from '@/components/SocialLinks'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { profile } from '@/data/content'

export default function Location() {
  return (
    <PageShell>
      <Seo title="Location" description={`Based in ${profile.location}.`} />
      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl items-center px-4 py-16 sm:px-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Based in {profile.location}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Working remotely with distributed teams, including current roles
              in Nigeria and the United States.
            </p>
            <p>
              {profile.email} · {profile.phone}
            </p>
            <SocialLinks />
          </CardContent>
        </Card>
      </section>
    </PageShell>
  )
}
