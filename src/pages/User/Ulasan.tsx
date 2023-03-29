import React, { useState } from "react";
import Layout from "../../components/Layout";
import ulasanImg from "../../assets/ulasan.webp";
import Button from "../../components/Button";

const Ulasan = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <Layout>
        <div className="w-[80%] mx-auto min-h-screen flex flex-row">
          <div className="flex flex-1 flex-col  justify-center">
            <h1 className="text-black font-poppins font-semibold text-2xl">
              How do you feel about the class
            </h1>
            <label className="label mt-3">
              <span className="label-text text-black font-semibold text-lg font-poppins  w-6/12 ">
                Deskripsi
              </span>
            </label>
            <textarea
              id="input-deskripsi"
              className="textarea textarea-bordered h-40 bg-bg-input border-slate-300 w-11/12 text-black font-semibold font-popins bg-white"
              //
            ></textarea>
            <div>
              <h1 className="text-black font-poppins font-semibold text-2xl mt-10">
                Rating
              </h1>
              <div>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <span className="star text-6xl">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <Button
              id="btn-submitulasan"
              label="Submit Ulasan"
              className="btn"
            />
          </div>
          <div className="flex justify-center items-center flex-1 flex-col">
            <img src={ulasanImg} className="w-11/12" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Ulasan;
