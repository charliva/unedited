import { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import ScrollAnimation from "@/components/scrollAnimation";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Case Study: Minimalist Design",
  description:
    "Exploring the origins, benefits, and principles of minimalist design",
};

export default function MinimalistDesignCaseStudy() {
  return (
    <article
      className={`${jetBrainsMono.className} container mx-auto px-4 py-12 max-w-3xl`}
    >
      <ScrollAnimation />
      <div className="relative aspect-video mb-8">
        <Image
          src="/blog-minimalist-case-study.png"
          alt="Minimalist Design"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-8">
        Case Study: Minimalist Design
      </h1>
      <p className="text-lg mb-12">
        Since 2020, minimalist design has become increasingly popular. Let's
        explore what makes it so compelling, its origins, and why it continues
        to dominate modern design.
      </p>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What's minimalistic design?
        </h2>
        <p className="leading-relaxed mb-6">
          Minimalist design is a design focused on its sole purpose, without
          extreme or expressive colors or components. It embraces the principle
          of having only what is required and no more, thus forcing the creator 
          to make very concious decisions about design choices. It's about 
          designing the essential elements to perfection, limiting the amount of 
          unneccessary distractions.
        </p>
      </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">
        Where did the style originate?
      </h2>
      <p className="leading-relaxed mb-6">
        The style originated from the 1960 Bauhaus style and the Dutch 'De
        Stijl' movement, emphasizing simplicity and functionality. One of the
        most influential minimalist designers is Dieter Rams, who created the
        10 principles of good design. His work at Braun and Vitsoe had a great
        impact on the world of minimalist design and continues to influence
        modern design thinking.
      </p>
      <p className="leading-relaxed mb-6">
        Dieter rams' 10 principles of good design are:
      </p>
      <ol className="list-decimal list-inside space-y-2 pl-4">
        <li>Good design is innovative</li>
        <li>Good design makes a product useful</li>
        <li>Good design is aesthetic</li>
        <li>Good design makes a product understandable</li>
        <li>Good design is unobtrusive</li>
        <li>Good design is honest</li>
        <li>Good design is long-lasting</li>
        <li>Good design is thorough down to the last detail</li>
        <li>Good design is environmentally friendly</li>
        <li>Good design is as little design as possible</li>
      </ol>
    </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What makes minimalist design special?
        </h2>
        <blockquote className="border-l-4 border-gray-400 dark:border-gray-800 pl-4 my-6 italic">
          "Perfection is achieved, not when there is nothing more to add, but
          when there is nothing left to take away."
          <footer className="text-sm mt-2">— Antoine de Saint-Exupery</footer>
        </blockquote>
        <p className="leading-relaxed">
          Minimalism creates a sense of timelessness by using neutral colors and
          focusing on essential elements. Its monochromatic color scheme with
          fewer accents distinguishes it from other design styles, pushing
          forward the main message while making the user's experience meaningful
          and easy-going.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          The benefits of minimalist design
        </h2>
        <p className="leading-relaxed mb-6">
            Minimalist design has many benefits, both for the user and the creator of the design.
            Mainly, it helps to create a more focused and less cluttered design, which can lead 
            to a better user experience. It also helps to create a more timeless design, as minimalist 
            designs tend to age better than more complex designs. But also the use of nerd fonts, 
            like JetBrains Mono, can help the user experience be more fluent and make the content 
            easier to read.
        </p>
      </section>
    </article>
  );
}
