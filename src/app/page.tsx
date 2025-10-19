import NavigationHeader from "@/components/sections/navigation-header";
import HeroCarousel from "@/components/sections/hero-carousel";
import PopularGamesGrid from "@/components/sections/popular-games-grid";
import LatestReleasesGrid from "@/components/sections/latest-releases-grid";
import ActivityTabs from "@/components/sections/activity-tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary">
      <NavigationHeader />
      
      <main className="pt-[68px] pb-24 md:pb-8">
        <div className="container mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-col gap-12 py-8">
            <HeroCarousel />
            
            <PopularGamesGrid />
            
            <LatestReleasesGrid />
            
            <div className="w-full">
              <ActivityTabs />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}