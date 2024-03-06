import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const HeadCustomerReview = () => {
  return (
    <div className="my-24 px-11 grid grid-cols-2 gap-10">
      <div>
        <p className="text-3xl font-medium leading-[3rem]">
          "This company provides top-notch, all-in-one furniture services to
          ensure utmost satisfaction"
        </p>
        <p className="font-bold text-xl mt-3">Stevin Jones</p>
        <p className="font-medium">CEO of Jones Technologies Co Ltd.</p>


        <div className="w-4/5">
          <RiDoubleQuotesL className="text-4xl mt-10" />
          <p className=" my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            labore tempora, earum ipsam cumque sed, fugit quam provident quaerat
            consequatur eius ducimus rerum velit deleniti quibusdam architecto
            fuga assumenda laborum!
          </p>
          <RiDoubleQuotesR className="text-4xl ms-auto" />
            <p className="font-medium text-center mt-3">2023 January 24</p>

        </div>
      </div>
      <div>
        <img
          className="w-4/5 mx-auto max-h-[500px] object-cover object-top"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default HeadCustomerReview;
