import React, { FC, useContext } from "react";
import { ApiContext } from "../utils/context/contextApi";
import { useNavigate, useParams } from "react-router";

import image from "../assets/Drum.jpg";
import ana from "../assets/Ana.webp";

import facebook from "../assets/icon/Facebook 2.webp";
import instagram from "../assets/insta.webp";
import twitter from "../assets/Twitter.webp";
import youtube from "../assets/Youtube.webp";
import Button from "./Button";

interface CardCourseProps {
  image: string;
  name: any;
  price: any;
}

const Card = ({ image, name, price }: CardCourseProps) => {
  return (
    <div className="card-compact w-full card bg-white shadow-xl">
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{name}</h2>
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
          <p>Rp. {price}</p>
        </div>
      </div>
    </div>
  );
};

interface CardMentorProps {
  image?: any;
  name?: string;
  instagram?: string;
  instrument_name?: any;
  desc?: string;
  rating?: any;
  onClick?: any;
}

const CardMentor: FC<CardMentorProps> = ({
  image,
  name,
  desc,
  instagram,
  instrument_name,
  rating,
  onClick,
}) => {
  const navigate = useNavigate();
  const user = useContext(ApiContext);
  const { id } = useParams();
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full  shadow-xl rounded-xl bg-slate-200 mt-10">
        <div className="flex-1">
          <img
            src={image}
            className="rounded-xl w-full lg:w-[14rem] h-[16em] max-w-xl object-fit object-fill "
            onClick={onClick}
          />
        </div>
        <div className="flex-1 flex flex-col pl-7 lg:pl-5">
          <h1 className="text-black font-bold font-poppins text-xll mt-10">
            {name}
          </h1>
          <h2 className="text-slate-500 font-semibold font-poppins text-md mt-1">
            {instrument_name}
          </h2>
          <p className="text-black font-poppins font-normal text-md mt-3 w-10/12">
            {desc}
          </p>
          <div className="flex flex-row">
            <div className="flex-1">
              <a href={instagram} target="_blank" rel="noreferrer">
                <Button label="Instagram" />
              </a>
            </div>
            <div className="flex-1">{rating}</div>
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

const CardSide = () => {
  return (
    <div className="card card-side bg-white shadow-xl p-4">
      <figure>
        <img
          src={ana}
          className="w-full rounded-xl lg:w-[27rem] h-[15rem] max-w-xl object-fit object-fill"
        />
      </figure>
      <div className="card-body text-black font-poppins">
        <h2 className="card-title font-bold text-3xl">Ana De Arnas</h2>
        <p className="opacity-75 font-semibold -mt-2">Guitar Teacher</p>
        <p className="font-semibold ">
          Ana de arnas is a internationally certified teacher for guitar, has
          experienced
        </p>
        <div className="flex space-x-3 justify-center mt-6">
          <img src={facebook} alt="facebook" width={35} />
          <img src={instagram} alt="instagram" width={35} />
          <img src={twitter} alt="twitter" width={35} />
          <img src={youtube} alt="youtube" width={35} />
        </div>
      </div>
    </div>
  );
};

export { Card, CardSide, CardMentor, CardTestimonial };
