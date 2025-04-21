import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Phone from "@/components/main/Phone";
import Project from "@/components/main/Project";
import Skills from "@/components/main/Skills";
import BacktoTop from "@/components/sub/BacktoTop";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Phone />
        <Skills />
        <Encryption />
        <Project />
        <BacktoTop />
      </div>
    </main>
  );
}
