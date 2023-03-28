import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import axios from "axios";

import { LayoutSec } from "../../components/Layout";
import { ChatsType } from "../../utils/types/Chat";

import Input from "../../components/Input";
import Button from "../../components/Button";


interface Chat {
  id: number;
  sender: string;
  message: string;
}

interface Props {
  mentor_id?: number;
  student_id?: number;
}


const ModalChat: React.FC<Props> = ({ mentor_id, student_id }) => {
  // const { mentor_id, student_id } = useParams();
  const [message, setMessage] = useState<string>("");
  const [chats, setChats] = useState<ChatsType[]>([]);
  const [loading, setLoading] = useState(false);
  const [cookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  useEffect(() => {
    ChatsList();
  }, [mentor_id, student_id]);

  function ChatsList() {
    setLoading(true);
    console.log("mentor_id", mentor_id);
    console.log("student_id", student_id);
    axios
      .get(`/chats?mentor=${mentor_id}&student=${student_id}`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setChats(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleNewChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        student_id,
        mentor_id,
        chat: message,
      };
      const response = await axios.post(`/chats`, body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      });
      const data = response.data.data;
      // console.log("sendername", response.data.data.sender_name);
      setChats((prevChats) => [...prevChats, data]);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(
  //   "sender",
  //   chats.map((item) => item.sender_name)
  // );

  return (
    <div className="rounded-lg bg-white p-10">
      <div className="flex flex-col justify-center">
        <div className="card">
          <div className="card-body">
            {chats &&
              chats.map((item: any, index) => (
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
              ))}
          </div>
        </div>
      </div>
      <div className="sticky">
        <form onSubmit={handleSendMessage} className="flex flex-row space-x-3">
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
            // disabled={!message.trim()}
          />
        </form>
      </div>
    </div>
  );
};

export default ModalChat;
