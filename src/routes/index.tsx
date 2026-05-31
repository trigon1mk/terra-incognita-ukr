import { createFileRoute } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import BlogPosts from '@/components/blog-posts'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const sorted = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return <BlogPosts title="ТемнаГеографія" posts={sorted} />
}
