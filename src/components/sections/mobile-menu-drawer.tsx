"use client";

import { X, Coins, Gift } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: "/coinflip", icon: Coins, text: "Coinflip", new: false, stroke: false },
];

const rewardsItem = {
  href: "/rewards",
  icon: Gift,
  text: "Rewards",
};

export default function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background-primary/95 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 flex flex-col gap-2 rounded-t-2xl bg-background-tertiary p-3 pb-[calc(68px+0.75rem)] shadow-lg transition-transform duration-500 ease-in-out",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-heading"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-1">
          <h2 id="menu-heading" className="text-xl font-semibold text-text-primary">
            Menu
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-5 h-10 cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-muted hover:text-text-primary transition-colors" />
          </button>
        </div>

        <div className="flex flex-col gap-1 p-2 rounded-lg border border-border/40 bg-background-tertiary shadow-md">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.text} onClick={onClose}>
              <div className="group relative flex items-center gap-1 h-11 rounded-md bg-background-secondary/60 hover:bg-background-secondary text-primary transition-colors duration-300">
                <div className="flex items-center justify-center w-10 h-10">
                  <item.icon
                    className="w-5 h-5 transition-colors duration-300"
                    fill={item.stroke ? "transparent" : "currentColor"}
                    strokeWidth={item.stroke ? 2 : 1}
                  />
                </div>
                <p className="font-semibold text-text-primary transition-colors duration-300">{item.text}</p>
                {item.new && (
                  <div className="absolute top-0 right-0 -translate-y-px translate-x-0.5">
                    <div className="py-0.5 px-1.5 rounded-sm bg-destructive shadow-sm">
                      <p className="text-[10px] leading-[12px] font-semibold text-destructive-foreground">NEW</p>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-1 p-2 rounded-lg border border-border/40 bg-background-tertiary shadow-md">
          <Link href={rewardsItem.href} onClick={onClose}>
            <div className="group relative flex items-center gap-1 h-11 rounded-md bg-background-secondary/60 hover:bg-background-secondary text-primary transition-colors duration-300">
              <div className="flex items-center justify-center w-10 h-10">
                <rewardsItem.icon
                  className="w-5 h-5 transition-colors duration-300"
                  fill="currentColor"
                  strokeWidth={1}
                />
              </div>
              <p className="font-semibold text-text-primary transition-colors duration-300">{rewardsItem.text}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}