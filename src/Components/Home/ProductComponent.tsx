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

const ProductComponent = () => {
  return (
    <motion.div
      variants={CategoriesUp}
      initial={"initial"}
      whileInView={"enter"}
      viewport={{ once: true }}
    >
      <Card className="mt-6 shadow-none rounded-none bg-gray-200">
        <CardHeader
          color="blue-gray"
          className="relative rounded-none shadow-none mt-0 mx-0"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="card-image"
            className="max-h-72 object-cover w-full object-center h-fit"
          />
        </CardHeader>
        <CardBody className="p-3">
          <Typography
            variant="p"
            color="blue-gray"
            className="text-xl font-bold font-heading"
          >
            Victor Alex
          </Typography>
          <Typography>
            <p className="text-sm mb-3">Lamp</p>
            <p className="font-bold text-lg text-black">350 $</p>
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ProductComponent;
