import React from "react";

import Error from "../Images/Error.svg";

const ErrorPage = ({ ErrorMessage }) => {
  return (
    <div>
      <img src={Error} className="mx-auto p-10 max-h-80" />
      <p className="text-xl font-medium mx-auto w-fit">{ErrorMessage}</p>
      
    </div>
  );
};

export default ErrorPage;
