"use client";
import Overview from "@/components/about/Overview";
import Certifications from "@/components/about/Certifications";
import OurJourney from "@/components/about/OurJourney";
import OurInfrastructure from "@/components/About/OurInfrastructure";

export default function AboutPage() {
  return (
    <main>
      <Overview />
      <OurInfrastructure />
      <Certifications />
      <OurJourney />
    </main>
  );
}
