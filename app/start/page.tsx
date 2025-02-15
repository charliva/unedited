import { Metadata } from "next";
import { ProjectConfigurator } from "../_components/projectConf"

export const metadata: Metadata = {
  title: "Start a new project",
  description: "Unedited - New project",
  keywords: ["Unedited", "Web developer", "App developer", "Web dev for hire"],
  icons: {
    icon: "favicon.ico",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-4xl font-semibold mb-12 tracking-tight">Start a project</h1>
        <ProjectConfigurator />
      </main>
    </div>
  )
}

