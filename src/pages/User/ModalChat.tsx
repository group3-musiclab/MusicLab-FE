import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import axios from "axios";

import { LayoutSec } from "../../components/Layout";
import { ChatsType } from "../../utils/types/Chat";

import Input from "../../components/Input";
import Button from "../../components/Button";

interface ChatProps {
  mentor_id: any;
  student_id: any;
}

const ModalChat: React.FC<ChatProps> = ({mentor_id, student_id}) => {
  const [message, setMessage] = useState<string>("");
  const [chats, setChats] = useState<ChatsType[]>([]);
  const [loading, SetLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  useEffect(() => {
    ChatsList();
  }, [mentor_id, student_id]);

  function ChatsList() {
    SetLoading(true);
    axios.get(`/inbox`, {
      headers: {
        Authorization: `Bearer ${checkToken}`
      }
    })
    .then((response) => {
      const data = response.data.data;
      setChats(data);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  const handleSendMessage = () => {
    const body = {
      mentor_id,
      student_id,
      message,
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
          <div className="card-body">
          {loading ? (
            <p>No Message.</p>
           ) : chats.map((items) => (
             <>
                <div className="mx-auto -mt-7">
                  <p className="text-black text-3xl font-poppins">{items.sender_name}</p>
                </div><div className="w-7/12 mt-11">
                  <p className="text-black font-poppins font-semibold">
                    {items.sender_name}
                  </p>
                  <div className="bg-white border border-black w-full h-14 flex justify-start items-center p-6 rounded-xl">
                  <div className="text-black font-poppins">
                  <span>{items.chat}</span>
                  </div>
                </div>
                      <div className="mt-6">
                        <p className="text-black font-poppins font-semibold">
                          {items.receiver_name}
                        </p>
                        <div className="bg-white border border-black w-full h-14 flex justify-start items-center p-6 rounded-xl">
                          <div className="text-black font-poppins">
                            <span>{items.chat}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    </>
                ))}
          </div>
          <form className="flex flex-row space-x-3">
             <Input
              id="send"
              type="text"
              placeholder="Say something..."
              onChange={(e: any) => setMessage(e.target.value)}
              value={message}
              className="w-full h-14 text-black font-poppins bg-white border border-black rounded-xl p-3"
              />
              <Button
              type="submit"
              label="Send"
              className="btn w-28 rounded-xl text-white"
              onClick={handleSendMessage}
              disabled={!message.trim()}
               />
           </form>
        </div>
      </div>
    </div>
  );
};

export default ModalChat;
