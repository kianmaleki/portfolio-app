"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Container from "./Container";
import PortfolioItem from "./ProfileItem";
import SkillCircle from "./SkillCircle";

export function TabsButtons() {
  const [selectedTab, setSelectedTab] = useState("portfolio");

  return (
    <Container className="flex-col items-center justify-center">
      <ToggleGroup
        variant="outline"
        type="single"
        value={selectedTab}
        onValueChange={(val) => val && setSelectedTab(val)}
        className="bg-[#171F26] flex flex-wrap justify-center gap-4 py-4 px-6 rounded-2xl w-full max-w-screen-md"
      >
        {[
          { label: "Portfolio", value: "portfolio" },
          { label: "Skills", value: "skills" },
        ].map((tab) => (
          <ToggleGroupItem
            key={tab.value}
            value={tab.value}
            aria-label={`Toggle ${tab.label}`}
            className="text-[#A3ABB2] px-10 py-8 text-sm sm:text-base border-none hover:cursor-pointer !rounded-2xl transition-all duration-200 ease-in-out hover:bg-[#1f2a32] hover:text-white data-[state=on]:bg-[#0C151D] data-[state=on]:text-white"
          >
            {tab.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="text-white mt-8 w-full">
        {selectedTab === "portfolio" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              imageSrc="/images/Group 3.svg"
              overlayTitle="Project 1"
              overlayDescription="Description for Project 1"
              overlayLink="#"
            />
            <PortfolioItem
              imageSrc="/images/Group 4.svg"
              overlayTitle="Project 2"
              overlayDescription="Description for Project 2"
              overlayLink="#"
            />
            <PortfolioItem
              imageSrc="/images/Group 5.svg"
              overlayTitle="Project 3"
              overlayDescription="Description for Project 3"
              overlayLink="#"
            />
            <PortfolioItem
              imageSrc="/images/Group 6.svg"
              overlayTitle="Project 4"
              overlayDescription="Description for Project 4"
              overlayLink="#"
            />
            <PortfolioItem
              imageSrc="/images/Group 7.svg"
              overlayTitle="Project 5"
              overlayDescription="Description for Project 5"
              overlayLink="#"
            />
            <PortfolioItem
              imageSrc="/images/Group 8.svg"
              overlayTitle="Project 6"
              overlayDescription="Description for Project 6"
              overlayLink="#"
            />
          </div>
        )}
        {selectedTab === "skills" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <SkillCircle label="React" percentage={90} />
            <SkillCircle label="TypeScript" percentage={85} />
            <SkillCircle label="Next.js" percentage={80} />
            <SkillCircle label="Tailwind CSS" percentage={75} />
            <SkillCircle label="Node.js" percentage={70} />
            <SkillCircle label="Figma" percentage={60} />
          </div>
        )}
      </div>
    </Container>
  );
}
