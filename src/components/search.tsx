import { useState, useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import Fuse from 'fuse.js'
import { allPosts, type Post } from 'content-collections'
import { Search as SearchIcon, X } from 'lucide-react'

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')

  const fuse = useMemo(() => {
    return new Fuse(allPosts, {
      keys: ['title', 'summary', 'content', 'categories'],
      threshold: 0.3,
    })
  }, [])

  const results = useMemo(() => {
    if (!query) return []
    return fuse.search(query).slice(0, 5)
  }, [query, fuse])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-[10vh] px-4">
      <div className="absolute inset-0 bg-pitch/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-ash border border-smoke shadow-2xl shadow-black">
        <div className="flex items-center p-4 border-bottom border-smoke">
          <SearchIcon className="w-5 h-5 text-sulfur mr-3" />
          <input
            autoFocus
            type="text"
            placeholder="Шукати в архівах..."
            className="flex-1 bg-transparent border-none outline-none text-parchment font-serif text-xl"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-2 text-fog hover:text-sulfur transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="max-height-[60vh] overflow-auto border-top border-smoke">
            {results.map(({ item: post }) => (
              <Link
                key={post.slug}
                to="/posts/$slug"
                params={{ slug: post.slug }}
                onClick={onClose}
                className="block p-6 hover:bg-smoke transition-colors group"
              >
                <div className="text-xs font-mono text-sulfur-dark mb-1 uppercase tracking-widest">
                  {post.categories[0]}
                </div>
                <div className="text-lg font-serif font-bold text-parchment group-hover:text-sulfur transition-colors">
                  {post.title}
                </div>
                <p className="text-sm text-fog line-clamp-1 italic mt-1">{post.summary}</p>
              </Link>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="p-10 text-center text-fog italic font-serif">
            За вашим запитом документів не знайдено.
          </div>
        )}

        <div className="p-3 bg-pitch/50 border-top border-smoke flex justify-between items-center px-6">
          <div className="text-[10px] font-mono text-fog uppercase tracking-tighter">
            Пошук у {allPosts.length} матеріалах
          </div>
          <div className="text-[10px] font-mono text-fog uppercase tracking-tighter">
            Esc для виходу
          </div>
        </div>
      </div>
    </div>
  )
}
