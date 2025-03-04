import { CanvasRevealEffectDemo } from "@/components";
import { products } from "@/components/Home/Home";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {/* Backgrounds */}
      <HeroParallax products={products}/>
      <CanvasRevealEffectDemo/>
      </p>
    </div>
    </div>
  );
}
