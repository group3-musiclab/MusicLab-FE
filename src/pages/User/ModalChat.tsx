import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import axios from "axios";

import { LayoutSec } from "../../components/Layout";
import { ChatsType } from "../../utils/types/Chat";

import Input from "../../components/Input";
import Button from "../../components/Button";

interface ChatProps {
  student_id: number;
  mentor_id: number;
}

const ModalChat: React.FC<ChatProps> = ({ student_id, mentor_id }) => {
  const [message, setMessage] = useState<string>("");
  const [chats, setChats] = useState<ChatsType[]>([]);
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  useEffect(() => {
    ChatsList();
  }, []);

  function ChatsList() {
    setLoading(true);
    axios.get(`/chats?mentor=${mentor_id}&student=${student_id}`, {
      headers: {
        Authorization: `Bearer ${checkToken}`
      }
    })
    .then((response) => {
      const data = response.data?.data;
      setChats(data);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  };
  

  const handleNewChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      student_id: student_id,
      mentor_id: mentor_id,
      chats: message
    };
    axios.post(`/chats`, body, {
      headers: {
        Authorization: `Bearer ${checkToken}`
      },
    })
    .then((response) => {
      const data = response.data.data;
      setChats([...chats, data]);
      setMessage("");
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="rounded-lg bg-white p-10">
      <div className="flex flex-col justify-center">
        <div className="card">
          <div className="card-body over">
            {chats.map((item, index) => (
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
              value={message}
              className="w-full h-14 text-black font-poppins bg-white border border-black rounded-xl p-3"
            />
            <Button
              type="submit"
              label="Send"
              className="btn w-28 rounded-xl text-white"
              disabled={!message.trim()}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalChat;
