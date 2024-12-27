import HeroSection from "./_components/hero-section";
import { ServiceCard } from "./_components/homepageSections";
import { ProjectCard } from "./_components/projectCard";
import { BlogCard } from "./_components/blogSection";

const posts = [
  {
    title: "Case Study: Minimalist Design",
    imagePath: "/blog-minimalist-case-study.png",
    description:
      "Exploring the origins, benefits, and principles of minimalist design",
    date: "December 25th 2024",
    blogUrl: "/blog/minimalist-case-study",
  },
];

const projects = [
  {
    title: "Unedited v2",
    description: "A minimal portfolio built with Next.js and TailwindCSS",
    imagePath: "/Unedited.png",
    projectUrl: "/projects/posts/Unedited",
  },
  {
    title: "Bitless Dashboard",
    description: "Admin dashboard for managing products and users",
    imagePath: "/Bitless.png",
    projectUrl: "/projects/posts/Bitless",
  },
];

const services = [
  {
    iconType: "web" as const,
    title: "Web Development",
    description:
      "Creating responsive and modern web applications with React and Next.js",
  },
  {
    iconType: "mobile" as const,
    title: "iOS Development",
    description:
      "Building native iOS applications using Swift and modern frameworks",
  },
  {
    iconType: "backend" as const,
    title: "Backend Solutions",
    description:
      "Developing scalable backend services with Golang and cloud technologies",
  },
  {
    iconType: "palette" as const,
    title: "UI/UX Design",
    description:
      "Designing user interfaces that are intuitive and visually appealing",
  },
  {
    iconType: "cms" as const,
    title: "CMS Development",
    description: "Creating custom CMS for managing content with Sanity",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <HeroSection />
      </div>
      <div className="flex items-center justify-center min-h-[50vh] py-20">
        <section className="max-w-6xl w-full px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center min-h-[50vh] py-20">
        <section className="max-w-6xl w-full px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center min-h-[50vh] py-20">
        <section className="max-w-6xl w-full px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
