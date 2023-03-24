import React from "react";

import Layout from "../../components/Layout";
import { Card } from "../../components/Card";
import Ana from "../../assets/Ana.webp";

const Home = () => {
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
              <Card
                id="title"
                name="Ana De Arnas"
                image={Ana}
                price="Rp.20000"
              />
              <Card
                id="title"
                name="Ana De Arnas"
                image={Ana}
                price="Rp.20000"
              />
              <Card
                id="title"
                name="Ana De Arnas"
                image={Ana}
                price="Rp.20000"
              />
              <Card
                id="title"
                name="Ana De Arnas"
                image={Ana}
                price="Rp.20000"
              />
              <Card
                id="title"
                name="Ana De Arnas"
                image={Ana}
                price="Rp.20000"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
