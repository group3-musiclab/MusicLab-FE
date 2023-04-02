import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import axios from "axios";
import { HistoryStudent } from "../../utils/types/Datatypes";
import { Link, useNavigate } from "react-router-dom";

export default function HIstory() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryStudent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getStatus = localStorage.getItem("ratingStatus");

  useEffect(() => {
    const fetchDataHistory = () => {
      setLoading(true);
      axios
        .get("/students/transactions")
        .then((res) => {
          const data = res.data.data;
          setHistory(data);
          console.log(data.ulasan);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    };
    fetchDataHistory();
  }, []);

  //

  return (
    <>
      <Layout>
        <div className="overflow-auto w-full min-h-screen">
          <div className="flex items-center sm:justify-center w-[85%] mx-auto mt-10 mb-5 pl-5">
            <h1 className="text-button font-bold text-2xl">Histori Belajar</h1>
          </div>
          <div className="overflow-x-auto ">
            <table className="table w-[85%] mx-auto ">
              {/* head */}
              <thead>
                <tr>
                  <th className="bg-button text-white">No</th>
                  <th className="bg-button text-white">Teacher Name</th>
                  <th className="bg-button text-white">Course</th>
                  <th className="bg-button text-white">Start Date</th>
                  <th className="bg-button text-white">End Date</th>
                  <th className="bg-button text-white">Status</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {history?.map((item, index) => {
                  return (
                    <>
                      <tr className="">
                        <td className="bg-slate-100 text-black border-none ">
                          {index + 1}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.mentor_name}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.class_name}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.start_date}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.end_date}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.status}
                        </td>

                        <td className="bg-slate-100 text-black border-none ">
                          {item?.status === "settlement" ? (
                            <>
                              <Button
                                id="btn-linkulasan"
                                className="btn bg-button text-white"
                                label="Beri Ulasan"
                                onClick={() =>
                                  navigate(`/ulasan/${item.mentor_id}`)
                                }
                              />
                            </>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex w-[93%] justify-end">
            <Button
              id="btn-kembali"
              label="Kembali"
              className="btn bg-button px-32 lg:px-20 py-2 text-white border-none mt-5"
              onClick={() => navigate("/ProfilStudent")}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
