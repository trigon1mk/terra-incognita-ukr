import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { SearchModal } from './search'

const NAV_LINKS = [
  { to: '/category/$category', params: { category: 'Розслідування' }, label: 'Розслідування' },
  { to: '/category/$category', params: { category: 'Аномалії' }, label: 'Аномалії' },
  { to: '/category/$category', params: { category: 'Закриті міста УРСР' }, label: 'Архів УРСР' },
  { to: '/category/$category', params: { category: 'Зниклі поселення' }, label: 'Зниклі поселення' },
  { to: '/category/$category', params: { category: 'Хімія та містика' }, label: 'Хімія' },
  { to: '/novoyavorivsk-mysteries', label: 'Новояворівськ' },
] as const

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function Masthead() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const today = new Date().toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <header className="masthead">
        <Link to="/" className="masthead-logo">
          Темна<span>Географія</span>
        </Link>
        <nav>
          <ul className="masthead-nav">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} params={'params' in l ? l.params : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-fog hover:text-sulfur transition-colors flex items-center gap-2 group"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity">
              Пошук
            </span>
            <SearchIcon className="w-4 h-4" />
          </button>
          <span className="masthead-date hidden sm:inline">{today}</span>
        </div>
      </header>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
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
              <li key={l.label}>
                <Link to={l.to} params={'params' in l ? l.params : undefined}>
                  {l.label}
                </Link>
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
