import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import axios from "axios";
import { HistoryMentor } from "../../utils/types/Datatypes";

export default function History() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [historyMentor, setHistoryMentor] = useState<HistoryMentor[]>([]);
  const [urlGoogle, setUrlGoogle] = useState<string>("");

  useEffect(() => {
    fetchDataHistoryMentor();
    fetchGoogleUrl();
  }, []);

  const fetchDataHistoryMentor = () => {
    setLoading(true);

    axios
      .get("/mentors/transactions ")
      .then((res) => {
        const data = res.data.data;
        setHistoryMentor(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const fetchGoogleUrl = () => {
    setLoading(true);

    axios
      .get("/login/oauth")
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen">
          <div className="w-[85%] mx-auto mt-10 mb-5 pl-5">
            <h1 className="text-button font-bold text-2xl">Histori Mengajar</h1>
          </div>
          <div className="overflow-x-auto ">
            <table className="table w-[85%] mx-auto ">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Student Name</th>
                  <th>Course</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Create Events</th>
                </tr>
              </thead>
              <tbody>
                {historyMentor?.map((item, index) => {
                  return (
                    <>
                      <tr className="hover">
                        <th>{index + 1}</th>
                        <td>{item?.student_name}</td>
                        <td>{item?.class_name}</td>
                        <td>{item?.start_date}</td>
                        <td>{item?.end_date}</td>
                        <td>{item?.status}</td>
                        <td>
                          {item?.status === "settlement" ? "Create Event" : "-"}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <h1 className="text-black text-md font-poppins font-semibold text-center">
            * To Create Event Please Login With your Google Accounts ?{" "}
            <span className="text-black font-bold text-lg">Click Here</span>
          </h1>
          <div className="flex w-[93%] justify-end">
            <Button
              id="btn-kembali"
              label="Kembali"
              className="btn bg-button px-32 lg:px-20 py-2 text-white border-none mt-5"
              onClick={() => navigate("/profileTeacher")}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
