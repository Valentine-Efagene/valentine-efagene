import PageShell from '@/components/PageShell'
import Seo from '@/components/Seo'
import ExperienceTimeline from '@/components/ExperienceTimeline'

export default function Experience() {
  return (
    <PageShell>
      <Seo
        title="Experience"
        description="Job history across AI products, housing platforms, and product engineering."
      />
      <section className="relative mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-medium text-primary">Career</p>
          <h1 className="text-4xl font-semibold tracking-tight">Experience</h1>
          <p className="max-w-2xl text-muted-foreground">
            TypeScript product work across frontend, APIs, analytics, and
            infrastructure — from AI evaluations to housing platforms serving
            112,000+ users.
          </p>
        </div>
        <ExperienceTimeline />
      </section>
    </PageShell>
  )
}
