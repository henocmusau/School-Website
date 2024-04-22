import Image from "next/image";
import { Button } from "@/components/ui/button"
import Hero from "@/components/Hero/Hero";
import Other from "@/components/Other";


export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center">
      <Hero />
      <Other />
    </main>
  );
}
