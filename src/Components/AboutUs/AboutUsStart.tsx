import React from "react";

const AboutUsStart = () => {
  return (
    <div className="mt-10 py-10 px-11">
      <div className=" grid grid-cols-2 gap-28 mb-11">
        <div>
          <p className="font-bold text-5xl mb-20">How We Start Our Company</p>
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>
        <div>
          <p className="text-3xl font-medium leading-[3rem]">
            What inspired the founding of our furniture company and what drove
            its creation?
          </p>
          <p className="mt-7 text-justify">
            In the genesis of our furniture company, the spark that ignited our
            journey was a profound passion for redefining living spaces. The
            "how" of our founding is woven into a narrative of visionary minds
            converging with a shared dream — a dream of crafting not just
            furniture but timeless pieces that elevate the essence of home.
          </p>
          <p className="mt-5 text-justify">
            The inception unfolded through a shared vision of merging artistry
            with functionality, where each piece tells a story and resonates
            with the spirit of thoughtful design. It began with the belief that
            furniture should transcend mere utility; it should be an expression
            of aesthetics, comfort, and enduring craftsmanship.
          </p>
          <p className="mt-5 text-justify">
            Our founders, driven by a collective desire to bring a unique blend
            of design and quality into the world of furniture, embarked on a
            journey marked by meticulous planning, dedication, and an unwavering
            commitment to excellence. The "how" is in the countless hours spent
            refining concepts, sourcing the finest materials, and collaborating
            with skilled artisans to breathe life into our creations.
          </p>
        </div>
      </div>

      <hr className="border-gray-300" />
    </div>
  );
};

export default AboutUsStart;
