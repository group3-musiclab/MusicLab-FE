import React from "react";
import Button from "../../components/Button";
import LogoMusicLab from "../../assets/logo-musiclab.webp";
import { useNavigate } from "react-router-dom";

export default function Instrument() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full min-h-screen bg-white">
        <div className="flex flex-col">
          <div className="flex-1 w-full mt-20">
            <h2 className="text-4xl lg:text-6xl text-center text-button font-poppins font-bold">
              MusicLab
            </h2>
            <img src={LogoMusicLab} className="w-4/12 lg:w-2/12 mx-auto mt-8" />
          </div>
          <div className="flex-1 w-full">
            <h1 className="text-xl lg:text-2xl text-center text-black font-poppins font-bold mt-10">
              Instrumen apa yang ingin anda ajarkan
            </h1>
            <div className="flex flex-col lg:flex-row w-[80%] mx-auto mt-8">
              <div className="flex-1">
                <div className="form-control mx-auto w-11/12 lg:w-9/12 max-w-xs">
                  <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                    <option disabled selected>
                      Pilih Salah Satu
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 lg:mt-0 mt-5">
                <div className="form-control mx-auto w-11/12 lg:w-9/12 max-w-xs">
                  <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 lg:mt-0 mt-5">
                <div className="form-control mx-auto w-11/12 lg:w-9/12 max-w-xs">
                  <select className="select select-bordered  text-slate-600 border-slate-400 bg-select font-semibold font-poppins">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto text-center mt-10 pb-20">
              <Button
                id="btn-instrumen"
                label="Selanjutnya"
                className="bg-button w-9/12 lg:w-3/12  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-600"
                onClick={() => navigate("/genre")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
