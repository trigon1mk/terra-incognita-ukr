import { Link } from '@tanstack/react-router'
import { Masthead, SiteFooter } from '@/components/layout'

export function ErrorComponent({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Masthead />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center">
          <div className="font-mono text-blood text-6xl mb-6">!</div>
          <h1 className="text-4xl font-serif font-bold mb-4 text-parchment">Системна помилка</h1>
          <p className="text-fog mb-6 italic">
            Стався критичний збій при завантаженні даних. Спробуйте оновити сторінку або поверніться пізніше.
          </p>
          <pre className="text-left bg-ash p-4 mb-10 overflow-auto text-xs text-fog border border-smoke">
            {error.message}
          </pre>
          <Link
            to="/"
            className="inline-block border border-sulfur text-sulfur px-8 py-3 font-mono text-sm uppercase tracking-widest hover:bg-sulfur hover:text-pitch transition-colors"
          >
            На головну
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
