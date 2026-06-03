import { createFileRoute, Link } from '@tanstack/react-router'
import { marked } from 'marked'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import { type Post, allPosts } from 'content-collections'
import { Masthead, SiteFooter, formatDate } from '@/components/layout'
import { useEffect } from 'react'

marked.use(gfmHeadingId())

export const Route = createFileRoute('/posts/$slug')({
  head: ({ loaderData: post }) => {
    if (!post) return {}
    const p = post as Post
    return {
      meta: [
        { title: `${p.title} | ТемнаГеографія` },
        { name: 'description', content: p.summary },
        { name: 'author', content: p.author },
        { property: 'og:title', content: p.title },
        { property: 'og:description', content: p.summary },
        { property: 'og:type', content: 'article' },
        { property: 'article:published_time', content: new Date(p.date).toISOString() },
        { property: 'article:author', content: p.author },
        { property: 'article:section', content: p.categories[0] ?? 'Розслідування' },
        ...p.categories.map((cat) => ({ property: 'article:tag', content: cat })),
      ],
    }
  },
  loader: async ({ params }): Promise<Post> => {
    const post = allPosts.find((p) => p.slug === params.slug)
    if (!post) throw new Error('Post not found')
    return post as Post
  },
  component: RouteComponent,
})

function RouteComponent() {
  const post = Route.useLoaderData() as Post
  if (!post) return null

  const related = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.categories.some((c) => post.categories.includes(c))
    )
    .slice(0, 3)

  useEffect(() => {
    const bar = document.getElementById('reading-bar')
    if (!bar) return
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const initials = post.author
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <>
      <div className="reading-bar" id="reading-bar" />
      <Masthead />

      <article>
        {/* Hero */}
        <div className="article-hero">
          <div className="article-hero-inner">
            <div className="article-eyebrow">
              {post.categories.join(' · ')}
            </div>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-summary">{post.summary}</p>
            <div className="article-byline">
              <div className="author-avatar" aria-hidden="true">
                {initials}
              </div>
              <div>
                <div className="author-info-name">{post.author}</div>
                <div className="author-info-role">{post.authorRole}</div>
              </div>
              <span className="byline-date">{formatDate(post.date)}</span>
              <span className="byline-readtime">⏱ {post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div style={{ borderBottom: '1px solid var(--smoke)', background: 'var(--ash)' }}>
          <Link to="/" className="back-link">
            На головну
          </Link>
        </div>

        {/* Body */}
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: marked.parse(post.content) as string }}
        />
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="related-section">
          <div className="section-rule">
            <span>Читайте також</span>
          </div>
          <div className="related-grid">
            {related.map((r) => (
              <Link to="/posts/$slug" params={{ slug: r.slug }} key={r.slug} className="related-card">
                <div className="related-tag">{r.categories[0]}</div>
                <div className="related-title">{r.title}</div>
                <div className="related-excerpt">{r.summary}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: post.title,
            description: post.summary,
            author: {
              '@type': 'Person',
              name: post.author,
              jobTitle: post.authorRole,
            },
            publisher: {
              '@type': 'Organization',
              name: 'ТемнаГеографія',
            },
            datePublished: new Date(post.date).toISOString(),
            inLanguage: 'uk',
            keywords: post.categories.join(', '),
          }),
        }}
      />

      <SiteFooter />
    </>
  )
}
