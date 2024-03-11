import { Chip } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectType } from "../../features/productsSlice";

const TypesChip = ({ data }) => {

  const { SelectedType } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const Selected = data == SelectedType? "dark" : "green";
  return (
    <div onClick={() => {dispatch(SelectType(data))}}>
      <Chip
        size="lg"
        color={Selected}
        value={data}
        className="text-base font-thin normal-case cursor-pointer hover:bg-blue-500 duration-300"
      />
    </div>
  );
};

export default TypesChip;
