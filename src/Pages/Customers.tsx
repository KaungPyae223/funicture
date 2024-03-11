import React, { useEffect, useState } from "react";
import Header from "../Components/Customers/Header";
import CustomersIntro from "../Components/Customers/CustomersIntro";
import TotalCustomers from "../Components/Customers/TotalCustomers";
import HeadCustomerReview from "../Components/Customers/HeadCustomerReview";
import Review from "../Components/Home/Review";
import Footer from "../Components/Footer";
import useFetchData from "../Api/useFetchData";
import { useDispatch } from "react-redux";
import { ReviewAdding } from "../features/homeSlice";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

const Customers = () => {
  const ReviewData = useFetchData("Reviews");
  const dispatch = useDispatch();

  useEffect(() => {
    ReviewData.error ? null : dispatch(ReviewAdding(ReviewData.data));
  }, [ReviewData.data]);

  const [AnimaitionComplete, setAnimaitionComplete] = useState(false);

  const CustomerPage = () => {
    return (
      <div>
        <Header />
        <CustomersIntro />
        <TotalCustomers />
        <HeadCustomerReview />
        <Review />
        <Footer />
      </div>
    );
  };

  return ReviewData.error && AnimaitionComplete ? (
    <ErrorPage ErrorMessage={`${ReviewData.error}`} />
  ) : ReviewData.loading || !AnimaitionComplete ? (
    <Loading setAnimationComplete={setAnimaitionComplete} />
  ) : AnimaitionComplete ? (
    <CustomerPage />
  ) : null;
};

export default Customers;
