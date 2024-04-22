import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center">
      <h1>HOME PAGE</h1>
      <Button variant='destructive'>Test</Button>
    </main>
  );
}
