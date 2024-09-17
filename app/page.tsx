import Hero from "./components/Hero";
import SkillMatrix from "./components/SkillMatrix";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <div className="container max-w-[1280px] mx-auto">
        <Hero />
        <SkillMatrix />
        <Projects />
      </div>
    </>
  );
}
