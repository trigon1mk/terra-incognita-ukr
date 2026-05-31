import { Link } from '@tanstack/react-router'
import { type Post } from 'content-collections'
import { Masthead, SiteFooter, formatDate } from './layout'

const ALL_CATEGORIES = [
  'Розслідування',
  'Закриті міста УРСР',
  'Аномалії',
  'Зниклі поселення',
  'Хімія та містика',
  'Архіви та документи',
]

const GLYPHS = ['⬡', '◈', '⬢', '✦', '◉']

export default function BlogPosts({ title, posts }: { title: string; posts: Post[] }) {
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p !== featured)

  const isHome = title === 'ТемнаГеографія'

  return (
    <>
      <Masthead />

      <div className="home-hero">
        <div className="home-hero-inner">
          <div className="home-eyebrow">Незалежне журналістське видання · Темна географія України</div>
          <h1 className="home-hero-title">
            {isHome ? (
              <>
                Місця, про які{' '}
                <em>офіційна&nbsp;історія</em>
                {' '}мовчить
              </>
            ) : (
              <em>{title}</em>
            )}
          </h1>
          {isHome && (
            <p className="home-hero-desc">
              Розслідування, архіви, свідчення. Закриті міста УРСР, зниклі поселення,
              аномальні зони — те, що не потрапляє до підручників.
            </p>
          )}
        </div>
      </div>

      <section className="featured-section">
        {featured && (
          <>
            <div className="section-label">
              {isHome ? 'Головний матеріал' : `Матеріали: ${title}`}
            </div>

            <Link to={`/posts/${featured.slug}`} className="featured-card">
              <div className="featured-visual">
                <span className="featured-visual-glyph" aria-hidden="true">
                  ◈
                </span>
              </div>
              <div className="featured-content">
                <div className="featured-tag">{featured.categories[0]}</div>
                <h2 className="featured-title">{featured.title}</h2>
                <p className="featured-excerpt">{featured.summary}</p>
                <div className="featured-meta">
                  <span className="featured-author">{featured.author}</span>
                  <span className="featured-date">{formatDate(featured.date)}</span>
                  <span className="featured-read">{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </>
        )}

        {rest.length > 0 && (
          <>
            <div className="section-label" style={{ marginTop: 48 }}>
              {isHome ? 'Всі матеріали' : 'Інші публікації'}
            </div>
            <div className="articles-grid">
              {rest.map((post, i) => (
                <Link to={`/posts/${post.slug}`} key={post._meta.path} className="article-card">
                  <div className="card-category">{post.categories[0]}</div>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.summary}</p>
                  <div className="card-footer">
                    <span className="card-author">{post.author}</span>
                    <span className="card-read-time">{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {posts.length === 0 && (
          <p style={{ color: 'var(--fog)', fontFamily: 'Space Mono, monospace', fontSize: 14 }}>
            Матеріалів у цій рубриці поки немає.
          </p>
        )}
      </section>

      {isHome && (
        <div className="categories-bar">
          <div className="section-label">Рубрики</div>
          <div className="cats-list">
            {ALL_CATEGORIES.map((cat) => (
              <Link to={`/category/${cat}`} key={cat} className="cat-pill">
                {cat}
              </Link>
            ))}
          </div>
        </div>
      )}

      <SiteFooter />
    </>
  )
}
