import PageShell from '@/components/PageShell'
import Seo from '@/components/Seo'
import { courses, education } from '@/data/content'

export default function Education() {
  return (
    <PageShell>
      <Seo
        title="Education"
        description="Bachelor of Engineering in Computer Engineering from the Federal University of Benin."
      />
      <section className="relative mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Background
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Education</h1>
        </div>

        <div className="border-y border-white/[0.08] py-8">
          <h2 className="text-base font-medium tracking-tight">
            {education.degree}, {education.field}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {education.school} · {education.location}
          </p>
        </div>

        <h2 className="mb-4 mt-12 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Selected coursework
        </h2>
        <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {courses.map((course) => (
            <li key={course.title} className="py-5">
              <p className="text-sm font-medium tracking-tight">{course.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {course.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
