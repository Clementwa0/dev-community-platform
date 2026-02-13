import { notFound } from "next/navigation";
import { posts } from "@/lib/constants";
import { Blog } from "@/types/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};


const page =async ({ params }: PageProps) => {
  
  const { slug } =  await params;

  const post = posts.find((p: Blog) => p.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  const points = post.content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-100">
        {post.title}
      </h1>

      <ul className="list-none pl-6 space-y-3 text-gray-700 text-lg">
        {points.map((point, index) => (
          <li key={index}>{point.replace("•", "")}</li>
        ))}
      </ul>
    </article>
  );
}

export default page