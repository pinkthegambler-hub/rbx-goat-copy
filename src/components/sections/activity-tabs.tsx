"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, PauseCircle, Star } from "lucide-react";

type ActivityData = {
  game: string;
  user: string;
  amount: number;
  multiplier: number;
  payout: number;
};

const mockData: ActivityData[] = [
  { game: "Crossable", user: "GoatedUser", amount: 10, multiplier: 9.9, payout: 99 },
  { game: "Mines", user: "SuperNova", amount: 200, multiplier: 2.38, payout: 476 },
  { game: "Crossable", user: "WinnerTakeAll", amount: 50, multiplier: 1.98, payout: 99 },
  { game: "Plinko", user: "ShadowStrike", amount: 15.5, multiplier: 5, payout: 77.5 },
  { game: "Coinflip", user: "MysticPlayer", amount: 1000, multiplier: 1.98, payout: 1980 },
  { game: "Bingo", user: "LuckyCharm", amount: 5, multiplier: 20, payout: 100 },
  { game: "Mines", user: "AceOfSpades", amount: 75, multiplier: 5.68, payout: 426 },
  { game: "Crossable", user: "TheGambler", amount: 25, multiplier: 3.96, payout: 99 },
  { game: "Plinko", user: "RiskTaker", amount: 30, multiplier: 10, payout: 300 },
  { game: "Coinflip", user: "BetMaster", amount: 5000, multiplier: 1.98, payout: 9900 },
  { game: "Crossable", user: "GoatedUser", amount: 10, multiplier: 9.9, payout: 99 },
  { game: "Mines", user: "SuperNova", amount: 200, multiplier: 2.38, payout: 476 },
  { game: "Crossable", user: "WinnerTakeAll", amount: 50, multiplier: 1.98, payout: 99 },
  { game: "Plinko", user: "ShadowStrike", amount: 15.5, multiplier: 5, payout: 77.5 },
  { game: "Coinflip", user: "MysticPlayer", amount: 1000, multiplier: 1.98, payout: 1980 },
];

const ActivityTabs = () => {
  const [activeTab, setActiveTab] = useState("Live Games");
  const tabs = ["Live Games", "High Rollers", "Lucky Wins"];

  return (
    <div className="flex flex-col rounded-lg bg-background-secondary">
      <div className="flex items-center gap-2 p-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ease-in-out
              ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-background-primary text-text-secondary hover:bg-background-tertiary hover:text-text-primary"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-grow">
        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1.3fr)] gap-4 px-4 py-2">
          <span className="text-xs font-semibold uppercase text-text-secondary">Game</span>
          <span className="text-xs font-semibold uppercase text-text-secondary">User</span>
          <span className="text-xs font-semibold uppercase text-text-secondary text-right">Amount</span>
          <span className="text-xs font-semibold uppercase text-text-secondary text-right">Multiplier</span>
          <span className="text-xs font-semibold uppercase text-text-secondary text-right">Payout</span>
        </div>
        <div className="h-[440px] overflow-y-auto">
          {mockData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1.3fr)] items-center gap-4 px-4 py-3 border-t border-border-divider animate-in fade-in duration-300"
              style={{ animationDelay: `${index * 30}ms`, animationFillMode: 'backwards' }}
            >
              <span className="font-semibold text-sm text-text-primary truncate">{row.game}</span>
              <span className="text-sm text-text-primary hover:underline cursor-pointer truncate">{row.user}</span>
              <div className="flex items-center justify-end gap-1 font-semibold text-sm text-text-primary">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d1fff507-24f8-47ae-bac1-f245a392a1ca-rbxgoat-com/assets/images/next-973818-currency.png?"
                  alt="Currency"
                  width={16}
                  height={16}
                />
                <span>{row.amount.toLocaleString("en-US")}</span>
              </div>
              <span className="font-semibold text-sm text-text-secondary text-right">{row.multiplier.toFixed(2)}x</span>
              <div className="flex items-center justify-end gap-1 font-semibold text-sm text-accent-primary">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d1fff507-24f8-47ae-bac1-f245a392a1ca-rbxgoat-com/assets/images/next-973818-currency.png?"
                  alt="Currency"
                  width={16}
                  height={16}
                />
                <span>{row.payout.toLocaleString("en-US")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between p-3 border-t border-border-divider text-text-secondary">
        <button className="flex items-center gap-2 text-xs font-semibold hover:text-text-primary transition-colors">
          <Globe className="h-4 w-4" />
          <span>English</span>
        </button>
        <div className="flex items-center gap-2 text-xs font-semibold">
          <PauseCircle className="h-4 w-4 text-accent-primary" />
          <span>AUTO-SCROLL PAUSED</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityTabs;