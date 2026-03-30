import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

const projects = [
  {
    title: "Gym Membership Management System",
    description:
      "A management platform for handling member registration, payment status, and attendance tracking for local gyms.",
    stack: ["HTML", "CSS", "JavaScript", "MySQL"],
    accent: "from-sky-400/75 to-cyan-300/75",
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    title: "Movie Watchlist App",
    description:
      "A responsive app to search movies, save personal watchlists, and track watched titles with a clean dashboard UI.",
    stack: ["JavaScript", "Tailwind", "API Integration"],
    accent: "from-indigo-400/75 to-blue-300/75",
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    title: "POS System",
    description:
      "A point-of-sale system for small businesses with product records, real-time billing, and transaction history.",
    stack: ["Python", "MySQL", "UI Design"],
    accent: "from-cyan-400/75 to-emerald-300/75",
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
];

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected works focused on practical problem-solving and user-centered design."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            stack={project.stack}
            accent={project.accent}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl || undefined}
          />
        ))}
      </div>
    </Section>
  );
}
