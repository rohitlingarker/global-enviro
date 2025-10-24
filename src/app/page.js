import AboutUs from "@/components/AboutUs";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
// Updated import path:

import ServicesSection from "@/components/ServiceSection";
import Project from "@/components/Project";
import About from "@/components/About";

export default function Home() {
  const slides = [
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
      title: "Slide 1",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laboriosam animi molestias doloremque sapiente doloribus velit nisi necessitatibus modi.",
      buttonText: "Button Text 1",
      buttonLink: "#",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
      title: "Slide 2",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laboriosam animi molestias doloremque sapiente doloribus velit nisi necessitatibus modi.",
      buttonText: "Button Text 2",
      buttonLink: "#",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
      title: "Slide 3",
      subtitle: "Subtitle 3",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-300">
       
      <HeroCarousel slides={slides} interval={2000} pauseOnHover={false} pauseOnBtnHover={true} />
      {/* <AboutUs />  */}
      <About />
      <ServicesSection />
      <Project/>
    </main>
  );
}