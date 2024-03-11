import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddDetailsData } from "../../features/keypeopleSlice";

const KeyPeopleCard = ({ data }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.keypeople.DetailsData);

  const ChangeData = () => {
    dispatch(AddDetailsData(data));
  };
  return (
    <div
      onClick={ChangeData}
      className="ProductHead rounded-lg shadow-lg overflow-hidden cursor-pointer h-full"
    >
      <div className="w-full h-64 overflow-hidden">
        <img
          src={data.img}
          className="h-64 object-cover object-center w-full ProductImage duration-300"
        />
      </div>

      <div
        className={
          data.id == id
            ? "p-5 ProductBody duration-300 bg-green-200"
            : "p-5 ProductBody duration-300"
        }
      >
        <p className="text-xl font-medium">{data.Name}</p>
        <p className="text-sm mt-3">{data.Role}</p>
      </div>
    </div>
  );
};

export default KeyPeopleCard;
