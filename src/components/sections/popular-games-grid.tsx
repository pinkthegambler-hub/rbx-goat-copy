import Image from "next/image";
import Link from "next/link";

const games = [];

const PopularGamesGrid = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl text-primary !border-transparent !whitespace-pre-line"></span>
        <h1 className="text-2xl font-bold text-text-primary">
          Games
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {games.map((game, index) =>
        <Link
          key={`${game.name}-${index}`}
          href={game.href}
          className={
          game.isComingSoon ? "pointer-events-none opacity-60" : ""
          }
          aria-disabled={game.isComingSoon}
          tabIndex={game.isComingSoon ? -1 : 0}>

            <div className="group relative aspect-video overflow-hidden rounded-lg bg-background-secondary transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20">
              <Image
              src={game.imgSrc}
              alt={game.name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover" />

            </div>
          </Link>
        )}
      </div>
    </section>);

};

export default PopularGamesGrid;