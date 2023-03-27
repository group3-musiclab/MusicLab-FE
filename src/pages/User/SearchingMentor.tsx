import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import { Card, CardMentor, CardSide } from "../../components/Card";
import { Input } from "../../components/Input";
import Pic1 from "../../assets/Anade.webp";

import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { AllMentor } from "../../utils/types/Datatypes";
import axios from "axios";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const SearchingMentor = () => {
  const [mentor, setMentor] = useState<AllMentor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchDataMentors = () => {
    setLoading(true);
    axios
      .get("mentors")
      .then((res) => {
        const { data } = res.data;
        setMentor(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataMentors();
  }, []);

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
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                <option disabled selected>
                  FIlter Genre
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                <option disabled selected>
                  FIlter Instrument
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                <option disabled selected>
                  FIlter Price
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                <option disabled selected>
                  FIlter Rating
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
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
                id="search"
                type="text"
                placeholder="Search"
                className="input input-bordered shadow-black shadow-sm bg-white text-black font-poppins"
              />
            </div>
            <div className="flex justify-end -mt-8 mr-5 text-black">
              <BiSearchAlt2 size={20} />
            </div>
            <div className="card mt-6">
              <div className="m-5 grid grid-cols-2 gap-3">
                {mentor?.map((item) => {
                  return (
                    <CardMentor
                      image={item.avatar}
                      name={item.name}
                      desc={item.about}
                      instagram={item.instagram}
                      rating={item.rating}
                      onClick={() => navigate(`/profileTeacher/${item.id}`)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchingMentor;
