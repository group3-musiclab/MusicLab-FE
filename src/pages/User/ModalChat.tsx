import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import axios from "axios";

import { LayoutSec } from "../../components/Layout";
import { ChatsType } from "../../utils/types/Chat";

import Input from "../../components/Input";
import Button from "../../components/Button";

const ModalChat = () => {
  const student_id = localStorage.getItem("id");
  const { mentor_id } = useParams();
  const [message, setMessage] = useState<ChatsType[]>([]);
  const [chat, setChats] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  useEffect(() => {
    ChatsList();
  }, []);

  function ChatsList() {
    setLoading(true);
    axios
      .get(`/chats?mentor=${student_id}&student=${mentor_id}`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setChats(data);
        console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleNewChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChats(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      id: student_id,
      receiverID: mentor_id,
      chat,
    };
    axios
      .post(`/chats`, body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((response) => {
        const { data } = response.data;
        setMessage(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="rounded-lg bg-white p-10">
      <div className="flex flex-col justify-center">
        <div className="card">
          <div className="card-body over">
            {message.map((item, index) => (
              <>
                <div key={index} className="w-7/12">
                  <p className="text-black font-poppins font-semibold">
                    {item.sender_name}
                  </p>
                  <div className="bg-white border border-black w-full h-14 flex justify-start items-center p-6 rounded-xl">
                    <div className="text-black font-poppins">
                      <span>{item.chat}</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex flex-row space-x-3">
            <Input
              id="send"
              type="text"
              placeholder="Say something..."
              onChange={handleNewChat}
              value={chat}
              className="w-full h-14 text-black font-poppins bg-white border border-black rounded-xl p-3"
            />
            <Button
              type="submit"
              label="Send"
              className="btn w-28 rounded-xl text-white"
              // disabled={!message.trim()}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalChat;
