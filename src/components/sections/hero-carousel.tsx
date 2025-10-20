"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious } from
"@/components/ui/carousel";

const slides = [
{
  href: "https://discord.gg/MT9b3rK7",
  src: "",
  alt: "Discord community invitation banner"
}];


export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    const onResize = () => setCount(api.scrollSnapList().length);

    api.on("select", onSelect);
    api.on("resize", onResize);

    // Initial setup
    onSelect();
    onResize();

    return () => {
      api.off("select", onSelect);
      api.off("resize", onResize);
    };
  }, [api]);

  return (
    <div className="relative @container group" role="region">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          loop: true,
          align: "start"
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>

        <CarouselContent className="-ml-4">
          {slides.map((slide, index) =>
          <CarouselItem
            key={index}
            className="min-w-0 shrink-0 grow-0 basis-full pl-4 lg:basis-1/2 2xl:basis-1/3">

              <Link href={slide.href} target={slide.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="!w-[99.9%] !h-9">
                <div className="h-[200px] sm:h-[256px] lg:h-[224px] rounded-lg bg-white/10 overflow-hidden transition-all duration-300 ease-in-out hover:brightness-110 !w-[334px] 2xl:!h-full">
                  <div className="flex items-center justify-center min-w-full aspect-[1.7625] overflow-hidden !w-full !h-[223px]">
                    <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={423}
                    height={240}
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 !block !bg-none !bg-cover !bg-center !bg-none !bg-cover !bg-center !bg-none !bg-cover !bg-center !bg-slate-800 !grid !w-[328px] !h-[216px] !max-w-[328px]"
                    priority={index < 3} />

                  </div>
                </div>
              </Link>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Carousel>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) =>
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
          index === current ? "w-6 bg-primary" : "w-2 bg-white/50 hover:bg-white/75"}`
          } />

        )}
      </div>
    </div>);

}