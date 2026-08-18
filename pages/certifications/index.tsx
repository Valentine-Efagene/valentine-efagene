import PageShell from '@/components/PageShell'
import Seo from '@/components/Seo'
import CertificationsGrid from '@/components/CertificationsGrid'

export default function Certifications() {
  return (
    <PageShell>
      <Seo
        title="Certifications"
        description="AWS Certified Solutions Architect, Cloud Practitioner, and Cloud Architecting credentials."
      />
      <section className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-medium text-primary">Credentials</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Certifications
          </h1>
          <p className="text-muted-foreground">
            Amazon Web Services certifications covering cloud architecture and
            foundational cloud fluency.
          </p>
        </div>
        <CertificationsGrid />
      </section>
    </PageShell>
  )
}
