import { Badge } from '@/components/ui/badge'
import { experience, type ExperienceRole } from '@/data/content'

function ExperienceItem({ job }: { job: ExperienceRole }) {
  return (
    <article className="relative">
      <span className="absolute -left-[1.7rem] top-2 h-3 w-3 rounded-full border-2 border-background bg-primary" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
        <p className="text-sm text-muted-foreground">{job.period}</p>
      </div>
      <p className="mt-1 text-sm font-medium text-primary">
        {job.company} · {job.location}
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
        {job.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function ExperienceTimeline({
  showHeading = false,
}: {
  showHeading?: boolean
}) {
  return (
    <div>
      {showHeading ? (
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-primary">Career</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">
              Experience
            </h2>
          </div>
          <Badge variant="outline">{experience.length} roles</Badge>
        </div>
      ) : null}

      <ol className="relative space-y-10 border-l border-white/15 pl-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <ExperienceItem job={job} />
          </li>
        ))}
      </ol>
    </div>
  )
}
