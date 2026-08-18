import PageShell from '@/components/PageShell'
import Seo from '@/components/Seo'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { courses, education } from '@/data/content'

export default function Education() {
  return (
    <PageShell>
      <Seo
        title="Education"
        description="Bachelor of Engineering in Computer Engineering from the Federal University of Benin."
      />
      <section className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-medium text-primary">Background</p>
          <h1 className="text-4xl font-semibold tracking-tight">Education</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{education.degree}</CardTitle>
            <CardDescription className="text-base">
              {education.field} · {education.school}, {education.location}
            </CardDescription>
          </CardHeader>
        </Card>

        <h2 className="mb-4 text-xl font-semibold">Selected coursework</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Card key={course.title}>
              <CardHeader>
                <CardTitle className="text-base">{course.title}</CardTitle>
                <CardDescription className="leading-6">
                  {course.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
