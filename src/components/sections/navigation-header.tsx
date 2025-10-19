"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu as MenuIcon,
  MessageSquare,
  Gift,
  User,
  X,
  Gamepad2,
  ChevronDown,
  Coins,
  Droplets,
  Bomb,
  Cone,
} from "lucide-react";

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/coinflip", icon: <Coins className="w-5 h-5 transition duration-300" />, label: "Coinflip" },
    { href: "/plinko", icon: <Droplets className="w-5 h-5 transition duration-300 " />, label: "Plinko" },
    { href: "/mines", icon: <Bomb className="w-5 h-5 transition duration-300" />, label: "Mines" },
    { href: "/crossable", icon: <Cone className="w-5 h-5 transition duration-300" />, label: "Crossable", new: true },
    { href: "/bingo", icon: <div className="w-8 h-8 scale-[0.9]"></div>, label: "Bingo" },
  ];

  return (
    <>
      <header className="fixed z-[98] top-0 right-0 flex items-center w-full h-17 py-2.5 px-5 border-b border-border-divider bg-background-primary select-none">
        <div className="container mx-auto flex items-center justify-between gap-2 max-w-[1440px] lg:px-12 px-6">
          <div className="flex items-center gap-7">
            <div className="hidden min-[842px]:flex items-center gap-5">
              <div className="py-1.5 px-3 rounded-md bg-[#1d1b29] hover:bg-background-tertiary shadow-md text-white/80 hover:text-white fill-primary/80 hover:fill-primary cursor-pointer transition duration-150">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-5 h-5">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-base">Games</span>
                  <ChevronDown className="w-3 h-3 ml-0.5 fill-white transition duration-150" />
                </div>
              </div>
              <Link
                href="/rewards"
                className="relative flex items-center gap-2 opacity-80 hover:opacity-100 cursor-pointer transition duration-150"
              >
                <div className="flex items-center justify-center w-5 h-5">
                  <Gift className="w-[18px] h-[18px] fill-[#fff300] stroke-none" />
                </div>
                <span className="font-semibold text-base">Rewards</span>
              </Link>
            </div>
          </div>

          <div className="hidden min-[842px]:flex gap-2.5">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 w-[110px] bg-[#262334] text-white hover:bg-[#393952]/90 transition-colors">
              <span className="font-semibold">Login</span>
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 w-[110px] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <span className="font-semibold">Sign Up</span>
            </button>
          </div>

          <div className="min-[842px]:hidden">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 w-[110px] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <span className="font-semibold">Login</span>
            </button>
          </div>
        </div>
      </header>

      <div className="block min-[842px]:hidden fixed z-[98] bottom-0 left-0 w-full">
        <div className="flex w-full h-[68px] border-t border-[#2A2A35] bg-background-primary">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex-1 flex flex-col items-center justify-end gap-1.5 pb-2.5 cursor-pointer brightness-75 hover:brightness-100 transition"
          >
            <MenuIcon className="w-6 h-6 text-white" />
            <span className="text-xs text-white font-medium">Menu</span>
          </button>
          <div className="flex-1 flex flex-col items-center justify-end gap-1.5 pb-2.5 cursor-pointer brightness-75 hover:brightness-100 transition">
            <MessageSquare className="w-6 h-6 fill-white" />
            <span className="text-xs text-white font-medium">Chat</span>
          </div>
          <Link
            href="/rewards"
            className="flex-1 flex flex-col items-center justify-end gap-1.5 pb-2.5 cursor-pointer brightness-75 hover:brightness-100 transition"
          >
            <Gift className="w-6 h-6 fill-white" />
            <span className="text-xs text-white font-medium">Rewards</span>
          </Link>
          <div className="flex-1 flex flex-col items-center justify-end gap-1.5 pb-2.5 cursor-pointer brightness-75 hover:brightness-100 transition">
            <User className="w-6 h-6 fill-white" />
            <span className="text-xs text-white font-medium">Profile</span>
          </div>
        </div>
      </div>

      <div
        className={`fixed z-[97] inset-0 transition-all duration-500 ${
          isMenuOpen ? "top-0 pointer-events-auto" : "top-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 w-full h-full p-3 bg-background-secondary overflow-y-auto">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-5 h-10 cursor-pointer"
            >
              <X className="w-5 h-5 text-muted" />
            </button>
          </div>
          <div className="flex flex-col gap-1 p-2 rounded-md border border-border-divider/40 bg-background-secondary shadow-md">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <div className="relative flex items-center gap-1 h-11 rounded-md bg-[#1e1e26]/60 hover:bg-[#272733] text-primary fill-primary">
                  <div className="flex items-center justify-center w-10 h-10">
                    {item.icon}
                  </div>
                  <p className="font-semibold transition duration-300 text-white">{item.label}</p>
                  {item.new && (
                    <div className="absolute top-0 right-0 -translate-y-[1px] translate-x-0.5">
                      <div className="py-0.5 px-1.5 rounded-sm bg-destructive shadow-sm">
                        <p className="text-[10px] leading-[12px] font-semibold text-destructive-foreground">NEW</p>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1 p-2 rounded-md border border-border-divider/40 bg-background-secondary shadow-md">
            <Link href="/rewards">
              <div className="relative flex items-center gap-1 h-11 rounded-md bg-[#1e1e26]/60 hover:bg-[#272733] fill-primary">
                <div className="flex items-center justify-center w-10 h-10">
                  <Gift className="w-5 h-5 transition duration-300" />
                </div>
                <p className="font-semibold transition duration-300 text-white">Rewards</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationHeader;