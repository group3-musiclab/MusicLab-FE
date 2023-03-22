import React from "react";

import image from "../assets/Drum.jpg";

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

interface CardMentorProps {
  image?: any;
  name?: string;
  skills?: string;
  desc?: string;
  groupImg?: any;
}

const CardMentor = ({
  image,
  name,
  skills,
  desc,
  groupImg,
}: CardMentorProps) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full  shadow-xl rounded-xl bg-slate-200 mt-10">
        <div className="flex-1">
          <img
            src={image}
            className="rounded-xl w-full lg:w-[17rem] h-[20rem] max-w-xl object-fit object-fill "
          />
        </div>
        <div className="flex-1 flex flex-col pl-7 lg:pl-5">
          <h1 className="text-black font-bold font-poppins text-2xl mt-10">
            {name}
          </h1>
          <h2 className="text-slate-500 font-semibold font-poppins text-md mt-1">
            {skills}
          </h2>
          <p className="text-black font-poppins font-normal text-md mt-3 w-10/12">
            {desc}
          </p>
          <div className="flex-1 flex flex-row mt-8 lg:pb-0 pb-10">
            {groupImg}
          </div>
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
