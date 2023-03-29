import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";
import pic1 from "../../assets/pic-1 (1).webp";

import Header from "../../assets/bg-banner.webp";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import { useNavigate, useParams } from "react-router";
import { EditKursus, MentorDetail } from "../../utils/types/Datatypes";
import { ClassDetail } from "../../utils/types/Datatypes";

function DetailCourse() {
  const [loading, setLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<ClassDetail>({});
  const [mentor, setMentor] = useState<MentorDetail>({});
  const idUser = localStorage.getItem("id");
  const { id } = useParams();
  const tax = 200000;
  const idClass = localStorage.setItem("idClass", JSON.stringify(id));
  const idClassGet = JSON.parse(localStorage.getItem("idClass") || "");
  console.log(idClassGet);
  const navigate = useNavigate();

  const fetchDataClassDetail = () => {
    setLoading(true);

    axios
      .get(`/class/${id}`)
      .then((res) => {
        const data = res.data.data;
        setCourse(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const fetchMentorDetail = () => {
    setLoading(true);

    axios
      .get(`/mentors/${idUser}`)
      .then((res) => {
        const data = res.data.data;
        setMentor(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataClassDetail();
    fetchMentorDetail();
  }, []);
  const header = {
    width: "80%",
    height: "25rem",
    backgroundImage: `url(${course.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col bg-white items-center mt-10">
          <h1 className="text-black font-bold w-9/12 flex justify-start text-2xl font-poppins lg:mt-0 -mt-8">
            {course.name}
          </h1>
          <h2 className="text-slate-500 font-semibold w-9/12 flex justify-start text-xl font-poppins mt-5">
            Tingkatan Kelas : {course.level}
          </h2>
          <div
            className=" rounded-2xl bg-no-repeat bg-auto bg-center mt-10"
            style={header}
          ></div>
          <div className="flex flex-col-reverse lg:flex-row w-[80%] min-h-screen mt-20">
            <div className="w-full lg:mt-0 -mt-16 lg:w-[65%] text-black">
              <div className="flex flex-col w-11/12">
                <h1 className="text-black text-2xl font-bold font-poppins">
                  Deskripsi Khusus:
                </h1>
                <p className="text-black font-semibold font-poppins text-lg mt-8">
                  {course.description}
                </p>
                <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                  Apa yang akan anda Pelajari:
                </h1>
                <p className="text-black font-semibold font-poppins text-lg mt-8">
                  {course.syllabus}
                </p>
                <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                  Prasyarat Khusus:
                </h1>
                <p className="text-black font-semibold font-poppins text-lg mt-8">
                  {course.requirement}
                </p>
                <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                  Untuk Siapa Kursus ini:
                </h1>
                <p className="text-black font-semibold font-poppins text-lg mt-8">
                  {course.for_whom}
                </p>

                <div className="flex w-full justify-center">
                  <Button
                    id="loadMore"
                    label="Load More"
                    className="w-6/12 py-2 bg-bg-button rounded-xl text-white font-poppins font-semibold mt-8 hover:bg-red-600"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[35%] w-full text-black flex justify-center sticky">
              <div className="card bg-bg-card w-full h-[35rem] items-center">
                <div className="flex flex-col w-full lg:w-[85%] lg:mt-7">
                  <div className="w-full  h-[10rem] rounded-xl">
                    <div className="flex lg:flex-row bg-slate-100 rounded-xl shadow-lg">
                      <div className="flex-1">
                        <img
                          src={mentor?.avatar}
                          className="w-full rounded-xl"
                        />
                      </div>
                      <div className="flex-1 mt-5 ml-4">
                        <h1 className="font-bold font-poppins text-[19px] lg:text-lg">
                          {mentor?.name}
                        </h1>
                        {/* <h2 className="font-semibold font-poppins text-[14px] lg:text-sm text-slate-400">
                          {mentor?.} Teacher
                        </h2> */}
                        <p className=" text-[12px] text-black lg:text-sm mt-2 ">
                          {mentor?.about}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row w-[85%] h-auto mt-32 lg:mt-5">
                  <div className="flex-1">
                    <p className="font-bold font-poppins text-sm">
                      Harga Kursus
                    </p>
                    <p className="font-bold font-poppins text-sm mt-2">Tax</p>
                  </div>
                  <div className="flex-1 flex items-end flex-col">
                    <p className="font-bold font-poppins text-sm">
                      Rp.{course.price},-
                    </p>
                    <p className="font-bold font-poppins text-sm mt-2">
                      Rp.{tax},-
                    </p>
                  </div>
                </div>
                <hr className="w-10/12 border-1 border-black mt-4" />
                <div className="flex flex-row w-[85%] h-auto mt-5">
                  <div className="flex-1">
                    <p className="font-bold font-poppins text-sm mt-2">
                      Jumlah Total
                    </p>
                  </div>
                  <div className="flex-1 flex items-end flex-col">
                    <p className="font-bold font-poppins text-sm mt-2">
                      {/* Rp. {course?.price + tax},- */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start w-[85%]">
                  <Button
                    id="btn-belikursus"
                    label="Beli Kursus"
                    className="btn bg-button px-16 py-2 text-white border-none mt-5"
                    onClick={() => navigate(`/payment/${idClassGet}`)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

const UploadCourse = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [syllabus, setSyllabus] = useState<string>("");
  const [requirement, setRequirement] = useState<string>("");
  const [for_whom, setForWhom] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const handlePostCourse = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const body = {
      name,
      level,
      description,
      syllabus,
      requirement,
      for_whom,
      price: +price,
      duration: +duration,
    };

    axios
      .post("mentors/classes", body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          title: "Succesfully Upload Course",
          text: message,
          showCancelButton: false,
        });
        navigate("/daftarKursus");
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Failed Upload Course",
          text: message,
          showCancelButton: false,
        });
      });
  };

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col bg-white items-center mt-10">
          <h1 className="text-black font-bold w-9/12 flex justify-center text-2xl font-poppins lg:mt-0 -mt-8">
            Upload Kursus
          </h1>
          <div
            className=" rounded-2xl bg-no-repeat bg-auto bg-center mt-10"
            style={{
              width: "80%",
              height: "25rem",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Input
            id="input-header-kursus"
            type="file"
            className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-10 border-none"
            onChange={(e: any) => {
              if (!e.currentTarget.files) {
                return;
              }
              setImage(URL.createObjectURL(e.currentTarget.files[0]));
            }}
          />
          <div className="flex flex-col-reverse lg:flex-row w-10/12 min-h-screen mt-5 lg:mt-16">
            <div className="flex-1 lg:pl-16">
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12">
                  Judul Kursus
                </span>
              </label>

              <Input
                id="input-judulkursus"
                type="Template"
                placeholder="Ketik Judul Kursus Anda..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
                onChange={(e: any) => setName(e.target.value)}
              />
              <label className="label" id="select-levelkursus">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12  mt-5">
                  Tingkatan Khusus / Level
                </span>
              </label>

              <select
                id="select-role"
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12  text-black font-semibold font-poppins bg-white"
                onChange={(e: any) => setLevel(e.target.value)}
              >
                <option defaultValue={"DEFAULT"}>Pilih Salah Satu</option>
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advance</option>
              </select>

              <label className="label" id="desc-kursus">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12  mt-5">
                  Deskripsi Khusus
                </span>
              </label>
              <textarea
                id="input-deskripsikursus"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
                onChange={(e: any) => setDescription(e.target.value)}
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12  mt-5">
                  Apa yang akan dipelajari
                </span>
              </label>
              <textarea
                id="input-apayangdipelajari"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12  text-black font-semibold font-popins bg-white"
                onChange={(e: any) => setSyllabus(e.target.value)}
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12 mt-5">
                  Prasyarat Khusus
                </span>
              </label>
              <textarea
                id="input-prasayrat-khusus"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
                onChange={(e: any) => setRequirement(e.target.value)}
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12 mt-5">
                  Untuk Siapa Kursus ini
                </span>
              </label>
              <textarea
                id="input-untuk-siapa-kursus-ini"
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
                onChange={(e: any) => setForWhom(e.target.value)}
              ></textarea>
              <div className="flex justify-start w-[85%]">
                <Button
                  id="btn-uploadkursus"
                  label="Upload Kursus"
                  className="btn bg-button px-32 lg:px-36 py-2 text-white border-none mt-5"
                  onClick={(e: any) => handlePostCourse(e)}
                />
              </div>
            </div>
            <div className="flex-1 lg:pl-16">
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-10/12">
                  Harga Kursus
                </span>
              </label>

              <Input
                id="input-harga-kursus"
                type="number"
                placeholder="Harga Kursus..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
                onChange={(e: any) => setPrice(e.target.value)}
              />
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-10/12">
                  Duration
                </span>
              </label>

              <Input
                id="input-duratopn"
                type="number"
                placeholder="Durasi..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
                onChange={(e: any) => setDuration(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const EditCourse = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [image, setImage] = useState<string>("");

  const [course, setCourse] = useState<EditKursus>({});
  const [editKursus, setEditKursus] = useState<EditKursus>({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDataCourseDetail = () => {
      setLoading(false);

      axios
        .get(`class/${id}`)
        .then((res) => {
          const { data } = res.data;
          setCourse(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    };
    fetchDataCourseDetail();
  }, []);

  const handleChangeCourse = (
    value: string | File,
    key: keyof typeof editKursus
  ) => {
    let temp = { ...editKursus };
    temp[key] = value;
    setEditKursus(temp);
  };

  const handleUpdateCourse = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const formData = new FormData();
    let key: keyof typeof editKursus;
    for (key in editKursus) {
      formData.append(key, editKursus[key]);
    }

    axios
      .put(`class/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          title: "Succefully Updated Course",
          text: message,
          showCancelButton: false,
        });

        navigate("/daftarKursus");
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Please Fill Form with Correct Format",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col bg-white items-center mt-10">
          <h1 className="text-black font-bold w-9/12 flex justify-center text-2xl font-poppins lg:mt-0 -mt-8">
            Upload Kursus
          </h1>
          <div
            className=" rounded-2xl bg-no-repeat bg-auto bg-center mt-10"
            style={{
              width: "80%",
              height: "25rem",
              backgroundImage: `url(${course.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h1>*Max File : 500 kb</h1>
          <Input
            id="input-header-kursus"
            type="file"
            className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-10 border-none"
            onChange={(e: any) => {
              if (!e.currentTarget.files) {
                return;
              }

              setImage(URL.createObjectURL(e.currentTarget.files[0]));

              handleChangeCourse(e.currentTarget.files[0], "image");
            }}
          />
          <div className="flex flex-col-reverse lg:flex-row w-10/12 min-h-screen mt-5 lg:mt-16">
            <div className="flex-1 lg:pl-16">
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12">
                  Judul Kursus
                </span>
              </label>

              <Input
                id="input-judulkursus"
                type="text"
                defaultValue={course.name}
                placeholder="Ketik Judul Kursus Anda..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
                onChange={(e: any) =>
                  handleChangeCourse(e.target.value, "name")
                }
              />
              <label className="label" id="select-levelkursus">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12  mt-5">
                  Tingkatan Khusus / Level
                </span>
              </label>

              <select
                id="select-role"
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12  text-black font-semibold font-poppins bg-white"
                onChange={(e: any) =>
                  handleChangeCourse(e.target.value, "level")
                }
              >
                <option defaultValue={course.level}></option>
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <label className="label" id="desc-kursus">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12  mt-5">
                  Deskripsi Khusus
                </span>
              </label>
              <textarea
                id="input-deskripsikursus"
                defaultValue={course.description}
                onChange={(e: any) =>
                  handleChangeCourse(e.target.value, "description")
                }
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins w-11/12 lg:w-10/12  mt-5">
                  Apa yang akan dipelajari
                </span>
              </label>
              <textarea
                id="input-apayangdipelajari"
                defaultValue={course.syllabus}
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12  text-black font-semibold font-popins bg-white"
                onChange={(e: any) =>
                  handleChangeCourse(e.target.value, "syllabus")
                }
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12 mt-5">
                  Prasyarat Khusus
                </span>
              </label>
              <textarea
                id="input-prasayrat-khusus"
                defaultValue={course.requirement}
                onChange={(e: any) =>
                  handleChangeCourse(e.target.value, "requirement")
                }
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
              ></textarea>
              <label className="label">
                <span className="label-text text-black font-semibold text-lg font-poppins  w-11/12 lg:w-10/12 mt-5">
                  Untuk Siapa Kursus ini
                </span>
              </label>
              <textarea
                id="input-untuk-siapa-kursus-ini"
                defaultValue={course.for_whom}
                onChange={(e: any) =>
                  handleChangeCourse(e.target.value, "for_whom")
                }
                className="textarea textarea-bordered h-32 bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-popins bg-white"
              ></textarea>
              <div className="flex justify-start w-[85%]">
                <Button
                  id="btn-updatekursus"
                  label="Update Kursus"
                  className="btn bg-button px-32 lg:px-36 py-2 text-white border-none mt-5"
                  onClick={(e: any) => handleUpdateCourse(e)}
                />
              </div>
            </div>
            <div className="flex-1 lg:pl-16">
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-10/12">
                  Harga Kursus
                </span>
              </label>

              <Input
                id="input-harga-kursus"
                type="number"
                defaultValue={course.price}
                onChange={(e: any) =>
                  handleChangeCourse(e.target.value, "price")
                }
                placeholder="Harga Kursus..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
              />
              <label className="label mt-5">
                <span className="label-text text-black font-semibold text-lg font-poppins w-10/12">
                  Duration
                </span>
              </label>

              <Input
                id="input-duration"
                type="number"
                defaultValue={course.duration}
                onChange={(e: any) =>
                  handleChangeCourse(e.target.value, "duration")
                }
                placeholder="Harga Kursus..."
                className="input input-bordered  bg-bg-input border-slate-300 w-11/12 lg:w-10/12 text-black font-semibold font-poppins bg-white"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export { DetailCourse, UploadCourse, EditCourse };
