import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import { Card } from "../../components/Card";
import Ana from "../../assets/Ana.webp";
import { MentorClass } from "../../utils/Datatypes";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Button from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<MentorClass[]>([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchDataCourse = () => {
      setLoading(false);

      axios
        .get(`mentors/${id}/class`)
        .then((res) => {
          const { data } = res.data;
          setCourse(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    };

    fetchDataCourse();
  }, []);

  const handleDeleteClass = (id: any) => {
    axios
      .delete(`class/${id}`)
      .then(() => {
        setCourse((prevState) => prevState.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  return (
    <Layout>
      <div className="container mx-auto p-10">
        <div className="card shadow-black shadow-sm">
          <div className="mr-20 mt-9 flex justify-end">
            <button className="btn bg-[#3A2BE8] text-white rounded-xl w-2/12 font-poppins">
              Create Your Course
            </button>
          </div>
          <div className="card-body w-10/12">
            <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
              {course?.map((item) => {
                return (
                  <>
                    <div className="flex flex-col">
                      <Card
                        name={item.name}
                        image={item.image}
                        price={item.price}
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
