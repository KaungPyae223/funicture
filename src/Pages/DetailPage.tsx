import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { TextRight } from "../Animate/DetailedAnimate.js";
import { useParams } from "react-router-dom";
import useFetchData from "../Api/useFetchData.js";
import DetailedImages from "../Components/DetailedPage/DetailedImages.js";
import DetailedDescription from "../Components/DetailedPage/DetailedDescription.js";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCraftItem,
  IncreaseQty,
  ReduceQty,
  RemoveCraftItem,
} from "../features/craftSlice.js";

const DetailPage = () => {
  const [quantity, setquantity] = useState(1);

  const { id } = useParams();

  const { data } = useFetchData(`/Details/${id}`);

  const Price = data?.Prices;

  const dispatch = useDispatch();
  const { Products } = useSelector((state) => state.craft);

  const Crafted = Products.find((el) => el.id === id);

  useEffect(()=>{
    Crafted? setquantity(Crafted.Qty):null
  },[Crafted])

  const AddCraft = () => {
    const CraftItem = {
      id: data.id,
      name: data.Name,
      price: data.Prices,
      Qty: quantity,
      img: data.img[0],
    };
    dispatch(AddCraftItem(CraftItem));
  };
  const RemoveCraft = () => {
    const CraftItem = {
      id: data.id,
      price: data.Prices,
      Qty: quantity,
    };
    dispatch(RemoveCraftItem(CraftItem));
  };

  const increament = () => {
    setquantity((pre) => pre + 1);
    Crafted
      ? dispatch(
          IncreaseQty({ id: id, price: data.Prices, quantity: quantity + 1 })
        )
      : null;
  };
  const decreament = () => {
    if (quantity != 1) {
      setquantity((pre) => pre - 1);
      Crafted
      ? dispatch(
        ReduceQty({ id: id, price: data.Prices, quantity: quantity - 1 })
        )
      : null;
    }
  };

  return (
    <div className="grid grid-cols-2 w-full gap-10">
      <DetailedImages data={data.img} />
      <motion.div
        variants={TextRight}
        initial={"initial"}
        animate={"enter"}
        className="p-10 max-h-[100vh] overflow-scroll no-scrollbar"
      >
        <p className="text-4xl font-medium">{data?.Name}</p>
        <p className="text-2xl pt-3">{data?.Type}</p>
        <div className="flex flex-row justify-start gap-24 items-start pt-10">
          <div>
            <p className=" text-blue-gray-700 uppercase">Price</p>
            <p className="pt-3 text-5xl font-medium text-green-900">
              ${data?.Prices}
            </p>
          </div>
          <div>
            <p className=" text-blue-gray-700 uppercase">Quantity</p>
            <div className="mt-3 gap-10 shadow-lg rounded-full bg-blue-gray-100 flex flex-row justify-between items-center">
              <button
                onClick={decreament}
                className="hover:bg-blue-400 duration-300 relative bg-white align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-[50px]  h-[50px] text-xs shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
                type="button"
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <FaMinus className="text-xl text-gray-700" />
                </span>
              </button>
              <p className="text-3xl font-bold text-green-800">{quantity}</p>
              <button
                onClick={increament}
                class="hover:bg-blue-400 duration-300 relative bg-white align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-[50px]  h-[50px] text-xs shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
                type="button"
              >
                <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <FaPlus className="text-xl text-gray-700" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <DetailedDescription data={data} />

        <div className="my-10 flex flex-row gap-16">
          <div>
            <p className=" text-blue-gray-700 uppercase">Total Price</p>
            <p className="pt-1.5 text-3xl font-medium text-green-700">
              ${Price * quantity}
            </p>
          </div>

          <p
            onClick={Crafted ? RemoveCraft : AddCraft}
            className={`${
              Crafted ? "bg-black" : "bg-green-800"
            } uppercase self-stretch text-white text-xl px-10 rounded-full flex items-center cursor-pointer hover:bg-blue-400 duration-300`}
          >
            {Crafted ? "Remove from Craft" : "Add to Craft"}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailPage;
