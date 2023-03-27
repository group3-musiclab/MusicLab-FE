import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import axios from "axios";

import Layout from "../../components/Layout";
import { Card } from "../../components/Card";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { ProfileType } from "../../utils/types/Profile";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import { InstrumenType } from "../../utils/types/Instrument";
import { GenreType, Shcedules } from "../../utils/types/Datatypes";
import ModalChat from "../User/ModalChat";
import Input from "../../components/Input";

const DetailTeacher = () => {
  const idUsers = localStorage.getItem("id");
  const { id } = useParams();
  const { instrument_id } = useParams();
  const { genre_id } = useParams();
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [user, SetUser] = useState<ProfileType>({});
  const [loading, SetLoading] = useState<boolean>(false);
  const [cookie, removeCookie] = useCookies(["token", "role"]);
  const [genre, setGenre] = useState<GenreType[]>([]);
  // console.log(`id=${idUsers} || userId=${user.id}`);
  const [day, setDay] = useState<string>("");
  const [start_time, setStartTime] = useState<string>("");
  const [end_time, setEndTime] = useState<string>("");
  const [schedules, setSchedules] = useState<Shcedules[]>([]);
  const [instrument, SetInstrument] = useState<InstrumenType[]>([]);
  const checkToken = cookie.token;
  const [schduleId, setScheduleId] = useState<number>();
  useEffect(() => {
    Profile();
    Instrument();
    Genre();

    return () => {
      Profile();
      Instrument();
      Genre();
    };
  }, []);

  function Profile() {
    axios
      .get(`/mentors/${id}`)
      .then((response) => {
        const data = response.data.data;
        SetUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Instrument() {
    axios
      .get(`mentors/${id}/instruments`)
      .then((response) => {
        const datas = response.data.data;
        console.log(datas);
        SetInstrument(datas);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Genre() {
    axios
      .get(`mentors/${id}/genres`)
      .then((response) => {
        const datas = response.data.data;
        setGenre(datas);
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

  const handleDeleteIstrument = () => {
    MySwal.fire({
      title: "Are You Sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Ya, hapus Instrument!",
      cancelButtonText: "Batal",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`mentors/instruments/${instrument_id}`);
        }
      })
      .then(() => {
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

  const handleDeleteGenre = () => {
    MySwal.fire({
      title: "Are You Sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Ya, hapus Genre!",
      cancelButtonText: "Batal",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`mentors/genres/${genre_id}`);
        }
      })
      .then(() => {
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

  const handlePostJadwal = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const body = {
      day,
      start_time,
      end_time,
    };

    axios
      .post("mentors/schedules", body)
      .then((res) => {
        const { data, message } = res.data;

        MySwal.fire({
          title: "Succesfully Uploaded Schedule",
          text: message,
          showCancelButton: false,
        });
        setSchedules((prevState) => [...prevState, data]);
        // window.location.reload(false);
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Failed Uploaded Schedule",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => SetLoading(false));
  };

  useEffect(() => {
    const fetchJadwalMentor = () => {
      SetLoading(true);

      axios
        .get(`mentors/${id}/schedules`)
        .then((res) => {
          const { data, message } = res.data;
          setSchedules(data);

          // console.log(schduleId);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => SetLoading(false));
    };
    fetchJadwalMentor();
  }, []);

  const handleDeleteSchedule = (id: any) => {
    axios
      .delete(`schedules/${id}`)
      .then(() => {
        setSchedules((prevState) => prevState.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => SetLoading(false));
  };

  return (
    <Layout>
      <div className="container mx-auto p-10">
        <div className="flex flex-row w-[80%] mx-auto p-4">
          <div className=" flex-1 text-black font-poppins">
            <p className="text-3xl font-semibold opacity-80">Teacher</p>
            <p className="text-5xl font-bold">{user?.name}</p>
            <div className="flex flex-row ">
              <div className="font-semibold space-x-2">
                {instrument?.map((item, index) => (
                  <>
                    <a key={index} className="text-black">
                      {item.name} Teacher,
                    </a>
                    {/* <p onClick={handleDeleteIstrument}>Delete</p> */}
                  </>
                ))}
              </div>
              {/* <div className="ml-5">||</div> */}
              <div className="font-semibold space-x-2 ml-5">
                {genre?.map((item, index) => (
                  <>
                    <a key={index} className="text-black">
                      Instrument {item.name}
                    </a>
                    {/* <p onClick={handleDeleteGenre}>Delete</p> */}
                  </>
                ))}
              </div>
            </div>
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

          <div className="w-full md:w-10/12  flex-1 flex items-end flex-col ">
            <img
              src={user?.avatar}
              alt="photo"
              width={250}
              className="rounded-2xl"
            />
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

              {idUsers == user.id ? (
                <>
                  <Link to={user?.instagram}>
                    <Button
                      id="btn-socialmedia"
                      label="Social Media"
                      className="border-2 font-poppins font-semibold border-[#3A2BE8] text-[#3A2BE8] py-2 px-12 rounded-xl mt-5 hover:bg-[#3A2BE8] hover:text-white"
                    />
                  </Link>
                  <label
                    htmlFor="my-modal-5"
                    className="btn bg-[#3A2BE8] text-white mt-2 px-16 border-none"
                  >
                    Lihat Chat
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-5"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-white">
                      {/* <ModalChat /> */}
                      <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button
                    id="btn-editTeacher"
                    label="Edit Profile"
                    className="btn bg-[#3A2BE8] text-white mt-2 px-16 border-none"
                    onClick={() => navigate(`/editTeacher/${user?.id}`)}
                  />
                  {/* <Button
                    id="btn-deactivateAccount"
                    label="Deactivate Account"
                    className="btn bg-black text-white mt-2 px-8 border-none"
                    onClick={handleDeleteAccount}
                  /> */}
                  <Button
                    id="btn-kursussaya"
                    label="Kursus Saya"
                    className="btn bg-[#3A2BE8] text-white mt-2 px-16 border-none"
                    onClick={() => navigate("/daftarKursus")}
                  />

                  <details className="border-2 border-black p-4 rounded-2xl mt-5">
                    <summary>Tambah Jadwal</summary>
                    <form className="w-[11rem] p-3">
                      <label className="label">
                        <span className="label-text text-black font-semibold text-lg font-poppins  w-full lg:max-w-xs flex  bg-white mx-auto  "></span>
                      </label>
                      <select
                        id="select-role"
                        className="input input-bordered  border-slate-300  w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto  text-black font-semibold font-poppins"
                        onChange={(e: any) => setDay(e.target.value)}
                      >
                        <option defaultValue={"DEFAULT"}>Pilih hari</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                      </select>
                    </form>
                    <div className="flex flex-row gap-2">
                      <Input
                        id="input-startTime"
                        type="time"
                        className="w-[50%] bg-slate-100 text-black border-1 border-black rounded-lg p-2"
                        onChange={(e: any) => setStartTime(e.target.value)}
                      />
                      <Input
                        id="input-endTime"
                        type="time"
                        className="w-[50%] bg-slate-100 text-black border-1 border-black rounded-lg p-2"
                        onChange={(e: any) => setEndTime(e.target.value)}
                      />
                    </div>
                    <Button
                      id="btn-jadwal"
                      type="submit"
                      className="btn bg-[#3A2BE8] text-white border-none mt-2 w-full"
                      label="Upload Jadwal"
                      onClick={(e: any) => handlePostJadwal(e)}
                    />
                  </details>

                  <details className="border-2 border-black p-4 rounded-2xl mt-5">
                    <summary>Lihat Jadwal</summary>
                    <div className="w-[13rem] p-2">
                      {schedules?.map((item, index) => {
                        return (
                          <>
                            <div key={index} className="flex flex-row">
                              <div className="w-[50%] text-sm">{item?.day}</div>
                              <div className="w-[50%] flex justify-end">
                                <p className="text-sm">{item?.start_time}</p>
                                <p> - </p>
                                <p className="text-sm">{item?.end_time}</p>
                                <Button
                                  id="btn-delete"
                                  className="ml-2 -mt-1"
                                  label="x"
                                  onClick={() => handleDeleteSchedule(item.id)}
                                />
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </details>
                </>
              ) : (
                <>
                  {" "}
                  <label
                    htmlFor="my-modal-5"
                    className="btn bg-[#3A2BE8] text-white mt-2 px-16 border-none"
                  >
                    Lihat Chat
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-5"
                    className="modal-toggle"
                  />
                  <details className="border-2 border-black p-4 rounded-2xl mt-5">
                    <summary>Lihat Jadwal</summary>
                    <div className="w-[11rem] p-2">
                      {schedules?.map((item) => {
                        return (
                          <>
                            <div className="flex flex-row">
                              <div className="w-[50%] text-sm">{item.day}</div>
                              <div className="w-[50%] flex justify-end">
                                <p className="text-sm">{item.start_time}</p>
                                <p> - </p>
                                <p className="text-sm">{item.end_time}</p>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </details>
                  {/* <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-white">
                      <ModalChat />
                      <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">
                          Close
                        </label>
                      </div>
                    </div>
                  </div> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailTeacher;
