"use client";

import { useState } from "react";
import { aboutTabs } from "@/data/aboutData";

export default function AboutTabs() {
  const [activeId, setActiveId] = useState(aboutTabs[1].id);
  const activeTab = aboutTabs.find((tab) => tab.id === activeId) ?? aboutTabs[1];

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div
          role="tablist"
          className="tabs tabs-border min-w-max gap-0.5 border-b border-white/10 sm:gap-1"
        >
          {aboutTabs.map((tab) => {
            const isActive = tab.id === activeId;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={[
                  "tab h-auto min-h-0 px-2.5 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors duration-300 sm:px-3 sm:py-3 sm:text-sm",
                  isActive
                    ? "tab-active text-[#00eeff]!--tab-border-color:#00eeff]"
                    : "text-white hover:text-[#00eeff]",
                ].join(" ")}
                onClick={() => setActiveId(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        aria-label={activeTab.label}
        className="mt-6 space-y-4 sm:mt-8 sm:space-y-5"
      >
        <h3 className="text-base font-semibold text-[#00eeff] sm:text-lg md:text-xl">
          {activeTab.title}
        </h3>
        {activeTab.content.map((paragraph) => (
          <p
            key={paragraph}
            className="text-sm leading-7 text-white/85 sm:text-[15px] sm:leading-8"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
