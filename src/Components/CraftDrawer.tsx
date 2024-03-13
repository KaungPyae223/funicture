import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import CraftItems from "./CraftItems";

const CraftDrawer = ({ open, closeDrawer, Craft }) => {
  return (
    <React.Fragment>
      <Drawer
        placement="right"
        open={open}
        size={350}
        onClose={closeDrawer}
        className="p-4 flex flex-col justify-start"
      >
        <div className="mb-2 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Craft
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="overflow-y-scroll no-scrollbar mb-3">
          {Craft.Products.length>0 && (
            Craft.Products.map((el,i) => <CraftItems data={el} index={i} key={i}/>)
          )}
        </div>

        <div className="flex flex-row justify-between items-center mt-auto">
          <div className="flex flex-col justify-center items-start">
            <p className="text-2xl font-medium text-green-800">
              ${Craft.TotalPrice}
            </p>
            <div className="flex flex-row justify-start items-center gap-1">
              <p className="text-xs text-gray-800">Total Qty:</p>
              <p className="text-sm text-green-800">{Craft.TotalQty}</p>
            </div>
          </div>

          <button className="py-1.5 px-8 rounded-full bg-green-500 text-white duration-300 hover:bg-blue-500">
            Buy
          </button>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default CraftDrawer;
