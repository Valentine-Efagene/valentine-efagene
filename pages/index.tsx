import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageShell from '@/components/PageShell'
import Seo from '@/components/Seo'
import SocialLinks from '@/components/SocialLinks'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import CertificationsGrid from '@/components/CertificationsGrid'
import HeroBackdrop from '@/components/HeroBackdrop'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/content'

const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
})

export default function Home() {
  return (
    <PageShell>
      <Seo />
      <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden">
        <HeroBackdrop />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="max-w-xl space-y-7">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {profile.title}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              {profile.name}
            </h1>
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              {profile.summary}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="#experience">
                  Experience
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/certifications">Certifications</Link>
              </Button>
            </div>
            <SocialLinks />
          </div>

          <div className="relative hidden h-[28rem] w-full lg:block lg:h-[36rem]">
            <HeroScene />
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative mx-auto w-full max-w-4xl px-4 py-24 sm:px-6"
      >
        <ExperienceTimeline showHeading />
      </section>

      <section
        id="certifications"
        className="relative mx-auto w-full max-w-4xl px-4 pb-24 sm:px-6"
      >
        <CertificationsGrid showHeading />
      </section>
    </PageShell>
  )
}
