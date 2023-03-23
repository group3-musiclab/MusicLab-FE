import React, { useState } from "react";

import { LayoutSec } from "../../components/Layout";
import ModalChat from "./ModalChat";

import { IoIosArrowBack } from "react-icons/io";
import images from "../../assets/Ana.svg";

const Chat = () => {
  const [modal, setModal] = useState<string>("");

  const handleOpen = async () => {
    setModal("modal-open");
  };

  return (
    <LayoutSec>
      <div className="container bg-white mx-auto p-7">
        <div className="flex flex-row">
          <div className="flex text-black font-semibold">
            <IoIosArrowBack size={35} />
            <p className="text-xl font-poppins mt-1">Back</p>
          </div>
          <div className="mt-24">
            <p className="text-black text-4xl font-poppins">Chat</p>
            <div className="card w-96 shadow-lg border-black border mt-4 ml-20">
              <div className="card-body" onClick={() => handleOpen()}>
                <div className="flex flex-col justify-start space-y-6">
                  <div className="flex space-x-8">
                    <img
                      src={images}
                      className="w-20 rounded-full object-contain"
                    />
                    <div className="mt-2 text-black font-poppins">
                      <p className="font-semibold">Ana de Arnas</p>
                      <p className="font-bold cursor-pointer">Message .</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start space-y-6">
                    <div className="flex space-x-8">
                      <img
                        src={images}
                        className="w-20 rounded-full object-contain"
                      />
                      <div className="mt-2 text-black font-poppins">
                        <p className="font-semibold">Ana de Arnas</p>
                        <p className="font-bold cursor-pointer">Message .</p>
                      </div>
                    </div>
                  </div>
                  <div id="modal-open" className={`modal ${modal}`}>
                    <div className="modal-box max-w-5xl max-h-full md:w-11/12 lg:w-8/12">
                      <ModalChat />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutSec>
  );
};

export default Chat;
