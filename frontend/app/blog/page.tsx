import { client } from "@/lib/sanity";
import { BLOGS_QUERY } from "@/lib/queries";
import BlogCard from "@/components/pages/BlogCard";
import type { Blog } from "@/types/blog";

export default async function BlogPage() {
  const blogs: Blog[] = await client.fetch(BLOGS_QUERY);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} post={blog} />
      ))}
    </div>
  );
}
