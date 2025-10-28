"use client";
import Overview from "@/components/about/Overview";
import AboutBanner from "@/components/About/AboutBanner";
import Certifications from "@/components/about/Certifications";
import OurJourney from "@/components/about/OurJourney";
import OurInfrastructure from "@/components/About/OurInfrastructure";

export default function AboutPage() {
  return (
    <main>
      <AboutBanner/>
      <Overview />
      <OurInfrastructure />
      <Certifications />
      <OurJourney />
    </main>
  );
}
