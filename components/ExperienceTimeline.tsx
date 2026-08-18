import { experience, type ExperienceRole } from '@/data/content'

function ExperienceItem({ job }: { job: ExperienceRole }) {
  return (
    <article className="grid gap-3 sm:grid-cols-[1fr_auto] sm:gap-8">
      <div>
        <h3 className="text-base font-medium tracking-tight">{job.role}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {job.company} · {job.location}
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
          {job.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <p className="text-sm tabular-nums text-muted-foreground sm:text-right">
        {job.period}
      </p>
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
        <div className="mb-10">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Career
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Experience
          </h2>
        </div>
      ) : null}

      <ol className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="py-8">
            <ExperienceItem job={job} />
          </li>
        ))}
      </ol>
    </div>
  )
}
