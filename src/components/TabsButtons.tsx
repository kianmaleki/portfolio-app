"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Container from "./Container";
import PortfolioItem from "./ProfileItem";

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
        <ToggleGroupItem
          value="portfolio"
          aria-label="Toggle Portfolio"
          className="bg-[#171F26] text-[#A3ABB2] p-8 text-sm sm:text-base hover:bg-[#171F26] transition-colors border-none data-[state=on]:rounded-2xl data-[state=on]:bg-[#0C151D] data-[state=on]:text-white"
        >
          Portfolio
        </ToggleGroupItem>
        <ToggleGroupItem
          value="skills"
          aria-label="Toggle Skills"
          className="bg-[#171F26] text-[#A3ABB2] p-8 text-sm sm:text-base hover:bg-[#171F26] transition-colors border-none data-[state=on]:rounded-2xl data-[state=on]:bg-[#0C151D] data-[state=on]:text-white"
        >
          Skills
        </ToggleGroupItem>
      </ToggleGroup>

      <div className="text-white mt-8 w-full">
        {selectedTab === "portfolio" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem imageSrc="/images/hover-overlay in card projects.svg" />
            <PortfolioItem imageSrc="/images/Group 4.svg" />
            <PortfolioItem imageSrc="/images/Group 5.svg" />
            <PortfolioItem imageSrc="/images/Group 6.svg" />
            <PortfolioItem imageSrc="/images/Group 7.svg" />
            <PortfolioItem imageSrc="/images/Group 8.svg" />
          </div>
        )}
        {selectedTab === "skills" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
          </div>
        )}
      </div>
    </Container>
  );
}
