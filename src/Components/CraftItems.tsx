import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  IncreaseQty,
  ReduceQty,
  RemoveCraftItem,
} from "../features/craftSlice";

const CraftItems = ({ data, index }) => {

  const dispatch = useDispatch();
  const [qty, setqty] = useState(data.Qty);

  useEffect(()=>{
    setqty(data.Qty);
  },[data.Qty])

  const increament = () => {
    setqty((pre) => pre + 1);
    dispatch(
      IncreaseQty({ id: data.id, price: data.price, quantity: qty + 1 })
    );
  };
  const decreament = () => {
    if (qty != 1) {
      setqty((pre) => pre - 1);
      dispatch(
        ReduceQty({ id: data.id, price: data.price, quantity: qty - 1 })
      );
    }
  };
  const RemoveCraft = () => {
    const CraftItem = {
      id: data.id,
      price: data.price,
      Qty: qty,
    };
    dispatch(RemoveCraftItem(CraftItem));
  };

  return (
    <div className="CraftContainer flex overflow-hidden flex-row justify-start gap-3 pb-5 mt-5 border-b border-b-gray-300 relative">
      <img className="w-24 h-24" src={data.img}></img>
      <div className="w-full">
        <p className="text-xl font-medium line-clamp-1">{data.name}</p>
        <p>${data.price}</p>
        <div className="mt-3 flex justify-between items-start ">
          <div>
            <p className="text-xs text-blue-gray-700">Sub Total</p>
            <p className="text-xl font-medium text-green-500 mt-1.5">
              ${data.price * qty}
            </p>
          </div>

          <div>
            <p className=" text-blue-gray-700 text-xs">Quantity</p>
            <div className="gap-3 mt-1.5 shadow-lg rounded-full bg-blue-gray-100 flex flex-row justify-between items-center">
              <button
                onClick={decreament}
                className="hover:bg-blue-400 duration-300 relative bg-white align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-[28px]  h-[28px] text-xs shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <FaMinus className="text-gray-700" />
                </span>
              </button>
              <p className="text-lg font-medium text-green-800">{qty}</p>
              <button
                onClick={increament}
                className="hover:bg-blue-400 duration-300 relative bg-white align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-[28px]  h-[28px] text-xs shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <FaPlus className=" text-gray-700" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={RemoveCraft}
        className="absolute right-0 top-0 bg-white shadow-lg p-3 rounded-full cursor-pointer duration-300 transform translate-x-[100%] opacity-0 hover:bg-light-blue-500 hover:text-white deletebutton"
      >
        <FaRegTrashAlt />
      </div>
    </div>
  );
};

export default CraftItems;
