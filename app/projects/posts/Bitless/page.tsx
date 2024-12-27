import Image from "next/image";

export default function Bitless() {
  return (
    <article className={`container mx-auto px-4 py-12 max-w-3xl`}>
      <section className="mb-8">
        <Image
          alt="Bitless homepage"
          src="/Bitless.png"
          width={1200}
          height={800}
          className="rounded-lg object-cover mb-8"
        />
        <h1 className="text-4xl font-semibold mb-4">Bitless</h1>
        <p className="text-muted-foreground">
          A dashboard for managing products and users data.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 mx-auto">Design and UX</h2>
        <p className="mb-4">
          When building a dashboard for managing data and users, the most
          important thing in my opinion is creating an easy to understand UI and
          a strong UX. This helps the administator to manage the data and users
          and prevent any mistakes. The design is made to be functional and
          purposeful.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 mx-auto">Tech stack</h2>
        <p className="mb-4">
          The dashboard is built using React, Next.JS, and Tailwind CSS, because
          of my long history with these technologies and of how reliable they
          are, this was an easy decision to make. The backend is built using
          Supabase and Node. This was my first time working with Supabase but my
          experience with it was great. It was easy to manage data with and the
          API is reliable and fast. The API is well-documented.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 mx-auto">
          Learning experience
        </h2>
        <p className="mb-4">
          This was my first real project where I had to code the thing myself. I
          learned a lot about how to manage data and how to create a good
          codebase. I also learned how to use TypeScript with other people
          reading it and how to manage large amounts of data. Overall, I learned
          a lot of useful things that contribute to my growth as a developer.
        </p>
      </section>
    </article>
  );
}
