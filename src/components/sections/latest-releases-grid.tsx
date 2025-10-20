import Image from "next/image";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface Game {
  name: string;
  href: string;
  imageSrc: string;
  isComingSoon?: boolean;
  isNew?: boolean;
}

const games: Game[] = [];

const LatestReleasesGrid = () => {
  return (
    <div className="@container relative flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Rocket className="w-6 h-6 text-primary" fill="currentColor" />
        <h1 className="text-xl font-medium text-text-primary !whitespace-pre-line">Coming Soon!</h1>
      </div>
      <div className="flex gap-2.5 pt-4 overflow-x-auto no-scrollbar">
        {games.map((game, index) =>
        <Link
          key={index}
          href={game.href}
          className={cn({ "opacity-60 pointer-events-none": game.isComingSoon })}>

            <div className="relative w-[150px] @lg:w-[170px] @5xl:w-[182px] max-w-full aspect-[0.75] rounded-lg bg-white/10 overflow-hidden hover:-translate-y-1.5 transition duration-300 select-none">
              {game.isNew &&
            <div className="absolute top-0 right-0 -translate-y-[1px] translate-x-0.5 z-10">
                  <div className="py-0.5 px-1.5 rounded-sm bg-red-500 shadow-sm">
                    <p className="text-[10px] leading-[12px] font-semibold text-white">
                      NEW
                    </p>
                  </div>
                </div>
            }
              <Image
              src={game.imageSrc}
              alt={game.name}
              width={182}
              height={243}
              className="w-full h-full object-cover" />

            </div>
          </Link>
        )}
      </div>
    </div>);

};

export default LatestReleasesGrid;