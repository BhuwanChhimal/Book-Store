import React from "react";
import heroImg from "../../public/hero_img.jpg"
const Banner = () => {
  return (
    <>
      <div className="flex flex-col gap-12 md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 md:mt-0 mt-14">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt:12 lg:mt-32 md:mt-20">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-violet-400">new everyday!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias repudiandae, dolorum voluptates iure quaerat reiciendis
              assumenda sit aliquam facilis esse fuga consequuntur quas,
              expedita nobis aspernatur soluta. Eius, debitis alias!
            </p>
            <label className="dark:bg-white dark:text-black input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="my-6 btn btn-secondary bg-violet-500 hover:bg-violet-400 text-white border-none">Get Started</button>
        </div>
        <div className="order-1 w-full md:w-1/2 mt:12 lg:mt-32 md:mt-20 lg:ml-[8rem]">
            <img className="sm:w-[25rem] sm:h-[25rem] md:h-[30rem] md:w-[30rem]" src={heroImg} alt="heroImg" />
        </div>
      </div>
    </>
  );
};

export default Banner;
