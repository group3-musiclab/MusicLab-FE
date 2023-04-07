import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Header from "../../assets/bg-banner.webp";
import { ClassDetail, Shcedules } from "../../utils/types/Datatypes";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Payment = () => {
  // const { idMentor } = useParams();
  // const { class_id } = useParams();
  const [cookie, setCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState<boolean>(true);
  const [course, setCourse] = useState<ClassDetail>({});
  const tax = 20000;

  const [schedules, setSchedules] = useState<Shcedules[]>([]);
  const checkToken = cookie.token;
  const { id } = useParams();
  const class_id = JSON.parse(localStorage.getItem("idClass") || "");
  const idMentor = JSON.parse(localStorage.getItem("idMentor") || "");
  const [schedule_id, setIdSchedule] = useState<string>("");
  const [start_date, setStartDate] = useState<string>("");
  const [dataAvail, setDataAvail] = useState<any>("");
  const [availCheck, setAvailCheck] = useState<string>("");
  const availData = localStorage.getItem("responAvai");

  const [urlPayment, setUrlPayment] = useState<any>("");

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const fetchDataCourseDetail = () => {
    axios
      .get(`/class/${id}`)
      .then((res) => {
        const data = res.data.data;
        setCourse(data);
        localStorage.setItem("availData", JSON.stringify(data));
        setDataAvail(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const fetchJadwalMentor = () => {
    setLoading(true);

    axios
      .get(`mentors/${idMentor}/schedules`)
      .then((res) => {
        const { data, message } = res.data;

        setSchedules(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataCourseDetail();
    fetchJadwalMentor();
  }, []);

  const handleCheck = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const body = {
      class_id: +class_id,
      schedule_id: +schedule_id,
      start_date,
    };

    axios
      .post("/schedules/check", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const message = res.data;
        const data = localStorage.setItem(
          "responAvai",
          JSON.stringify(message.message)
        );
        console.log();
        const getItem = localStorage.getItem("responAvai");
        setDataAvail(message.message);

        MySwal.fire({
          title: "Schedules Available",
          text: message,
          showCancelButton: false,
        });
      })
      .catch((err) => {
        const { message } = err.response.data;
        setAvailCheck(message);

        MySwal.fire({
          title: "Your Choosen Date is Unavailable, Pick Another Date",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handlePayment = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const body = {
      class_id: +class_id,
      schedule_id: +schedule_id,
      start_date,
    };

    axios
      .post("/transactions", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const paymentUrl = res.data.data.payment_url;
        window.open(paymentUrl, "_blank");
        window.location.href = "/historyStudent";
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Payment Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const header = {
    width: "80%",
    height: "17rem",
    backgroundImage: `url(${course.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Layout>
      <div className="w-full min-h-screen flex flex-col bg-white items-center mt-4">
        <h1 className="text-black font-bold w-9/12 flex justify-start text-2xl font-poppins lg:mt-0 -mt-8">
          {course?.name}
        </h1>
        <p className="text-slate-500 font-semibold w-9/12 flex justify-start text-xl font-poppins mt-5">
          Tingkatan Kelas : {course?.level}
        </p>
        <div
          className=" rounded-2xl bg-no-repeat bg-auto bg-center mt-6"
          style={header}
        ></div>

        <div className="flex flex-col w-10/12 min-h-screen p-7 mt-8 space-y-2">
          <div className="flex flex-row justify-between">
            <p className="text-black font-bold font-poppins">Harga :</p>
            <p className="text-black font-bold font-poppins">
              Rp. {course?.price}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            {/* <p className="text-black font-bold font-poppins">Tax :</p>
            <p className="text-black font-bold font-poppins">Rp. {tax}</p> */}
          </div>
          <hr />
          <div className="flex flex-row justify-between">
            <p className="text-black font-bold font-poppins">Total Biaya :</p>
            <p className="text-black font-bold font-poppins">
              Rp. {`${course.price}`}
            </p>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="text-black font-bold font-poppins mt-8">
                check availibility
              </p>
              <div className="flex flex-row">
                <div className="flex-1">
                  <Input
                    id="input-start_date"
                    type="date"
                    className="border-2 border-slate-700 p-2 rounded-lg mt-3 font-poppins font-semibold bg-white text-black"
                    onChange={(e: any) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  {dataAvail === "schedule available" ? (
                    <>
                      {" "}
                      <p className="text-green-500 hidden -ml-5 mt-2">
                        Tanggal Tersedia, Lanjutkan Pembayaran
                      </p>
                    </>
                  ) : (
                    <>
                      {" "}
                      <p className="text-red-500 hidden -ml-5 mt-2">
                        Tanggal Tidak Tersedia, Silahkan Pilih Hari lain
                      </p>
                    </>
                  )}
                </div>
              </div>
              <form className="w-[11rem] p-3">
                <label className="label">
                  <span className="label-text text-black font-semibold text-lg font-poppins  w-full lg:max-w-xs flex  bg-white mx-auto  "></span>
                </label>
                <select
                  id="select-role"
                  className="input input-bordered  border-slate-300  w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto  text-black font-semibold font-poppins"
                  onChange={(e: any) => setIdSchedule(e.target.value)}
                >
                  <option defaultValue={"DEFAULT"}>Pilih hari</option>
                  {schedules?.map((item) => {
                    return (
                      <>
                        <option value={item.id}>{item.day}</option>
                      </>
                    );
                  })}
                </select>
              </form>
              <Button
                label="Check Availability"
                className="btn bg-[#3A2BE8] mt-4"
                onClick={(e: any) => handleCheck(e)}
              />
              {dataAvail === "schedule available" ? (
                <Button
                  label="Continue Payment"
                  className="btn bg-[#3A2BE8] mt-4 disabled:border-slate-200 disabled:cursor-not-alloweds"
                  onClick={(e: any) => handlePayment(e)}
                />
              ) : (
                <Button
                  label="Continue Payment"
                  className="btn disabled:bg-slate-200 disabled:cursor-not-allowed mt-4"
                  onClick={(e: any) => handlePayment(e)}
                  disabled
                />
              )}
              {urlPayment && (
                <>
                  {" "}
                  <a
                    href={urlPayment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-[#3A2BE8] mt-4"
                  >
                    Proceed to Payment
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
