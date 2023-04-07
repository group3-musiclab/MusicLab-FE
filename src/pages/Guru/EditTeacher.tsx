import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";

import { useNavigate } from "react-router";
import { ProfileType } from "../../utils/types/Profile";
import { GenreType } from "../../utils/types/Datatypes";
import { InstrumenType } from "../../utils/types/Instrument";
import { EditProfilType } from "../../utils/types/Datatypes";
import { EditPassword } from "../../utils/types/Datatypes";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import { blockInvalidChar } from "pages/User/EditStudent";

export default function EditTeacher() {
  const [oldPassword, setOldPassword] = useState<boolean>(false);
  const [newPassword, setsetNewPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
  const [editUser, setEditUser] = useState<EditProfilType>({});
  const [genre, setGenre] = useState<GenreType[]>([]);
  const [genre_id, setGenreId] = useState<string>("");
  const [instrumentData, setInstrumentData] = useState<InstrumenType[]>([]);
  const [editPassword, setEditPassword] = useState<EditPassword>({});
  const [user, SetUser] = useState<ProfileType>();
  const [certificate_file, setSertificateFile] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [instrument_id, setId] = useState<string>("");
  const [pictures, setPictures] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const checkToken = cookie.token;

  useEffect(() => {
    profile();
    instrument();
    genres();
  }, []);

  function profile() {
    axios
      .get(`mentors/profile`)
      .then((response) => {
        const data = response.data.data;
        SetUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function genres() {
    axios
      .get("/genres")
      .then((res) => {
        const data = res.data.data;
        setGenre(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  function instrument() {
    axios
      .get("/instruments")
      .then((res) => {
        const data = res.data.data;
        setInstrumentData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  const handlePostGenre = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const body = {
      genre_id: +genre_id,
    };
    axios
      .post("mentors/genres", body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          title: "Succces",
          text: message,
          showCancelButton: false,
        });
        navigate(`/profileTeacher`);
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handlePostInstrument = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      instrument_id: +instrument_id,
    };

    axios
      .post("/mentors/instruments", body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          title: "Succes",
          text: message,
          showCancelButton: false,
        });

        navigate("/profileTeacher");
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleChangePassword = (
    value: String | File,
    key: keyof typeof editPassword
  ) => {
    let temp = { ...editPassword };
    temp[key] = value;
    setEditPassword(temp);
  };

  const handleUpdatePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    let key: keyof typeof editPassword;
    for (key in editPassword) {
      formData.append(key, editPassword[key]);
    }

    axios
      .put("/mentors/password", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          title: "Password Succesfully Updated",
          text: message,
          showCancelButton: false,
        });
        navigate("/profileTeacher");
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Please Fill with Incorrect Format",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    let key: keyof typeof editUser;
    for (key in editUser) {
      formData.append(key, editUser[key]);
    }

    axios
      .put("mentors", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data;
        setPictures(res.data.avatar);

        MySwal.fire({
          title: "Data Succesfully Updated",
          text: message,
          showCancelButton: false,
        });
        navigate("/profileTeacher");
      })
      .catch((err) => {
        const { message } = err.response.data;

        console.log(err);

        MySwal.fire({
          title: "Please Fill The Form with Correct Format",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (value: string | File, key: keyof typeof editUser) => {
    let temp = { ...editUser };
    temp[key] = value;
    setEditUser(temp);
  };

  const handlePostCredentials = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("certificate_file", certificate_file);
    formData.append("name", name);
    formData.append("type", type);

    axios
      .post("/mentors/credentials", formData)
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          title: "Succesfully Upload Certificate",
          text: message,
          showCancelButton: false,
        });
        navigate("/profileTeacher");
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Please Fill The Form with Correct Format",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading ? (
        <p>Please Wait...</p>
      ) : (
        <>
          <Layout>
            <div className="w-full min-h-screen">
              <div className="flex flex-col lg:flex-row mt-5 lg:mt-10">
                <div className="flex-1 flex-col ">
                  <h1 className="text-black font-bold font-poppins text-2xl text-center">
                    Edit Profile
                  </h1>
                  <img
                    src={`${pictures === "" ? user?.avatar : pictures}`}
                    className="w-4/12 mx-auto mt-5 rounded-2xl "
                  />
                  <h1 className="flex justify-center">*Max File Size 500kb</h1>
                  <Input
                    id="input-file"
                    type="file"
                    className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-5 border-none"
                    onChange={(e: any) => {
                      if (!e.currentTarget.files) {
                        return;
                      }
                      setPictures(
                        URL.createObjectURL(e.currentTarget.files[0])
                      );
                      handleChange(e.currentTarget.files[0], "avatar_file");
                    }}
                  />
                  <h1 className="text-center text-xl font-poppins text-black font-bold mt-12">
                    Upload Sertifikat
                  </h1>
                  <label className="label">
                    <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-full lg:max-w-xs flex  bg-white mx-auto mt-8 ">
                      Tipe Sertifikat
                    </span>
                  </label>
                  <select
                    id="select-role"
                    className="input input-bordered  border-slate-300  w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto  text-black font-semibold font-poppins"
                    onChange={(e: any) => setType(e.target.value)}
                  >
                    <option defaultValue={"DEFAULT"}>Pilih Salah Satu</option>
                    <option value="International">Internasional</option>
                    <option value="National">Nasional</option>
                  </select>
                  <label className="label">
                    <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-full lg:max-w-xs flex  bg-white mx-auto mt-8 ">
                      Nama Sertifikat
                    </span>
                  </label>
                  <Input
                    id="input-namalengkap"
                    type="input-sertifikat"
                    placeholder="Sertifkat Internasional"
                    className="input input-bordered   border-slate-300  w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto  text-black font-semibold font-poppins"
                    onChange={(e: any) => setName(e.target.value)}
                  />
                  <Input
                    id="input-file"
                    type="file"
                    className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-10 border-none"
                    onChange={(e: any) => {
                      if (!e.currentTarget.files) {
                        return;
                      }

                      setSertificateFile(e.currentTarget.files[0]);
                    }}
                  />
                  <div className="w-full flex justify-center mt-10">
                    <Button
                      id="btn-uploadsertifikat"
                      label="Upload Sertifikat"
                      className="bg-button w-[20rem]  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-900"
                      onClick={(e: any) => handlePostCredentials(e)}
                    />
                  </div>
                  {/* Instrument */}
                  <h1 className="text-center text-xl font-poppins text-black font-bold mt-12">
                    instrument you want to teach
                  </h1>
                  <select
                    className="input input-bordered  border-slate-300  w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-6  text-black font-semibold font-poppins"
                    onChange={(e: any) => setId(e.target.value)}
                  >
                    <option>Pilih Salah Satu</option>
                    {instrumentData?.map((item) => {
                      return (
                        <>
                          <option value={item.id}>{item.name}</option>
                        </>
                      );
                    })}
                  </select>
                  <div className="w-full flex justify-center mt-10">
                    <Button
                      id="btn-submitinstrument"
                      label="Update Instruments"
                      className="bg-button w-[20rem]  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-900"
                      onClick={(e: any) => handlePostInstrument(e)}
                    />
                  </div>
                  <h1 className="text-center text-xl font-poppins text-black font-bold mt-12">
                    Your Genre Music
                  </h1>
                  <select
                    className="input input-bordered  border-slate-300  w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-6  text-black font-semibold font-poppins"
                    onChange={(e: any) => setGenreId(e.target.value)}
                  >
                    <option>Pilih Salah Satu</option>
                    {genre?.map((item) => {
                      return (
                        <>
                          <option value={item.id}>{item.name}</option>
                        </>
                      );
                    })}
                  </select>
                  <div className="w-full flex justify-center mt-10">
                    <Button
                      id="btn-updatepassword"
                      label="Update Genres"
                      className="bg-button w-[20rem]  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-900"
                      onClick={(e: any) => handlePostGenre(e)}
                    />
                  </div>
                  <h1 className="text-center text-xl font-poppins text-black font-bold mt-12">
                    Update Password
                  </h1>

                  <label className="label">
                    <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-7/12 mt-5">
                      Old Password
                    </span>
                  </label>
                  <div className="center">
                    <div className="image">
                      <span
                        onClick={() => setOldPassword(!oldPassword)}
                        className="ab"
                      >
                        <i className="fa fa-eye"></i>
                      </span>

                      <Input
                        id="input-oldpassword"
                        className="input text-black font-poppins font-semibold"
                        placeholder="*******"
                        size={5}
                        name="text"
                        type={oldPassword ? "text" : "password"}
                        onChange={(e: any) =>
                          handleChangePassword(e.target.value, "old_password")
                        }
                      />
                    </div>
                  </div>

                  <label className="label">
                    <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-7/12 mt-5">
                      New Password
                    </span>
                  </label>
                  <div className="center">
                    <div className="image">
                      <span
                        onClick={() => setsetNewPassword(!newPassword)}
                        className="ab"
                      >
                        <i className="fa fa-eye"></i>
                      </span>

                      <Input
                        id="input-newpassword"
                        className="input text-black font-poppins font-semibold"
                        placeholder="*******"
                        size={5}
                        minLength={3}
                        name="text"
                        type={newPassword ? "text" : "password"}
                        onChange={(e: any) =>
                          handleChangePassword(e.target.value, "new_password")
                        }
                      />
                    </div>
                  </div>

                  <label className="label">
                    <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-7/12 mt-5">
                      Confirmation Password
                    </span>
                  </label>
                  <div className="center">
                    <div className="image">
                      <span
                        onClick={() => setConfirmPassword(!confirmPassword)}
                        className="ab"
                      >
                        <i className="fa fa-eye"></i>
                      </span>

                      <Input
                        id="input-confirmpassword"
                        className="input text-black font-poppins font-semibold"
                        placeholder="*******"
                        size={5}
                        minLength={3}
                        name="text"
                        type={confirmPassword ? "text" : "password"}
                        onChange={(e: any) =>
                          handleChangePassword(
                            e.target.value,
                            "confirmation_password"
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center mt-10">
                    <Button
                      id="btn-updatepassword"
                      label="Update Password"
                      className="bg-button w-[20rem]  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-900"
                      onClick={(e: any) => handleUpdatePassword(e)}
                    />
                  </div>
                </div>

                <div className="flex-1 lg:ml-0 ml-10">
                  <form>
                    <div className="form-control w-full mx-auto">
                      <label className="label mt-3">
                        <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-9/12">
                          Nama Lengkap
                        </span>
                      </label>
                      <Input
                        id="input-namalengkap"
                        type="text"
                        maxLength={50}
                        placeholder="marlina1998"
                        defaultValue={user?.name}
                        className="input input-bordered w-10/12 lg:w-9/12 bg-bg-input border-slate-300 text-black font-semibold font-poppins bg-white"
                        onChange={(e: any) =>
                          handleChange(e.target.value, "name")
                        }
                      />
                      <label className="label mt-3">
                        <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-9/12">
                          Deskripsi
                        </span>
                      </label>
                      <textarea
                        id="input-deskripsi"
                        defaultValue={user?.about}
                        className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-popins bg-white"
                        onChange={(e: any) =>
                          handleChange(e.target.value, "about")
                        }
                      ></textarea>

                      <label className="label mt-3">
                        <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-9/12">
                          Jenis Kelamin
                        </span>
                      </label>
                      <select
                        id="select-jeniskelamin"
                        className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                        onChange={(e: any) =>
                          handleChange(e.target.value, "sex")
                        }
                      >
                        <option disabled defaultValue={user?.sex}>
                          Pilih Salah Satu
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer Not To Say">
                          Prefer Not To Say
                        </option>
                      </select>
                      <label className="label mt-5">
                        <span className="label-text text-black font-semibold text-lg font-poppins w-10/12 lg:w-9/12">
                          No. Hp
                        </span>
                      </label>

                      <Input
                        id="input-telepon"
                        type="number"
                        min={0}
                        step={1}
                        onKeyDown={blockInvalidChar}
                        maxLength={12}
                        defaultValue={user?.phone}
                        className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                        onChange={(e: any) =>
                          handleChange(e.target.value, "phone")
                        }
                      />
                      <label className="label mt-5">
                        <span className="label-text text-black font-semibold text-lg font-poppins w-10/12 lg:w-9/12">
                          Email
                        </span>
                      </label>
                      <Input
                        id="input-email"
                        type="email"
                        maxLength={50}
                        defaultValue={user?.email}
                        placeholder="@test@gmail.com"
                        className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                        onChange={(e: any) =>
                          handleChange(e.target.value, "email")
                        }
                      />
                      <label className="label mt-5">
                        <span className="label-text text-black font-semibold text-lg font-poppins w-10/12 lg:w-9/12">
                          Instagram Account Link
                        </span>
                      </label>
                      <Input
                        id="input-socialmedia-instagram"
                        type="text"
                        defaultValue={user?.instagram}
                        placeholder=""
                        className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins bg-white"
                        onChange={(e: any) =>
                          handleChange(e.target.value, "instagram")
                        }
                      />

                      <label className="label">
                        <span className="label-text text-black font-semibold text-lg font-poppins  w-10/12 lg:w-9/12 mt-5">
                          Alamat
                        </span>
                      </label>
                      <textarea
                        id="input-address"
                        defaultValue={user?.address}
                        className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-popins bg-white"
                        onChange={(e: any) =>
                          handleChange(e.target.value, "address")
                        }
                      ></textarea>
                    </div>
                    <div className="w-full mt-10 flex flex-row">
                      <Button
                        id="btn-back"
                        label="Kembali"
                        defaultValue={user?.address}
                        className="bg-button w-[8rem] lg:w-[15rem]  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-900"
                        onClick={() => navigate("/profileTeacher")}
                      />
                      <Button
                        id="btn-Update"
                        label="Update"
                        className="bg-button w-[9rem] lg:w-[15rem]  rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer ml-5 hover:bg-blue-900"
                        onClick={(e: any) => handleUpdateProfile(e)}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Layout>
        </>
      )}
    </>
  );
}
