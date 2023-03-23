import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

export default function HIstory() {
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen">
          <div className="w-[85%] mx-auto mt-10 mb-5 pl-5">
            <h1 className="text-button font-bold text-2xl">Histori Belajar</h1>
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
                  <th>Tipe</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover">
                  <th>1</th>
                  <td>Adri</td>
                  <td>
                    Complete Electronic Music Production for EDM Music Producers
                  </td>
                  <td>25/4/2023</td>
                  <td>24/5/2023</td>
                  <td>Selesai</td>
                  <td>Sesi</td>
                  <td>Beri Ulasan</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>2</th>
                  <td>Blake</td>
                  <td>How to play Drums : The Ultimate Guide to Drumming</td>
                  <td>13/4/2023</td>
                  <td>12/5/2023</td>
                  <td>Ongoing</td>
                  <td>Subscription</td>
                  <td>-</td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                  <th>3</th>
                  <td>Aubrey</td>
                  <td>
                    The Professional Bass Masterclass - Bass 1, Bass 2, Bass 3
                  </td>
                  <td>30/4/2023</td>
                  <td>7/5/2023</td>
                  <td>Selesai</td>
                  <td>Subscription</td>
                  <td>Beri Ulasan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex w-[93%] justify-end">
            <Button
              id="btn-kembali"
              label="Kembali"
              className="btn bg-button px-32 lg:px-20 py-2 text-white border-none mt-5"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
