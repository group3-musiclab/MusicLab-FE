import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import axios from "axios";

import Layout from "../../components/Layout";
import { Card } from "../../components/Card";
import Button from "../../components/Button";

import { ProfileType } from "../../utils/types/Profile";
import { useNavigate } from "react-router";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import { InstrumenType } from "../../utils/types/Instrument";


const DetailTeacher = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [user, SetUser] = useState<ProfileType>({});
  const [loading, SetLoading] = useState<boolean>(false);
  const [cookie, removeCookie] = useCookies(["token", "role"]);
  const { id: mentor_id } = useParams();
  const [instrument, SetInstrument] = useState<InstrumenType[]>([]);
  const checkToken = cookie.token;

  useEffect(() => {
    Profile();
    Instrument();

    return () => {
      Profile();
    };
  }, []);

  function Profile() {
    axios.get(`/mentors/profile`, {
      headers: {
        Authorization: `Bearer ${checkToken}`,
      },
    })
    .then((response) => {
      const data = response.data.data;
      SetUser(data);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  function Instrument() {
    axios
      .get(`mentors/instrument`)
      .then((response) => {
        const datas = response.data.data;
        SetInstrument(datas);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleDeleteAccount = () => {
    MySwal.fire({
      title: "Are You Sure?",
      text: "You Can't Retrieve your Data After Delete your Account",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Ya, hapus akun!",
      cancelButtonText: "Batal",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete("mentors");
        }
      })
      .then(() => {
        removeCookie("token", { path: "/" });
        navigate("/");
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Error",
          text: message,
          showCancelButton: false,
        });
      });
  };

  return (
    <Layout>
      <div className="container mx-auto p-10">
        <div className="flex flex-row p-4">
          <div className="text-black font-poppins">
            <p className="text-3xl font-semibold opacity-80">Teacher</p>
            <p className="text-5xl font-bold">{user?.name}</p>
            <p className="font-semibold">{instrument}</p>
            <div className="mt-2">
              <p className="font-semibold opacity-75">Ulasan</p>
              <p className="text-sm font-bold">47.889</p>
            </div>
            <div className="mt-7">
              <p className="text-xl font-semibold">About Me</p>
              <p className="text-lg">{user?.about}</p>
            </div>
            <div className="mt-7">
              <p className="font-semibold text-xl">my Course</p>
              <div className="m-2 mt-7 grid grid-cols-2 space-x-5 gap-14">
                {/* <Card /> */}
              </div>
              <div className="grid grid-cols-3 mt-8 p-7 ml-8">
                <Button
                  label="Prev"
                  className="btn border-none w-5/6 bg-transparent text-black hover:text-white font-semibold hover:bg-[#3A2BE8]"
                />
                <p className="mx-auto text-xl text-[#3A2BE8] mt-2">1</p>
                <Button
                  label="Next"
                  className="btn border-none w-5/6 bg-transparent text-black hover:text-white font-semibold hover:bg-[#3A2BE8]"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-10/12 ml-40">
            <img src={user?.avatar} alt="photo" width={250} />
            <div className="text-black text-md font-semibold ml-16 sm:ml-10 mt-2">
              <p>
                Address : <span>{user?.address}</span>
              </p>
              <p>
                Gmail : <span>{user?.email}</span>
              </p>
              <div className="flex space-x-3 ml-4">
                {/* <img src={facebook} alt="facebook" width={25} />
                <img src={instagram} alt="instagram" width={25} />
                <img src={twitter} alt="twitter" width={25} />
                <img src={youtube} alt="youtube" width={25} /> */}
              </div>
              <button className="btn bg-[#3A2BE8] text-white mt-2 w-44">
                kirim pesan
              </button>
              <Button
                id="btn-editTeacher"
                label="Edit Profile"
                className="btn bg-[#3A2BE8] text-white mt-2 w-44 border-none"
                onClick={() => navigate(`/editTeacher/${user?.id}`)}
              />
              <Button
                id="btn-deactivateAccount"
                label="Deactivate Account"
                className="btn bg-black text-white mt-2 w-44 border-none"
                onClick={handleDeleteAccount}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailTeacher;
