import React from 'react';
import Header from '../Components/Customers/Header';
import CustomersIntro from '../Components/Customers/CustomersIntro';
import TotalCustomers from '../Components/Customers/TotalCustomers';
import HeadCustomerReview from '../Components/Customers/HeadCustomerReview';
import Review from '../Components/Home/Review';
import Footer from '../Components/Footer';

const Customers = () => {
    return (
        <div>
            <Header/>
            <CustomersIntro/>
            <TotalCustomers/>
            <HeadCustomerReview/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default Customers;