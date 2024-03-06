import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Components/Home/Header";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import OurExperiences from "../Components/Home/OurExperiences";
import HomeCatagories from "../Components/Home/HomeCatagories";
import BestSeller from "../Components/Home/BestSeller";
import Coz from "../Components/Home/Coz";
import Review from "../Components/Home/Review";
import Footer from "../Components/Footer";
import { RootState } from "@reduxjs/toolkit/query";
import { BestSellingAdding, ReviewAdding } from "../features/homeSlice";
import Loading from "./Loading";
import useFetchData from "../Api/useFetchData";
import ErrorPage from "./ErrorPage";
const Home = () => {
  const dispatch = useDispatch();

  const ReviewData = useFetchData("Reviews");
  const BestSelling = useFetchData("BestSeller");

  useEffect(() => {
    ReviewData.error ? null : dispatch(ReviewAdding(ReviewData.data));
  }, [ReviewData.data]);

  useEffect(() => {
    BestSelling.error ? null : dispatch(BestSellingAdding(BestSelling.data));
  }, [BestSelling.data]);

  const HomePage = () => {
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

  return ReviewData.error || BestSelling.error ? (
    <ErrorPage ErrorMessage={`${ReviewData.error} ${BestSelling.error}`} />
  ) : ReviewData.loading ? (
    <Loading />
  ) : (
    <HomePage />
  );
};

export default Home;
