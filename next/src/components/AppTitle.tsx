import React from "react";

import BannerBadge from "./BannerBadge";

const AppTitle = () => {
  return (
    <div id="title" className="relative flex flex-col items-center">
      <div className="flex flex-row items-start">
        <span
          className="text-4xl font-bold text-slate-12 xs:text-5xl sm:text-7xl"
          style={{
            textShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Arsalion
          </span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI
          </span>
        </span>
      </div>
      <div className="mt-3 text-center font-mono text-[0.7em] font-bold text-white">
        <div>
          <BannerBadge className="md:hidden">
            Free AI Agent powered by Google Gemini & LocalAI
          </BannerBadge>
        </div>
        <div className="hidden md:flex">
          <BannerBadge>Free AI Agent powered by Google Gemini, Groq, LocalAI & SearXNG</BannerBadge>
        </div>
      </div>
    </div>
  );
};

export default AppTitle;
