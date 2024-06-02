import React from "react";

function Cards({item}) {
  return (
    <>
      <div className="my-3">
        <div className="dark:bg-white card hover:scale-105 duration-200 w-92 bg-base-100 shadow-xl">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.price}</div>
              <div className="cursor-pointer p-3 badge badge-outline hover:text-white hover:bg-violet-400 duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
