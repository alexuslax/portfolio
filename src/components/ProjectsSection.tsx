import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

const projects = [
  {
    title: "Fitness Gym Membership Management System",
    image: "/gym.jpg",
    description:
      "A management platform for handling member registration, payment status, and attendance tracking for local gyms.",
    stack: ["HTML", "CSS", "JavaScript", "MySQL"],
    accent: "from-sky-400/75 to-cyan-300/75",
    projectUrl: "https://destura-gym.up.railway.app/login.php",
    demoUrl: "",
  },
  {
    title: "University Research and Development Services System",
    image: "/urds.jpg",
    description:
      "A portal for managing research project requests, faculty assignments, and lab/service tracking for university R&D operations.",
    stack: ["PHP", "JavaScript", "MySQL"],
    accent: "from-violet-400/75 to-fuchsia-300/75",
    projectUrl: "https://github.com/alexuslax/urds",
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
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            stack={project.stack}
            accent={project.accent}
            projectUrl={project.projectUrl}
            demoUrl={project.demoUrl || undefined}
            image={project.image}
            delay={index * 0.08}
          />
        ))}
      </div>
    </Section>
  );
}
