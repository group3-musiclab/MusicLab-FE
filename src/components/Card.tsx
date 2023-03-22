import React from "react";

import image from "../assets/Drum.jpg";
import pic1 from "../assets/pic-1 (1).webp";
import pic2 from "../assets/pic-1 (2).webp";
import pic3 from "../assets/pic-1 (3).webp";
import pic4 from "../assets/pic-1 (4).webp";

const Card = () => {
  return (
    <div className="card-compact w-full lg:w-full md:w-52 card bg-white shadow-xl">
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

const CardMentor = () => {
  const topPicImg = {
    backgroundImage: `url(${pic1})`,
    width: "100%",
    height: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-[75%]  mx-auto mt-16">
          <div className="border-2 border-black">
            <div className="w-full h-full border-2 border-black flex flex-row">
              <div className="w-[60%] flex">
                <img
                  src={pic4}
                  alt="logo.svg"
                  className="rounded-2xl shadow-lg w-[30rem] h-[35rem] object-fill"
                />
              </div>
              <div className="flex-1 flex w-full border-black">a</div>
            </div>
          </div>
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
        </div>
      </div>
    </>
  );
};

interface CardTestimonialProps {
  desc?: string;
  image?: any;
  name?: string;
}

const CardTestimonial = ({ desc, image, name }: CardTestimonialProps) => {
  return (
    <>
      <div>
        <div className="flex justify-center card rounded-lg w-full h-full shadow-lg p-10 bg-slate-100">
          <p className="text-black font-semibold text-sm text-center">{desc}</p>
          <hr className="border-1 border-black mt-3 mx-auto w-10/12 text-center" />
          <img src={image} className="w-3/12 mx-auto mt-5" />
          <p className="text-black font-bold text-lg text-center font-poppins mt-2">
            {name}
          </p>
        </div>
      </div>
    </>
  );
};

export { Card, CardMentor, CardTestimonial };
