import { Nav } from "@/components/navigation/Nav";
import { Hero } from "@/components/sections/Hero";
import { ConnectedEcosystem } from "@/components/sections/ConnectedEcosystem";
import { Platform } from "@/components/sections/Platform";
import { BuiltForScale } from "@/components/sections/BuiltForScale";
import { Technology } from "@/components/sections/Technology";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ConnectedEcosystem />
        <Platform />
        <BuiltForScale />
        <Technology />
        <ClosingCTA />
      </main>
    </>
  );
}
