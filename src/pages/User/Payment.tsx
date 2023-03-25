import React, { useState } from "react";
import { useCookies } from "react-cookie";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Header from "../../assets/bg-banner.webp";

const header = {
    width: "80%",
    height: "17rem",
    backgroundImage: `url(${Header})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };


const Payment = () => {

  const [cookie, setCookie] = useCookies(["token"]);
  const [loading, SetLoading] = useState(true);
  const checkToken = cookie.token;


  const handleContinuePayment = () => {
    SetLoading(false);
  }

    return (
        <Layout>
        <div className="w-full min-h-screen flex flex-col bg-white items-center mt-4">
          <h1 className="text-black font-bold w-9/12 flex justify-start text-2xl font-poppins lg:mt-0 -mt-8">
            Complete Electronic Music Production for EDM Music Producers
          </h1>
          <p className="text-slate-500 font-semibold w-9/12 flex justify-start text-xl font-poppins mt-5">
            Tingkatan Kelas : Pemula
          </p>
          <div
            className=" rounded-2xl bg-no-repeat bg-auto bg-center mt-6"
            style={header}
          >
          </div>
          {loading ? (
            <div className="flex flex-col w-10/12 min-h-screen p-7 mt-8 space-y-2">
            <div className="flex flex-row justify-between">
              <p className="text-black font-bold font-poppins">Harga :</p>
              <p className="text-black font-bold font-poppins">Rp. 159.000</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-black font-bold font-poppins">Tax :</p>
              <p className="text-black font-bold font-poppins">Rp. 20000</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              <p className="text-black font-bold font-poppins">Total Biaya :</p>
              <p className="text-black font-bold font-poppins">Rp. 179.000</p>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                  <p className="text-black font-bold font-poppins mt-8">check availibility</p>
                  <div className="flex flex-row space-x-5 mt-2">
                  <select className="select select-bordered w-52">
                    <option disabled selected>Chose Day</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select className="select select-bordered w-52">
                    <option disabled selected>Chose Hour</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  </div>
                  <Button 
                  label="check availibility"
                  className="btn bg-[#3A2BE8] mt-4"
                  />
                  <div className="flex flex-col">
                  <p className="text-black font-bold font-poppins mt-4">Metode pembayaran</p>
                  <select className="select select-bordered w-full">
                    <option disabled selected>Chose One</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  </div>
                  <div className="flex flex-col">
                  <p className="text-black font-bold font-poppins mt-4">Bank Penerima</p>
                  <select className="select select-bordered w-full">
                    <option disabled selected>Chose Bank</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  </div>
                  <Button 
                  label="Continue Payment"
                  className="btn bg-[#3A2BE8] mt-4"
                  onClick={handleContinuePayment}
                  />
              </div>
            </div>
            </div>
          ) : (
            <>
            <div className="flex flex-col w-10/12 min-h-screen p-7 mt-8 space-y-2">
            <div className="flex flex-row justify-between">
                <p className="text-black font-bold font-poppins">No Virtual Account</p>
                <p className="text-black font-bold font-poppins">324j23hv42g3432j5xncmxn</p>
              </div>
              <div className="flex flex-row justify-between">
                  <p className="text-black font-bold font-poppins">Metode Pembayaran</p>
                  <p className="text-black font-bold font-poppins">Bank Tranfer</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold font-poppins">Bank Penerima</p>
                  <p className="text-black font-bold font-poppins">BCA</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold font-poppins">Biaya Admin</p>
                  <p className="text-black font-bold font-poppins">Rp. 10.000</p>
                </div>
                <hr />
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold font-poppins">Total Biaya</p>
                  <p className="text-black font-bold font-poppins">Rp. 179.000</p>
                </div>
                <Button
                  label="Confirm & Pay"
                  className="btn bg-[#3A2BE8] mt-4 w-3/12" />
                  </div>
                  </>
          )}
          </div>
        </Layout>
    )
}

export default Payment;