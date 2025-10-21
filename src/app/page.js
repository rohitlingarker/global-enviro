import Image from "next/image";
import Navbar from "../components/Navbar";
<<<<<<< HEAD
import Carousel from "@/components/Carousel";
import ServicesSection from "@/components/ServiceSection";  
import Footer from "@/components/Footer";
=======
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel.jsx";
import HeroSection from "@/components/HeroSection/HeroSection.jsx";

>>>>>>> 2174ea18caf5530f38084a1fce1d4bfd1dafde1d
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
<<<<<<< HEAD
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-300">
      <Navbar />
      <Carousel />
      <ServicesSection />
      <Footer />
=======
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-300 ">
      {/* <HeroCarousel slides={slides} /> */}
      {/* <HeroSection title={"Global enviro engineering"} 
      subtitle={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias magni, explicabo at beatae quos officia? Tenetur sunt minus eos magni."}
      imageSrc={"https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png"}

      /> */}
      
>>>>>>> 2174ea18caf5530f38084a1fce1d4bfd1dafde1d
    </main>
  );
}
