import { allPosts } from 'content-collections'
import { Link } from '@tanstack/react-router'

export function UkraineMap() {
  return (
    <div className="relative w-full aspect-[16/9] max-w-lg mx-auto opacity-20 hover:opacity-40 transition-opacity">
      <svg
        viewBox="0 0 1000 660"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(212,160,23,0.1)]"
      >
        <path
          d="M140 100 L250 80 L400 90 L600 70 L800 120 L950 200 L930 400 L850 550 L700 630 L550 580 L400 620 L250 600 L100 500 L50 350 L70 200 Z"
          stroke="var(--sulfur)"
          strokeWidth="2"
          className="animate-pulse"
        />
        {/* Simple representation points */}
        <circle cx="200" cy="150" r="4" fill="var(--sulfur)" />
        <circle cx="800" cy="250" r="4" fill="var(--sulfur)" />
        <circle cx="500" cy="500" r="4" fill="var(--sulfur)" />
        <circle cx="150" cy="400" r="4" fill="var(--sulfur)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="font-mono text-[10px] text-sulfur uppercase tracking-[0.5em] animate-pulse">
          Точки інтересу активовані
        </div>
      </div>
    </div>
  )
}
