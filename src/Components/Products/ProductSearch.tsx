import { Chip, Input } from "@material-tailwind/react";
import { IoSearch } from "react-icons/io5";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import TypesChip from "./TypesChip";
import { SearchItem } from "../../features/productsSlice";

const ProductSearch = () => {
  const { Types } = useSelector((state) => state.products);
  const dispatch = useDispatch();
 
  const ref = useRef();
  return (
    <div className="px-11">
      <div className="w-1/2 my-6 border border-green-500 mx-auto py-3 px-7 rounded-full flex flex-row items-center justify-center">
        <input
          ref={ref}
          type="text"
          className="focus:outline-none text-xl w-full"
          placeholder="Search Products Do You Want"
        ></input>
        <button>
          <IoSearch className="text-2xl" onClick={() => {dispatch(SearchItem(ref.current.value))}} />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-3 pb-5 w-2/3 mx-auto">
        {Types.map((el, i) => {
          return <TypesChip key={i} data={el}></TypesChip>;
        })}
      </div>
    </div>
  );
};

export default ProductSearch;
