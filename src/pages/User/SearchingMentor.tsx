import React, { useState, useEffect, useCallback } from "react";

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
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(20);
  const [searchText, setSearchText] = useState<string>("");
  const [filtered, setFiltered] = useState<AllMentor[]>([]);
  const [filterGenres, setFilterGenres] = useState("");
  const [filterInstrument, setFilterInstrument] = useState("");

  const fetchDataMentors = (page: number) => {
    setLoading(true);
    axios
      .get(`mentors?limit=6&page=${page}`)
      .then((res) => {
        const { data } = res.data;
        setMentor(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchDataMentors(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchDataMentors(newPage);
  }

  useEffect(() => {
    fetchDataMentors(1);
  }, []);

  const handleFilterInstruments = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterInstrument(e.target.value);
  };

  const handleFilterGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterGenres(e.target.value);
  }

  const filterMentors = mentor.filter(
    (item) => 
    item.name?.toLowerCase().includes(searchText.toLowerCase()) &&
    (filterGenres === "" || item.name === filterGenres) &&
    (filterInstrument === "" || item.name === filterInstrument)
  )

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
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins"
              value={filterGenres}
              onChange={handleFilterGenres}
              >
                <option defaultValue={""}>
                  FIlter Genre
                </option>
                <option value="Jazz">Jazz</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Blues">Blues</option>
                <option value="Classic">Classic</option>
              </select>
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins"
              value={filterInstrument}
              onChange={handleFilterInstruments}
              >
                <option defaultValue={""}>
                  FIlter Instrument
                </option>
                <option value="Vocal">Vocal</option>
                <option value="Piano">Piano</option>
                <option value="Guitar">Guitar</option>
                <option value="Drum">Drum</option>
                <option value="Bass">Bass</option>
                <option value="Harmonika">Harmonika</option>
                <option value="Trombon">Trombon</option>
                <option value="Violin">Violin</option>
              </select>
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                <option defaultValue={""}>
                  FIlter Price
                </option>
                <option value="">Han Solo</option>
                <option value="">Greedo</option>
              </select>
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                <option defaultValue={""}>
                  FIlter Rating
                </option>
                <option value="">Han Solo</option>
                <option value="">Greedo</option>
              </select>
              <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                <option defaultValue={""}>
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
                onChange={(e: any) => setSearchText(e.target.value)}
              />
            </div>
            <div className="flex justify-end -mt-8 mr-5 text-black">
              <BiSearchAlt2 size={20} />
            </div>
            <div className="card mt-6">
              <div className="m-5 grid grid-cols-2 gap-3">
                {searchText !== ""
                  ? filterMentors?.map((data, index) => (
                      <>
                        <CardMentor
                          key={index}
                          image={data?.avatar}
                          name={data?.name}
                          desc={data?.about}
                          instagram={data?.instagram}
                          rating={data?.rating}
                          onClick={() => navigate(`/ProfileDetail/${data.id}`)}
                        />
                      </>
                    ))
                  : mentor?.map((item, index) => {
                      return (
                        <>
                          <CardMentor
                            key={index}
                            image={item?.avatar}
                            name={item?.name}
                            desc={item?.about}
                            instagram={item?.instagram}
                            rating={item?.rating}
                            onClick={() =>
                              navigate(`/ProfileDetail/${item.id}`)
                            }
                          />
                        </>
                      );
                    })}
              </div>
            </div>

            <div className="btn-group mx-auto w-full flex justify-center mt-10">
              <button
                onClick={() => prevPage()}
                disabled={page === 1}
                className="btn"
              >
                «
              </button>
              <button className="btn">{page}</button>
              <button
                onClick={() => nextPage()}
                // disabled={(page === totalPage)}
                className="btn"
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchingMentor;
