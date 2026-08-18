import Head from 'next/head'
import { profile } from '@/data/content'

type SeoProps = {
  title?: string
  description?: string
}

export default function Seo({ title, description }: SeoProps) {
  const pageTitle = title
    ? `${title} · ${profile.name}`
    : `${profile.name} · ${profile.title}`
  const pageDescription = description || profile.summary

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
