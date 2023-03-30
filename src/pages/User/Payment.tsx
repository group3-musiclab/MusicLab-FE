import React, { useState, useEffect } from "react";
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
  const [cookie, setCookie] = useCookies(["token"]);
  const [loading, SetLoading] = useState(true);
  const [course, setCourse] = useState<ClassDetail>({});
  const tax = 20000;

  const [schedules, setSchedules] = useState<Shcedules[]>([]);
  const checkToken = cookie.token;
  const class_id = JSON.parse(localStorage.getItem("idClass") || "");
  const idMentor = JSON.parse(localStorage.getItem("idMentor") || "");
  const [schedule_id, setIdSchedule] = useState<string>("");
  const [start_date, setStartDate] = useState<string>("");
  const [dataAvail, setDataAvail] = useState<any>("");
  console.log(dataAvail);
  const availData = localStorage.getItem("responAvai");
  console.log(availData);

  const [urlPayment, setUrlPayment] = useState<any>("");
  console.log(urlPayment);

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const fetchDataCourseDetail = () => {
    axios
      .get(`/class/${class_id}`)
      .then((res) => {
        const data = res.data.data;
        setCourse(data);
        localStorage.setItem("availData", JSON.stringify(data));
        setDataAvail(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => SetLoading(false));
  };

  const fetchJadwalMentor = () => {
    SetLoading(true);

    axios
      .get(`mentors/${idMentor}/schedules`)
      .then((res) => {
        const { data, message } = res.data;
        console.log();
        setSchedules(data);

        // setSchedules(idGet);
        // setIdSchedule(idGet);

        // console.log(idGet);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => SetLoading(false));
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
        const getItem = localStorage.getItem("responAvai");
        setDataAvail(getItem);

        MySwal.fire({
          title: "Schedules Available",
          text: message,
          showCancelButton: false,
        });
      })
      .catch((err) => {
        const message = err.response.data;

        MySwal.fire({
          title: "Your Choosen Date is Unavailable",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => SetLoading(false));
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
        const message = res.data;
        const data = localStorage.setItem(
          "responsPayment",
          JSON.stringify(res.data.data.payment_url)
        );
        const getResponsePayment = localStorage.getItem("responsPayment");
        setUrlPayment(getResponsePayment);
        MySwal.fire({
          title: "Payment Succes",
          text: message,
          showCancelButton: false,
        });
      })
      .catch((err) => {
        const message = err.response.data;

        MySwal.fire({
          title: "Payment Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => SetLoading(false));
  };

  const header = {
    width: "80%",
    height: "17rem",
    backgroundImage: `url(${course.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
              <Input
                id="input-start_date"
                type="date"
                onChange={(e: any) => setStartDate(e.target.value)}
              />
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
                label="check availibility"
                className="btn bg-[#3A2BE8] mt-4"
                onClick={(e: any) => handleCheck(e)}
              />
              {availData === "schedule available" ? (
                <>
                  <Button
                    label="Continue Payment"
                    className="btn bg-[#3A2BE8] mt-4"
                    onClick={(e: any) => {
                      handlePayment(e);
                    }}
                  />
                </>
              ) : (
                <>
                  <Button
                    label="Continue Payment"
                    className="btn bg-[#3A2BE8] mt-4 disabled:border-slate-200 disabled:cursor-not-alloweds"
                    onClick={(e: any) => {
                      handlePayment(e);
                    }}
                  />
                </>
              )}
              <a href={urlPayment} target="_blank">
                Pay
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
