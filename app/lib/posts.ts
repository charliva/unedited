import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { PostData } from "./types";
import rehypeSanitize from "rehype-sanitize";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import remarkRehype from 'remark-rehype'


const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData(): Promise<PostData[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        slug,
        imagePath: `/blog-${slug}.png`,
        ...(matterResult.data as {
          date: string;
          title: string;
          author: string;
        }),
      };
    })
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAllPostSlugs() {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.mdx$/, ""),
    },
  }));
}

export async function getPostData(
  slug: string
): Promise<PostData & { contentHtml: string }> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSanitize)
    .use(html, { sanitize: true })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    imagePath: `/blog-${slug}.png`,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; author: string }),
  };
}
