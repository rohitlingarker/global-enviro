import Image from "next/image";
import {Navbar} from "../components/Navbar";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-300">
      <Navbar />
      <Carousel />
    </main>
  );
}
