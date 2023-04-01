import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import { Card } from "../../components/Card";
import Ana from "../../assets/Ana.webp";
import { MentorClass } from "../../utils/types/Datatypes";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<MentorClass[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(20);
  const [cookie, setCookie] = useCookies(["id"]);
  const checkId = cookie.id;

  useEffect(() => {
    fetchDataCourse(1);

    return () => {
      fetchDataCourse(1);
    };
  }, []);

  const fetchDataCourse = async (page: number) => {
    await axios
      .get(`mentors/${checkId}/class?limit=8&page=${page}`)
      .then((res) => {
        const { data } = res.data;
        setCourse(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchDataCourse(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchDataCourse(newPage);
  }

  const handleDeleteClass = (id: any) => {
    axios
      .delete(`class/${id}`)
      .then(() => {
        setCourse((prevState) => prevState.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div className="container mx-auto p-10">
        <div className="card shadow-black shadow-sm">
          <div className="flex flex-row w-full ">
            <div className=" mt-9 flex-1 flex justify-start ml-10">
              <Button
                id="btn-back"
                label="Kembali"
                className="btn bg-[#3A2BE8] text-white rounded-xl w-10/12 font-poppins"
                onClick={() => navigate("/profileTeacher")}
              />
            </div>
            <div className="flex flex-1 mt-9  justify-end">
              <Link to="/uploadCourse">
                <Button
                  id="btn-uploadnewcourse"
                  label="Upload New Course"
                  className="btn bg-[#3A2BE8] text-white rounded-xl w-10/12 font-poppins"
                />
              </Link>
            </div>
          </div>
          <div className="card-body w-10/12">
            <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
              {course?.map((item) => {
                return (
                  <>
                    <div className="flex flex-col">
                      <Card
                        name={item?.name}
                        image={item?.image}
                        price={item?.price}
                        onClick={() => navigate(`/detailCourse/${item?.id}`)}
                      />
                      <div className="flex flex-row mt-5">
                        <Button
                          id="btn-edit"
                          label="Edit"
                          className="btn  bg-bg-button border-none hover:bg-red-500 text-white"
                          onClick={() => navigate(`/editCourse/${item.id}`)}
                        />
                        <Button
                          id="btn-hapus"
                          label="Delete"
                          className="btn ml-5 bg-bg-button border-none hover:bg-red-500 text-white"
                          onClick={() => handleDeleteClass(item.id)}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="btn-group mx-auto w-full flex justify-center mt-10">
              <button
                onClick={() => prevPage()}
                disabled={page === 1}
                className="btn"
              >
                «
              </button>
              <button className="btn">{page}</button>
              <button
                onClick={() => nextPage()}
                // disabled={(page === totalPage)}
                className="btn"
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
