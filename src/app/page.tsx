import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-20 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="mx-auto mb-8 w-full max-w-6xl rounded-2xl border border-zinc-200/60 bg-white/65 px-4 py-5 text-center text-sm text-zinc-600 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Stephanie Drew F. Destura. All rights reserved.
      </footer>
    </div>
  );
}
