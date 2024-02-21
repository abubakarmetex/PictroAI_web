import React from "react";
import Header from "../../components/Header/Header";
import SearchSection from "../../components/SearchSection/SearchSection";
import AIToolsSection from "../../components/AIToolsSection/AIToolsSection";
import VideoSection from "../../components/Dashboard/VideoSection/VideoSection";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/CustomSlider";
import Slider2 from "../../components/Slider/CustomSlider2";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div>
        <SearchSection />
        <div className="">
          <VideoSection />
        </div>

        <div className="mt-3">
          <AIToolsSection />
        </div>

        <div className="mt-3">
          <Slider />
        </div>
        <div className="mt-3">
          <Slider2 />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
