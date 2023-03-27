import React from "react";

import { LayoutSec } from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ModalChat = () => {
  return (
    <div className="rounded-lg bg-white p-10">
      <div className="flex flex-col justify-center">
        <div className="card">
          <div className="card-body">
            <div className="mx-auto -mt-7">
              <p className="text-black text-3xl font-poppins">Discussion</p>
            </div>
            <div className="w-7/12 mt-11">
              <p className="text-black font-poppins font-semibold">
                Nama Sender
              </p>
              <div className="bg-white border border-black w-full h-14 flex justify-start items-center p-6 rounded-xl">
                <div className="text-black font-poppins">
                  <span>lorem ipsum</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-black font-poppins font-semibold">
                  Nama Receiver
                </p>
                <div className="bg-white border border-black w-full h-14 flex justify-start items-center p-6 rounded-xl">
                  <div className="text-black font-poppins">
                    <span>lorem ipsum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="flex flex-row space-x-3">
            <Input
              id="send"
              type="text"
              placeholder="say something..."
              className="w-full h-14 text-black font-poppins bg-white border border-black rounded-xl p-3"
            />
            <Button
              type="submit"
              label="Send"
              className="btn w-28 rounded-xl text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalChat;
