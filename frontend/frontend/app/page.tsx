import Header from "@/components/Header";
import Hero from "@/components/Landing/Hero";
import Section from "@/components/Landing/Section";
import SectionWorld from "@/components/Landing/SectionWorld";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-full bg-white overflow-hidden">
        <div className="absolute left-0 top-[118px] w-full h-[1895px] pointer-events-none z-10 overflow-hidden">
          <img
            src="/images/shape.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain"
          />
        </div>

        <Hero />
        <Section />
        <SectionWorld />
      </main>

      
    </>
  );
}