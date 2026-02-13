import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";
import { BLOG_BY_SLUG_QUERY } from "@/lib/queries";
import type { Blog } from "@/types/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // ✅ Next 15 requires await

  const post: Blog = await client.fetch(BLOG_BY_SLUG_QUERY, {
    slug,
  });

  if (!post) {
    notFound();
  }

  const paragraphs = post.content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        {post.title}
      </h1>

      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </article>
  );
}
