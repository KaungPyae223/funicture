import React from "react";

const HowWeMake = () => {
  return (
    <div className="my-5 mb-11 px-11 grid grid-cols-2 gap-28">
      <div>
        <p className="text-3xl font-medium leading-[3rem]">
          Learn About Why We Exit and What Keep Us Going
        </p>
        <p className="mt-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          totam illum impedit minus corporis optio tempora, necessitatibus
          mollitia pariatur praesentium esse ut soluta eveniet nulla!
        </p>
      </div>
      <iframe
        className="w-full rounded-lg aspect-video"
        src="https://www.youtube.com/embed/x41EJqetkTI?si=pruHSxpMjkn9Q7RR"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default HowWeMake;
