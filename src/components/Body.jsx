import React from "react";

const Body = () => {
  return (
    <div className="-space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1st"
          className=" -rotate-45 h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="2nd"
          className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="3rd"
          className="absolute rotate-[15deg] h-64 md:h-70 lg:h-[400px]"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="Hero"
          className="absolute h-64 md:h-72 lg:h-[400px]"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className=" text-5xl font-bold font-playfair leading-tight l">
          Host your website in less then 5 minutes
        </h1>
        <p className="font-lato text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos possimus
          perferendis necessitatibus id deleniti quis impedit sequi ipsa
          exercitationem aspernatur.
        </p>
        <form
          action=""
          className="flex
        flex-col gap-4 md:flex-row "
        >
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            join Waitlist
          </button>
        </form>
        <div className=" flex gap-4 my-0.5">
          <img src="./assets/Checkmark.svg" alt="check" />
          <p className="font-lato text-gray-400">
            No spam Ever, Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
