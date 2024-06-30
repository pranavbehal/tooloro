import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  PenLine,
  LineChart,
  SearchIcon,
  SettingsIcon,
  Paintbrush,
  ListChecks,
  Bot,
} from "lucide-react";

export function DealsHero() {
  const [toggles, setToggles] = useState({
    writing: false,
    management: false,
    marketing: false,
    design: false,
    ai: false,
    productivity: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderButton = (key, icon, label) => (
    <Button
      variant={toggles[key] ? "default" : "outline"}
      onClick={() => handleToggle(key)}
    >
      {icon}
      {label}
    </Button>
  );

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="container pt-16 pb-12 lg:pt-20 lg:pb-14">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Product Deals
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Find deals and discounts on software.
            </p>
            {/* <p className="mt-1 text-m text-muted-foreground pr-28 pl-28">
              Some of the links on this page may be affiliate links, which means
              we may receive a small commission, at no additional cost to you,
              if you make a purchase through one of those links.
            </p> */}
            <div className="mt-7 sm:mt-10 flex flex-wrap gap-2 justify-center">
              {renderButton(
                "writing",
                <PenLine className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Writing"
              )}
              {renderButton(
                "management",
                <SettingsIcon className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Management"
              )}
              {renderButton(
                "marketing",
                <LineChart className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Marketing"
              )}
              {renderButton(
                "design",
                <Paintbrush className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Design & Development"
              )}
              {renderButton(
                "ai",
                <Bot className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "AI"
              )}
              {renderButton(
                "productivity",
                <ListChecks className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Productivity & Collaboration"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
