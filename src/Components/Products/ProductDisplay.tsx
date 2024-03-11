import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "../Home/ProductComponent";

const ProductDisplay = () => {

  const { ShowData } = useSelector((state) => state.products);
  
  return (
    <div className="py-10 my-10 px-11">
      <div className="py-5 grid grid-cols-4 gap-5">
        {
            ShowData.map((el,i) => {
                return(
                    <ProductComponent key={i} data={el}/>
                )
            } )
        }
      </div>
    </div>
  );
};

export default ProductDisplay;
