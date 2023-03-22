import React from "react";

import Layout from "../../components/Layout";
import { CardSide } from "../../components/Card";
import { Input } from "../../components/Input";

import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchingMentor = () => {
  return (
    <Layout>
      <div className="container mx-auto p-9">
        <div className="flex flex-row space-x-32 p-7">
          <div className="mt-10">
            <div className="flex text-black">
              <p className="font-bold text-black text-2xl">Filter</p>
              <MdKeyboardArrowRight size={25} className="mt-1" />
            </div>
            <div className="flex flex-col space-y-7 mt-7">
              <select className="select select-bordered w-80 bg-white shadow-black shadow-sm">
                <option disabled selected>
                  FIlter Genre
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered w-80 bg-white shadow-black shadow-sm">
                <option disabled selected>
                  FIlter Instrument
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered w-80 bg-white shadow-black shadow-sm">
                <option disabled selected>
                  FIlter Price
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered w-80 bg-white shadow-black shadow-sm">
                <option disabled selected>
                  FIlter Rating
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered w-80 bg-white shadow-black shadow-sm">
                <option disabled selected>
                  FIlter Kualifikasi
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
          <div className="flex-1">
            <div className="form-control w-full -mt-10">
              <Input
                type="text"
                placeholder="Search"
                className="input input-bordered shadow-black shadow-sm bg-white text-black"
              />
            </div>
            <div className="flex justify-end -mt-8 mr-5 text-black">
              <BiSearchAlt2 size={20} />
            </div>
            <div className="card mt-6">
              <div className="m-5 grid grid-cols-2 gap-3">
                <CardSide />
                <CardSide />
                <CardSide />
                <CardSide />
                <CardSide />
                <CardSide />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchingMentor;
