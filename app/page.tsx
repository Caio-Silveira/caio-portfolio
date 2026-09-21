"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import FAQ from "@/components/sections/FAQ";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <div className="relative bg-[#0D100F] overflow-hidden text-[#F0E9DC]">
            <div className="relative">
              <Skills />
              <Projects />
              <FAQ />
            </div>
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
