import { Input, Typography } from "@material-tailwind/react";
import React from "react";

const FormInput = ({title,placeholder}) => {
  return (
    <div>
      <Typography variant="h6" color="blue-gray" className="mb-1">
        {title}
      </Typography>
      <Input
        size="lg"
        placeholder={placeholder}
        className=" !border-t-blue-gray-200 focus:!border-green-300"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  );
};

export default FormInput;
