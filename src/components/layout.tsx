import { Link } from '@tanstack/react-router'

const NAV_LINKS = [
  { href: '/category/Розслідування', label: 'Розслідування' },
  { href: '/category/Аномалії', label: 'Аномалії' },
  { href: '/category/Закриті міста УРСР', label: 'Архів УРСР' },
  { href: '/category/Зниклі поселення', label: 'Зниклі поселення' },
  { href: '/category/Хімія та містика', label: 'Хімія' },
]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function Masthead() {
  const today = new Date().toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return (
    <header className="masthead">
      <Link to="/" className="masthead-logo">
        Темна<span>Географія</span>
      </Link>
      <nav>
        <ul className="masthead-nav">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link to={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <span className="masthead-date">{today}</span>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            Темна<span>Географія</span>
          </div>
          <p className="footer-desc">
            Незалежне журналістське видання про місця, події та людей, яких офіційна
            історія воліє замовчати. Базуємося у Львові. Пишемо українською.
          </p>
        </div>
        <div className="footer-col">
          <h5>Рубрики</h5>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link to={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Видання</h5>
          <ul>
            <li>Про нас</li>
            <li>Редакційна політика</li>
            <li>Написати до редакції</li>
            <li>Підтримати проєкт</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ТемнаГеографія. Усі права захищено.</span>
        <span className="footer-copyright-trigon">Trigon 2026 · Авторські права захищено</span>
        <span>Матеріали захищені авторським правом України</span>
      </div>
    </footer>
  )
}

export { formatDate }
