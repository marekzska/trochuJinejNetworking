import { ComingNetworkings } from "./components/ComingNetworkings";
import { DifferentNetworking } from "./components/DifferentNetworking";
import { Footer } from "./components/Footer";
import { HeroTitle } from "./components/HeroTitle";
import { Instagram } from "./components/Instagram";
import { OurVision } from "./components/OurVision";
import { VideoSection } from "./components/VideoSection";
import { WhatToExpect } from "./components/WhatToExpect";

export default function Home() {
  return (
    <div className="w-full">
      <HeroTitle />
      <VideoSection />
      <WhatToExpect />
      <div className="grid grid-rows-2">
        <OurVision />
        <DifferentNetworking />
      </div>
      <ComingNetworkings />
      <Instagram />
      <Footer />
    </div>
  );
}
