import { createFileRoute } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import BlogPosts from '@/components/blog-posts'

export const Route = createFileRoute('/category/$category')({
  head: ({ params }) => ({
    meta: [
      { title: `${params.category} | ТемнаГеографія` },
      {
        name: 'description',
        content: `Матеріали рубрики «${params.category}» — незалежне розслідувальне видання ТемнаГеографія`,
      },
    ],
  }),
  loader: async ({ params }) => {
    const category = params.category
    const posts = allPosts
      .filter((post) => post.categories.includes(category))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return { category, posts }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { category, posts } = Route.useLoaderData()
  return <BlogPosts title={category} posts={posts} />
}
