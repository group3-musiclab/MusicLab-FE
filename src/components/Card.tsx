import React from "react";

import image from "../assets/Drum.jpg";

const Card = () => {
  return (
    <div className="card-compact card bg-white shadow-xl">
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">Class Drum untuk Pemula</h2>
        <div className="rating w-24 -mt-2">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <p className="opacity-70">(0)</p>
        </div>
        <div className="card-actions justify-start text-xl font-semibold">
          <p>Rp. 100.000</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
