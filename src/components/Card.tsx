import React, { FC } from "react";

import image from "../assets/Drum.jpg";
import ana from "../assets/Ana.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/insta.svg";
import twitter from "../assets/Twitter.svg";
import youtube from "../assets/Youtube.svg";

const Card = () => {
  return (
    <div className="card-compact w-72 card bg-white shadow-xl">
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

const CardSide = () => {
  return (
    <div className="card card-side bg-white shadow-xl p-4">
      <figure className="-mt-10">
        <img src={ana} alt="Movie" />
      </figure>
      <div className="card-body text-black font-poppins">
        <h2 className="card-title font-bold text-3xl">Ana De Arnas</h2>
        <p className="opacity-75 font-semibold -mt-2">Guitar Teacher</p>
        <p className="font-semibold ">
          Ana de arnas is a internationally certified teacher for guitar, has
          experienced
        </p>
        <div className="flex space-x-3 justify-center">
          <img src={facebook} alt="facebook" width={25} />
          <img src={instagram} alt="instagram" width={25} />
          <img src={twitter} alt="twitter" width={25} />
          <img src={youtube} alt="youtube" width={25} />
        </div>
      </div>
    </div>
  );
};

export { Card, CardSide };
