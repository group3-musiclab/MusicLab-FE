import React from "react";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

import images from "../../assets/Ana.webp";

const Profile = () => {
  return (
    <Layout>
      <div className="container mx-auto p-10">
        <div className="flex flex-row justify-center space-x-8 p-6">
          <div className="card w-96 sm:h-full shadow-black shadow-sm mt-7">
            <div className="card-body mx-auto">
              <div className="flex mx-auto">
                <img
                  src={images}
                  className="w-36 rounded-full object-contain"
                />
              </div>
              <div className="mt-8 mx-auto">
                <p className="text-3xl text-black font-poppins">Ana De Arnas</p>
              </div>
              <hr />
              <div className="card card-actions flex flex-row justify-between space-x-3 mt-10">
                <p className="text-md text-black font-poppins cursor-pointer">
                  Edit Profile
                </p>
                <p className="text-md text-red-500 font-poppins cursor-pointer">
                  Delete Account
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-7 m-2">
            <div className="flex flex-col">
              <p className="text-5xl font-poppins text-black">
                Hi, Ana De Arnas
              </p>
              <div className="mt-7 p-3 space-y-3 ">
                <p className="text-3xl font-poppins text-black font-bold">
                  Contact me
                </p>
                <div className="ml-5 text-lg">
                  <p className="font-poppins text-black">
                    Gmail : <span>ana@gmail.com</span>
                  </p>
                  <p className="font-poppins text-black">
                    No Hp : <span>081122334455</span>
                  </p>
                  <p className="font-poppins  text-black">
                    Address : <span>Indonesia, Centar Jakarta</span>
                  </p>
                </div>
                <Button
                  label="Jadwal"
                  className="btn border-none rounded-xl w-3/6 bg-[#3A2BE8] text-white font-semibold mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
