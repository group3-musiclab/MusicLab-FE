import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import axios from "axios";

import { ChatsType } from "../../utils/types/Chat";

import Input from "../../components/Input";
import Button from "../../components/Button";

interface Props {
  mentor_id?: number | string;
  student_id?: number | string;
}

const ModalChat: React.FC<Props> = ({ mentor_id, student_id }) => {
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

  const isMessageValid = message.trim().length > 0 && message.trim().length <= 500;


  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        mentor_id,
        student_id,
        chat: message,
      };
      const response = await axios.post(`/chats`, body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      });
      const data = response.data.data;
      // const add = {
      //   ...data,
      //   mentor_id,
      //   student_id,
      //   chat: message,
      // };
      setChats([...chats, data]);
      setMessage("");
      ChatsList();
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div className="rounded-lg bg-white p-10">
      <div className="flex flex-col justify-center">
        <div className="card-body">
          {chats?.map((item: ChatsType, index) => (
            <div key={index} className="w-full">
              <p className="text-black font-poppins font-semibold">
                {item?.sender_name}
              </p>
              <div className="bg-white border border-black  p-3 rounded-xl ml-3 break-words">
                <div className="text-black font-poppins ">
                  <span>{item?.chat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sticky space-y-4">
      {message.length > 500 && <p className="text-red-500 flex justify-end">max 500 characters</p>}
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
            disabled={!isMessageValid}
            />
        </form>
           
      </div>
    </div>
  );
};

export default ModalChat;
