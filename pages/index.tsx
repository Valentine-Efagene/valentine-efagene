import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import PageShell from '@/components/PageShell'
import Seo from '@/components/Seo'
import SocialLinks from '@/components/SocialLinks'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import CertificationsGrid from '@/components/CertificationsGrid'
import HeroScene from '@/components/HeroScene'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/content'

export default function Home() {
  return (
    <PageShell>
      <Seo />
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,42%)]">
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-medium text-primary">
              {profile.title} · {profile.location}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              {profile.summary}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#experience">
                  Job history
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/certifications">Certifications</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <SocialLinks />
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </p>
            </div>
          </div>

          <div className="relative hidden h-[28rem] lg:block">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
            <HeroScene />
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative mx-auto w-full max-w-4xl px-4 py-20 sm:px-6"
      >
        <ExperienceTimeline showHeading />
      </section>

      <section
        id="certifications"
        className="relative mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6"
      >
        <CertificationsGrid showHeading />
      </section>
    </PageShell>
  )
}
