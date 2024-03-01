import React from "react";
import Header from "../Components/Home/Header";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import OurExperiences from "../Components/Home/OurExperiences";
import HomeCatagories from "../Components/Home/HomeCatagories";
import BestSeller from "../Components/Home/BestSeller";
import Coz from "../Components/Home/Coz";
import Review from "../Components/Home/Review";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <OurExperiences />
      <HomeCatagories />
      <BestSeller />
      <Coz />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
