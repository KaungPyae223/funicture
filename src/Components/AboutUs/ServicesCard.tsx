import React from 'react';


const ServicesCard = ({data}) => {
    return (
        <div className="flex flex-col items-start">
          {data.icon}
          <p className="py-5 text-xl font-medium">
            {data.heading}
          </p>
          <p>
            {data.contant}
          </p>
        </div>
    );
};

export default ServicesCard;