import Link from "next/link";
import type { Blog } from "@/types/blog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const BlogCard = ({ post }: { post: Blog }) => {
  const cleanContent = post.content.replace(/\s+/g, " ").trim();
  const preview =
    cleanContent.length > 120
      ? cleanContent.slice(0, 120) + "..."
      : cleanContent;

  return (
    <Card className="transition bg-slate-900 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">
          {post.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">
          {preview}
        </p>

        <p className="text-xs text-muted-foreground">
          By {post.author} •{" "}
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <p className="text-xs text-muted-foreground">
          Updated: {new Date(post.updatedAt).toLocaleDateString()}
        </p>
      </CardContent>

      <CardFooter>
        <Link
          href={`/blog/${post.slug}`}
          className="text-primary font-medium hover:underline"
        >
          Read More →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
