import React from "react";
import Wrapper from "./components/Wrapper";
import HeroSection from "./sections/HeroSection";
import Categories from "./sections/Categories";
import FeaturingPegasus from "./sections/FeaturingPegasus";
import ClassicSpotlights from "./sections/ClassicSpotlights";
import Featured from "./sections/Featured";
import Footer from "./sections/Footer";
import Women from "./sections/Women";

const App = () => {
  return (
    <Wrapper>
      <HeroSection />
      <FeaturingPegasus />
      <Categories />
      <Featured />
      <Women />
      <ClassicSpotlights />
      <Footer />
    </Wrapper>
  );
};

export default App;
