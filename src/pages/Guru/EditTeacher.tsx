import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import pic1 from "../../assets/pic-1 (1).webp";

export default function EditTeacher() {
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen">
          <div className="flex flex-col lg:flex-row mt-5 lg:mt-10">
            <div className="flex-1 flex-col ">
              <h1 className="text-black font-bold font-poppins text-2xl text-center">
                Edit Profile
              </h1>
              <img src={pic1} className="w-4/12 mx-auto mt-5 rounded-2xl " />
              <Input
                id="input-file"
                type="file"
                className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-5 border-none"
              />
              <div className="w-full flex justify-center mt-10">
                <Button
                  id="btn-lihatdaftar-kursus"
                  label="Lihat Daftar Kursus"
                  className="bg-button w-[20rem]  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-900"
                />
              </div>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-full lg:max-w-xs flex  bg-white mx-auto mt-8 ">
                  Tipe Sertifikat
                </span>
              </label>
              <select
                id="select-role"
                className="input input-bordered  border-slate-300  w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto  text-black font-semibold font-poppins"
                defaultValue={"DEFAULT"}
              >
                <option disabled selected>
                  Pilih Salah Satu
                </option>
                <option value="Student">Student</option>
                <option value="Mentor">Mentor</option>
              </select>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-full lg:max-w-xs flex  bg-white mx-auto mt-8 ">
                  Nama Sertifikat
                </span>
              </label>
              <Input
                id="input-namalengkap"
                type="input-sertifikat"
                placeholder="Sertifkat Internasional"
                className="input input-bordered   border-slate-300  w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto  text-black font-semibold font-poppins"
              />
              <Input
                id="input-file"
                type="file"
                className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-10 border-none"
              />
            </div>
            <div className="flex-1 lg:ml-0 ml-10">
              <form>
                <div className="form-control w-full mx-auto">
                  <label className="label mt-3">
                    <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-9/12">
                      Nama Lengkap
                    </span>
                  </label>
                  <Input
                    id="input-namalengkap"
                    type="email"
                    placeholder="marlina1998"
                    className="input input-bordered w-10/12 lg:w-9/12 bg-bg-input border-slate-300 text-black font-semibold font-poppins bg-white"
                  />
                  <label className="label mt-5">
                    <span className="label-text text-black font-semibold text-lg font-poppins w-10/12 lg:w-9/12">
                      No. Hp
                    </span>
                  </label>

                  <Input
                    id="input-telepon"
                    type="number"
                    placeholder="08222"
                    className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                  />
                  <label className="label mt-5">
                    <span className="label-text text-black font-semibold text-lg font-poppins w-10/12 lg:w-9/12">
                      Email
                    </span>
                  </label>
                  <Input
                    id="input-email"
                    type="email"
                    placeholder="@test@gmail.com"
                    className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                  />
                  <label className="label mt-5">
                    <span className="label-text text-black font-semibold text-lg font-poppins w-10/12 lg:w-9/12">
                      Social Media / Instagram
                    </span>
                  </label>
                  <Input
                    id="input-socialmedia-instagram"
                    type="text"
                    placeholder="@test@gmail.com"
                    className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                  />

                  <label className="label">
                    <span className="label-text text-black font-semibold text-lg font-poppins w-10/12 lg:w-9/12 mt-5">
                      Instrumen apa yang anda ajarkan
                    </span>
                  </label>
                  <div className="flex flex-row w-9/12 gap-5">
                    <select
                      id="select-role"
                      className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                      defaultValue={"DEFAULT"}
                    >
                      <option disabled selected>
                        Pilih Salah Satu
                      </option>
                      <option value="Student">Student</option>
                      <option value="Mentor">Mentor</option>
                    </select>
                    <select
                      id="select-role"
                      className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                      defaultValue={"DEFAULT"}
                    >
                      <option disabled selected>
                        Pilih Salah Satu
                      </option>
                      <option value="Student">Student</option>
                      <option value="Mentor">Mentor</option>
                    </select>
                    <select
                      id="select-role"
                      className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                      defaultValue={"DEFAULT"}
                    >
                      <option disabled selected>
                        Pilih Salah Satu
                      </option>
                      <option value="Student">Student</option>
                      <option value="Mentor">Mentor</option>
                    </select>
                  </div>

                  <label className="label">
                    <span className="label-text text-black font-semibold text-lg font-poppins w-10/12 lg:w-9/12 mt-5">
                      Genre musik yang diajarkan
                    </span>
                  </label>
                  <div className="flex flex-row w-9/12 gap-5">
                    <select
                      id="select-role"
                      className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                      defaultValue={"DEFAULT"}
                    >
                      <option disabled selected>
                        Pilih Salah Satu
                      </option>
                      <option value="Student">Student</option>
                      <option value="Mentor">Mentor</option>
                    </select>
                    <select
                      id="select-role"
                      className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                      defaultValue={"DEFAULT"}
                    >
                      <option disabled selected>
                        Pilih Salah Satu
                      </option>
                      <option value="Student">Student</option>
                      <option value="Mentor">Mentor</option>
                    </select>
                  </div>
                  <label className="label">
                    <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-9/12 mt-5">
                      Alamat
                    </span>
                  </label>
                  <textarea className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-popins bg-white"></textarea>
                </div>
                <div className="w-full mt-10 flex flex-row">
                  <Button
                    id="btn-back"
                    label="Kembali"
                    className="bg-button w-[8rem] lg:w-[15rem]  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-900"
                  />
                  <Button
                    id="btn-Update"
                    label="Update"
                    className="bg-button w-[9rem] lg:w-[15rem]  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer ml-5 hover:bg-blue-900"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
