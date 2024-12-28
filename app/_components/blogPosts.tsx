"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { PostData } from '../lib/types';

export default function PostList({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <div className="container mx-auto max-w-4xl">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Blog
      </motion.h1>
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {allPostsData.map(({ slug, date, title, author, imagePath }, index) => (
          <PostPreview key={slug} post={{ slug, date, title, author, imagePath }} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

function PostPreview({ post, index }: { post: PostData; index: number }) {
  return (
    <motion.article 
      className="border-b border-border pb-8 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group">
        <h2 className="text-2xl font-semibold mb-2 group-hover:dark:  text-gray-300 transition-colors">
          {post.title}
        </h2>
        <p className="text-muted-foreground font-semibold mb-1">By {post.author}</p>
        <p className="text-sm text-muted-foreground font-semibold">{post.date}</p>
      </Link>
    </motion.article>
  );
}
