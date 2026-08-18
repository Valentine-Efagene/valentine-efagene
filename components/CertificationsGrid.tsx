import { ExternalLink } from 'lucide-react'
import { certifications } from '@/data/content'

export default function CertificationsGrid({
  showHeading = false,
}: {
  showHeading?: boolean
}) {
  return (
    <div>
      {showHeading ? (
        <div className="mb-10">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Credentials
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Certifications
          </h2>
        </div>
      ) : null}

      <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {certifications.map((cert) => (
          <li key={cert.name}>
            <a
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-foreground"
            >
              <div>
                <p className="text-sm font-medium tracking-tight">{cert.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
