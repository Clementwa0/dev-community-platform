import BlogCard from "@/components/pages/BlogCard"
import { posts } from "@/lib/constants"

const page = () => {
  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">Blog</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
        </div>
  )
}

export default page