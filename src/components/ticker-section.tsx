import React from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import NumberTicker from "./magicui/number-ticker";

const AnimatedTickers = () => {
  return (
    <div className="flex gap-12 items-center justify-center my-12">
      <div className="relative flex flex-col gap-3 h-full w-full max-w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <div className="text-5xl font-bold">
          <NumberTicker value={50} />+
        </div>
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Projects
        </p>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[250%] skew-y-12"
          )}
        />
      </div>
      <div className="relative flex flex-col gap-3 h-full w-full max-w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <div className="text-5xl font-bold">
          <NumberTicker value={100} />
          k+
        </div>
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Site Visits
        </p>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      <div className="relative flex flex-col gap-3 h-full w-full max-w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <div className="text-5xl font-bold">
          <NumberTicker value={5} />+
        </div>
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Countries
        </p>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[250%] skew-y-12"
          )}
        />
      </div>
    </div>
  );
};

export default AnimatedTickers;
