import React from "react";
import WorldMap from "../../Images/WorldMap.svg";

const CustomersIntro = () => {
  return (
    <div className="my-24 px-11 grid grid-cols-2 gap-10">
      <div>
        <p className="text-3xl font-medium leading-[3rem]">
          Customers from Over 50 countries <br></br> Around the World
        </p>
        <p className="mt-10 w-4/5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quod
          nisi magni expedita corporis enim, eveniet dolorem ipsa vitae
          perferendis autem, nesciunt soluta veniam tenetur temporibus.
          Veritatis non veniam repudiandae.
        </p>
      </div>
      <div>
        <img src={WorldMap} className="w-4/5 mx-auto" />
      </div>
    </div>
  );
};

export default CustomersIntro;
