import { Chip } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectType } from "../../features/productsSlice";
import {motion} from "framer-motion";
import {CatageroiesUp} from "../../Animate/ProductAnimate.js"
const TypesChip = ({ data,index }) => {

  const { SelectedType } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const Selected = data == SelectedType? "dark" : "green";
  return (
    <motion.div
    variants={CatageroiesUp}
    initial={"initial"}
    whileInView={"enter"}
    viewport={{once:true}}
    custom={index}
    onClick={() => {dispatch(SelectType(data))}}>
      <Chip
        size="lg"
        color={Selected}
        value={data}
        className="text-base font-thin normal-case cursor-pointer hover:bg-blue-500 duration-300"
      />
    </motion.div>
  );
};

export default TypesChip;
