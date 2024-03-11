import React, { useEffect, useState } from "react";
import Header from "../Components/AboutUs/Header";
import AboutUsStart from "../Components/AboutUs/AboutUsStart";
import HowWeMake from "../Components/AboutUs/HowWeMake";
import WhatServiesWhatWeGive from "../Components/AboutUs/WhatServiesWhatWeGive";
import OurKeyPeople from "../Components/AboutUs/OurKeyPeople";
import Footer from "../Components/Footer";
import useFetchData from "../Api/useFetchData";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { AddDetailsData, AddingKeyPopleData } from "../features/keypeopleSlice";

const About = () => {
  const dispatch = useDispatch();

  const AboutUsData = useFetchData("keypeople");

  console.log("AboutUS");

  useEffect(() => {
    AboutUsData.error ? null : dispatch(AddingKeyPopleData(AboutUsData.data));
    AboutUsData.error ? null : dispatch(AddDetailsData(AboutUsData.data[0]));
  }, [AboutUsData.data]);

  const [AnimaitionComplete, setAnimaitionComplete] = useState(false);

  const AboutUsPage = () => {
    return (
      <div className="font-heading">
        <Header />
        <AboutUsStart />
        <HowWeMake />
        <WhatServiesWhatWeGive />
        <OurKeyPeople />
        <Footer />
      </div>
    );
  };

  return AboutUsData.error && AnimaitionComplete ? (
    <ErrorPage ErrorMessage={`${AboutUsData.error}`} />
  ) : AboutUsData.loading || !AnimaitionComplete ? (
    <Loading setAnimationComplete={setAnimaitionComplete} />
  ) : AnimaitionComplete ? (
    <AboutUsPage />
  ) : null;
  
};

export default About;
