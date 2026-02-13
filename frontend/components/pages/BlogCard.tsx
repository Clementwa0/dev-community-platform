import Link from "next/link";
import { Blog } from "@/types/blog";
import Image from "next/image";

const BlogCard = ({ post }: { post: Blog }) => {
  const cleanContent = post.content.replace(/\s+/g, " ").trim();
  const preview =
    cleanContent.length > 80 ? cleanContent.slice(0, 80) + "..." : cleanContent;

  return (
    <div className="border rounded-2xl p-2 shadow-sm hover:shadow-md transition duration-300 bg-white">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
      <div>
        <Image src="/images/event1.png" alt="image" width={300} height={200} />
      </div>
      <p className="text-gray-600 mb-3 text-sm">{preview}</p>

      <p className="text-gray-500 text-xs mb-4">
        By {post.author} • {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-500 text-xs mb-4">Updated : {post.updatedAt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="text-blue-600 font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
};
export default BlogCard;
