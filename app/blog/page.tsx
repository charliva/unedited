import Image from "next/image";
import Link from "next/link";

const allPostsData = [
  {
    slug: "minimalist-case-study",
    title: "Case Study: Minimalist design",
    date: "2024-01-01",
    author: "Charlie VA",
    imagePath: "/blog-minimalist-case-study.png",
  }
];

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-12 text-center">My Blog</h1>
      <div className="space-y-8">
        {allPostsData.map((post) => (
          <article
            key={post.slug}
            className="border-b border-border pb-8 last:border-b-0"
          >
            <Link href={`/blog/${post.slug}`} className="group">
              <div className="mb-4">
                <Image
                  src={post.imagePath}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-1">By {post.author}</p>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
