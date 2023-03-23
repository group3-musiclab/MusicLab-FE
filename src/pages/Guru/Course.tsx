import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";
import pic1 from "../../assets/pic-1 (1).webp";

import Header from "../../assets/bg-banner.webp";

const header = {
  width: "80%",
  height: "25rem",
  backgroundImage: `url(${Header})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function DetailCourse() {
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col bg-white items-center mt-10">
          <h1 className="text-black font-bold w-9/12 flex justify-start text-2xl font-poppins lg:mt-0 -mt-8">
            Complete Electronic Music Production for EDM Music Producers
          </h1>
          <h2 className="text-slate-500 font-semibold w-9/12 flex justify-start text-xl font-poppins mt-5">
            Tingkatan Kelas : Pemula
          </h2>
          <div
            className=" rounded-2xl bg-no-repeat bg-auto bg-center mt-10"
            style={header}
          ></div>
          <div className="flex flex-col-reverse lg:flex-row w-[80%] min-h-screen mt-20">
            <div className="w-full lg:mt-0 -mt-16 lg:w-[65%] text-black">
              <div className="flex flex-col w-11/12">
                <h1 className="text-black text-2xl font-bold font-poppins">
                  Deskripsi Khusus:
                </h1>
                <p className="text-black font-semibold font-poppins text-lg mt-8">
                  Whether you're a beginner, intermediate, or an expert
                  producer, this course will teach you fresh and new techniques
                  to take your EDM productions to the next level. After all,
                  we're never truly finished learning - there's always something
                  around the corner that we never saw coming!
                </p>
                <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                  Apa yang akan anda Pelajari:
                </h1>
                <p className="text-black font-semibold font-poppins text-lg mt-8">
                  Compose and arrange a professional-sounding EDM track Set up a
                  project for optimal workflow and flawless composition Create
                  all elements of EDM including drum patterns, chord patterns,
                  and bass-lines Principal synthesis and synthesiser techniques
                  (ADSR, LFO, Modulation, etc.) Vocal Processing: Doubling,
                  Vocoders, Formant Shifting Arrangement Tips and Secrets to
                  take EDM tracks to the next level Advanced mixing and
                  mastering techniques to get your track signed by labels (phase
                  cancellation, EQ, Compression, etc.) The Intensity Graph
                  Concept for EDM production The Hidden Truth with Compression
                  for EDM
                </p>
                <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                  Prasyarat Khusus:
                </h1>
                <p className="text-black font-semibold font-poppins text-lg mt-8">
                  Have FL Studio, OR the ability to use another DAW (Digital
                  Audio Workstation) Minimal music theory (understand beats &
                  bars, very basic chords & scales) A desire to produce
                  professional EDM tracks
                </p>
                <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                  Untuk Siapa Kursus ini:
                </h1>
                <p className="text-black font-semibold font-poppins text-lg mt-8">
                  Beginner producers who want to get a professional sound
                  quickly Intermediate/Expert producers who can't figure out
                  what their tracks are missing Expert producers looking for
                  fresh tips and techniques
                </p>

                <div className="flex w-full justify-center">
                  <Button
                    id="loadMore"
                    label="Load More"
                    className="w-6/12 py-2 bg-bg-button rounded-xl text-white font-poppins font-semibold mt-8 hover:bg-red-600"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[35%] w-full text-black flex justify-center sticky">
              <div className="card bg-bg-card w-full h-[35rem] items-center">
                <div className="flex flex-col w-full lg:w-[85%] lg:mt-7">
                  <div className="w-full  h-[10rem] rounded-xl">
                    <div className="flex lg:flex-row bg-slate-100 rounded-xl shadow-lg">
                      <div className="flex-1">
                        <img src={pic1} className="w-full rounded-xl" />
                      </div>
                      <div className="flex-1 mt-5 ml-4">
                        <h1 className="font-bold font-poppins text-[19px] lg:text-lg">
                          Ana de Arnas
                        </h1>
                        <h2 className="font-semibold font-poppins text-[14px] lg:text-sm text-slate-400">
                          Guitar Teacher
                        </h2>
                        <p className=" text-[12px] text-black lg:text-sm mt-2 ">
                          Ana de arnas is a internationally certified teacher
                          for guitar, has experienced
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row w-[85%] h-auto mt-20">
                  <div className="flex-1">
                    <p className="font-bold font-poppins text-sm">
                      Harga Kursus
                    </p>
                    <p className="font-bold font-poppins text-sm mt-2">Tax</p>
                  </div>
                  <div className="flex-1 flex items-end flex-col">
                    <p className="font-bold font-poppins text-sm">
                      Rp. 159.000,-
                    </p>
                    <p className="font-bold font-poppins text-sm mt-2">
                      Rp. 20.000,-
                    </p>
                  </div>
                </div>
                <hr className="w-10/12 border-1 border-black mt-4" />
                <div className="flex flex-row w-[85%] h-auto mt-5">
                  <div className="flex-1">
                    <p className="font-bold font-poppins text-sm mt-2">
                      Jumlah Total
                    </p>
                  </div>
                  <div className="flex-1 flex items-end flex-col">
                    <p className="font-bold font-poppins text-sm mt-2">
                      Rp. 179.000,-
                    </p>
                  </div>
                </div>
                <div className="flex justify-start w-[85%]">
                  <Button
                    id="btn-belikursus"
                    label="Beli Kursus"
                    className="btn bg-button px-16 py-2 text-white border-none mt-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

const UploadCourse = () => {
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col bg-white items-center mt-10">
          <h1 className="text-black font-bold w-9/12 flex justify-center text-2xl font-poppins lg:mt-0 -mt-8">
            Upload Kursus
          </h1>
          <div
            className=" rounded-2xl bg-no-repeat bg-auto bg-center mt-10"
            style={header}
          ></div>
          <Input
            id="input-header-kursus"
            type="file"
            className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-10 border-none"
          />
          <div className="flex flex-col-reverse lg:flex-row w-10/12 min-h-screen mt-5 lg:mt-16">
            <div className="flex-1 lg:pl-16">
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12">
                  Judul Kursus
                </span>
              </label>

              <Input
                id="input-judulkursus"
                type="Template"
                placeholder="Ketik Judul Kursus Anda..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
              />
              <label className="label" id="select-levelkursus">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12  mt-5">
                  Tingkatan Khusus / Level
                </span>
              </label>

              <select
                id="select-role"
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12  text-black font-semibold font-poppins bg-white"
                defaultValue={"DEFAULT"}
              >
                <option disabled selected>
                  Pilih Salah Satu
                </option>
                <option value="Student">Student</option>
                <option value="Mentor">Mentor</option>
              </select>

              <label className="label" id="desc-kursus">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12  mt-5">
                  Deskripsi Khusus
                </span>
              </label>
              <textarea
                id="input-deskripsikursus"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12  mt-5">
                  Apa yang akan dipelajari
                </span>
              </label>
              <textarea
                id="input-apayangdipelajari"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12  text-black font-semibold font-popins bg-white"
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12 mt-5">
                  Prasyarat Khusus
                </span>
              </label>
              <textarea
                id="input-prasayrat-khusus"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12 mt-5">
                  Untuk Siapa Kursus ini
                </span>
              </label>
              <textarea
                id="input-untuk-siapa-kursus-ini"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
              ></textarea>
              <div className="flex justify-start w-[85%]">
                <Button
                  id="btn-uploadkursus"
                  label="Upload Kursus"
                  className="btn bg-button px-32 lg:px-36 py-2 text-white border-none mt-5"
                />
              </div>
            </div>
            <div className="flex-1 lg:pl-16">
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-10/12">
                  Harga Kursus
                </span>
              </label>

              <Input
                id="input-harga-kursus"
                type="text"
                placeholder="Harga Kursus..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const EditCourse = () => {
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col bg-white items-center mt-10">
          <h1 className="text-black font-bold w-9/12 flex justify-center text-2xl font-poppins lg:mt-0 -mt-8">
            Upload Kursus
          </h1>
          <div
            className=" rounded-2xl bg-no-repeat bg-auto bg-center mt-10"
            style={header}
          ></div>
          <Input
            id="input-header-kursus"
            type="file"
            className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-10 border-none"
          />
          <div className="flex flex-col-reverse lg:flex-row w-10/12 min-h-screen mt-5 lg:mt-16">
            <div className="flex-1 lg:pl-16">
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12">
                  Judul Kursus
                </span>
              </label>

              <Input
                id="input-judulkursus"
                type="Template"
                placeholder="Ketik Judul Kursus Anda..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
              />
              <label className="label" id="select-levelkursus">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12  mt-5">
                  Tingkatan Khusus / Level
                </span>
              </label>

              <select
                id="select-role"
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12  text-black font-semibold font-poppins bg-white"
                defaultValue={"DEFAULT"}
              >
                <option disabled selected>
                  Pilih Salah Satu
                </option>
                <option value="Student">Student</option>
                <option value="Mentor">Mentor</option>
              </select>

              <label className="label" id="desc-kursus">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12  mt-5">
                  Deskripsi Khusus
                </span>
              </label>
              <textarea
                id="input-deskripsikursus"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12  mt-5">
                  Apa yang akan dipelajari
                </span>
              </label>
              <textarea
                id="input-apayangdipelajari"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12  text-black font-semibold font-popins bg-white"
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12 mt-5">
                  Prasyarat Khusus
                </span>
              </label>
              <textarea
                id="input-prasayrat-khusus"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12 mt-5">
                  Untuk Siapa Kursus ini
                </span>
              </label>
              <textarea
                id="input-untuk-siapa-kursus-ini"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
              ></textarea>
              <div className="flex justify-start w-[85%]">
                <Button
                  id="btn-uploadkursus"
                  label="Upload Kursus"
                  className="btn bg-button px-32 lg:px-36 py-2 text-white border-none mt-5"
                />
              </div>
            </div>
            <div className="flex-1 lg:pl-16">
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-10/12">
                  Harga Kursus
                </span>
              </label>

              <Input
                id="input-harga-kursus"
                type="text"
                placeholder="Harga Kursus..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export { DetailCourse, UploadCourse, EditCourse };
