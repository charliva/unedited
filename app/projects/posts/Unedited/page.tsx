import Image from "next/image";
export default function Unedited() {
  return (
    <article className={` container mx-auto px-4 py-12 max-w-3xl`}>
      <section className="mb-8">
        <Image
          alt="Unedited version 1"
          src="/Unedited.png"
          width={1200}
          height={800}
          className="rounded-lg object-cover mb-8"
        />
        <h1 className="text-4xl font-semibold mb-4">Unedited</h1>
        <p className="text-muted-foreground">
          My minimalist online portfolio
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stack</h2>
        <p className="mb-4">
          I built this portfolio using Next.js, React, and TypeScript. I wanted
          to create a portfolio that is easy to maintain and update. I also
          wanted to create a portfolio that is fast and reliable. Mainly with
          technologies that I'm already familiar with.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">UI/UX</h2>
        <p className="mb-4">
          The design is inspired by the simplicity of the web. Primarily
          minimalist design following the 10 principles of good design by Dieter
          Rams. This makes the portfolio easy to understand and update for
          future updates. This means I can easily update the design to be more
          modern when the design trends change.

        </p>
      </section>
    </article>
  );
}
