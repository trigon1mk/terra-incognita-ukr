import { Link } from '@tanstack/react-router'
import { Masthead, SiteFooter } from '@/components/layout'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Masthead />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center">
          <div className="font-mono text-sulfur text-6xl mb-6">404</div>
          <h1 className="text-4xl font-serif font-bold mb-4 text-parchment">Сторінку не знайдено</h1>
          <p className="text-fog mb-10 italic">
            Можливо, цей документ було вилучено з архіву, або ви намагаєтесь отримати доступ до засекреченої зони.
          </p>
          <Link
            to="/"
            className="inline-block border border-sulfur text-sulfur px-8 py-3 font-mono text-sm uppercase tracking-widest hover:bg-sulfur hover:text-pitch transition-colors"
          >
            Повернутися на головну
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
