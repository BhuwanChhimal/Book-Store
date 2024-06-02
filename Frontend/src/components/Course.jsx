import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";


const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className=" min-h-screen ">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="items-center  justify-center text-center">
            <h1 className="text-2xl m-28  font-semibold md:text-4xl">
              We're delighted to have you{" "}
              <span className="text-violet-400">here {":)"}</span>
            </h1>
            <p className="mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              velit perferendis distinctio quas voluptatem quod nam deleniti
              repudiandae totam? Molestiae quidem rem consequuntur ipsa
              quibusdam error aut, sit maxime possimus.
            </p>
            <Link to="/">
              <button className="text-white bg-violet-400 px-4 py-2 rounded-md hover:bg-violet-600 duration-300 mt-6">
                Back
              </button>
            </Link>
          </div>

          <div className="gap-6 mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
