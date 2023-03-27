import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import { LayoutSec } from "../../components/Layout";
import ModalChat from "./ModalChat";
import { InboxType } from "../../utils/types/Chat";

import { IoIosArrowBack } from "react-icons/io";

const Chat = () => {
  const [inbox, setInbox] = useState<InboxType[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<string>("");
  const [cookie, setCookie] = useCookies(["token", "id"]);
  const checkToken = cookie.token;

  const handleOpen = async () => {
    setModal("modal-open");
  };

  useEffect(() => {
    Chats();
  }, []);

  const Chats = () => {
    axios
      .get(`/inbox`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const data = res.data.data;
        setInbox(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
                {inbox?.map((items, index) => (
                  <>
                  <div key={index} className="flex flex-col justify-start space-y-6">
                    <div id={items.student_id}  className="flex space-x-8">
                      <img
                        src={items.avatar}
                        className="w-20 rounded-full object-contain" />
                      <div className="mt-2 text-black font-poppins">
                        <p className="font-semibold">{items.student_name}</p>
                      </div>
                    </div>
                  </div>
                  <div id="modal-open" className={`modal ${modal}`}>
                      <div className="modal-box bg-black max-w-5xl max-h-full md:w-11/12 lg:w-8/12">
                        <ModalChat student_id={items.student_id} mentor_id={items.mentor_id} />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutSec>
  );
};

export default Chat;
