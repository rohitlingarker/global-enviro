"use client";
import Overview from "@/components/about/Overview";
import AboutBanner from "@/components/About/AboutBanner";
import Certifications from "@/components/about/Certifications";
import OurJourney from "@/components/about/OurJourney";
import OurInfrastructure from "@/components/About/OurInfrastructure";
import MissionVision from "@/components/About/MissionVision";
import Management from "@/components/About/Management";

export default function AboutPage() {
  return (
    <main>
      <AboutBanner/>
      <Overview />
      <MissionVision/>
      <Management/>
      <OurInfrastructure />
      <Certifications />
      <OurJourney />
    </main>
  );
}
