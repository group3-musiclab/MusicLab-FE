import React from "react";

import Layout from "../../components/Layout";
import { Card } from "../../components/Card";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto p-10">
        <div className="card shadow-black shadow-sm">
          <div className="mr-20 mt-9 flex justify-end">
            <button className="btn bg-[#3A2BE8] text-white rounded-xl w-2/12">
              Create Your Course
            </button>
          </div>
          <div className="card-body w-10/12">
            <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4 space-x-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
