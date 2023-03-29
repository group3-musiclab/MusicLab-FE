import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

import images from "../../assets/Ana.webp";
import { ProfileStudent } from "../../utils/types/Datatypes";
import { useNavigate } from "react-router";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import { useCookies } from "react-cookie";

const ProfilStudent = () => {
  const MySwal = withReactContent(Swal);
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [student, setStudent] = useState<ProfileStudent>({});

  const fetchDataStudent = () => {
    setLoading(true);

    axios
      .get("students/profile")
      .then((res) => {
        const { data } = res.data;
        setStudent(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataStudent();

    return () => {
      fetchDataStudent();
    };
  }, []);

  const handleDeleteAccount = () => {
    MySwal.fire({
      title: "Are You Sure?",
      text: "You Can't Retrieve your Data After Delete your Account ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Ya, hapus akun!",
      cancelButtonText: "Batal",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete("students");
        }
      })
      .then(() => {
        removeCookie("token", { path: "/" });
        navigate("/login");
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
        <div className="flex flex-row justify-center space-x-8 p-6">
          <div className="card w-96 sm:h-full shadow-black shadow-sm mt-7">
            <div className="card-body mx-auto">
              <div className="flex mx-auto">
                <img
                  src={student?.avatar}
                  className="w-36 rounded-full object-contain"
                />
              </div>
              <div className="mt-8 mx-auto">
                <p className="text-3xl text-black font-poppins">
                  {student.name}
                </p>
              </div>
              <hr />
              <div className="card card-actions flex flex-row justify-between space-x-3 mt-10">
                <p
                  onClick={() => navigate("/editStudent")}
                  className="text-md text-black font-poppins cursor-pointer"
                >
                  Edit Profile
                </p>
                <p
                  onClick={handleDeleteAccount}
                  className="text-md text-red-500 font-poppins cursor-pointer"
                >
                  Delete Account
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-7 m-2">
            <div className="flex flex-col">
              <p className="text-5xl font-poppins text-black">
                Hi, {student.name}
              </p>
              <div className="mt-7 p-3 space-y-3 ">
                <p className="text-3xl font-poppins text-black font-bold">
                  Contact me
                </p>
                <div className="ml-5 text-lg">
                  <p className="font-poppins text-black">
                    Gmail : <span>{student.email}</span>
                  </p>
                  <p className="font-poppins text-black">
                    No Hp : <span>{student.phone}</span>
                  </p>
                  <p className="font-poppins  text-black">
                    Address : <span>{student.address}</span>
                  </p>
                </div>
                <Button
                  label="Jadwal"
                  className="btn border-none rounded-xl w-3/6 bg-[#3A2BE8] text-white font-semibold mt-5"
                  onClick={() => navigate("/historyStudent")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilStudent;
