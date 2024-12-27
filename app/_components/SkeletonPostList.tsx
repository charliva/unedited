// components/SkeletonBlogPost.tsx
"use client"
import { Rubik_Mono_One } from 'next/font/google';

const rubik = Rubik_Mono_One({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: "400"
});

export default function SkeletonBlogPost() {
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <article className="mt-8">
        <h1 className={`${rubik.className} text-3xl font-bold mb-4 text-foreground`}>
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </h1>
        <div className="text-muted-foreground mb-8">
          <p>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </p>
          <p>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </p>
        </div>
        <div className="mb-8">
          <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"></div>
        </div>
        <div 
          className="prose dark:prose-invert max-w-none"
        >
          <div className="space-y-4">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index}>
                <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
