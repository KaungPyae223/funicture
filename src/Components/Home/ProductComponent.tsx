import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { CategoriesUp } from "../../Animate/HomeAnimate.js";

const ProductComponent = ({ data }) => {
  console.log(data);
  return (
    <motion.div
      variants={CategoriesUp}
      initial={"initial"}
      whileInView={"enter"}
      viewport={{ once: true }}
      className="cursor-pointer ProductHead"
    >
      <Card className="mt-6 shadow-none rounded-none bg-gray-200 ProductBody duration-300">
        <CardHeader
          color="blue-gray"
          className="relative rounded-none shadow-none mt-0 mx-0"
        >
          <img
            src={data.img}
            alt="card-image"
            className="h-72 object-cover w-full object-center h-fit hover:scale-110 duration-300"
          />
        </CardHeader>
        <CardBody className="p-3">
          <p className="text-xl font-bold font-heading line-clamp-1 text-black">
            {data.title}
          </p>
          <Typography>
            <p className="text-sm mb-3 line-clamp-1">{data.type}</p>
            <p className="font-bold text-lg text-black">{data.price} $</p>
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ProductComponent;
