import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsRow from "@/components/ProjectsRow";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "West Fraser Developments",
  description:
    "West Fraser Developments is a full-service real estate development and construction firm delivering residential, commercial, and mixed-use projects across British Columbia.",
  keywords: [
    "real estate development",
    "construction",
    "general contractor",
    "Langley development",
    "Vancouver developer",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsRow />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
