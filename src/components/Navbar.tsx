import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";
import { Link } from "react-router-dom";
import { ApiContext } from "../utils/context/contextApi";
import MainHomePage from "../pages/MainHomePage";

const ReusableNav = () => {
  const id = localStorage.getItem("id");
  const user = useContext(ApiContext);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [color, setColor] = useState();
  const checkToken = cookies.token;

  const checkRole = localStorage.getItem("role");

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    navigate("/login");
    MySwal.fire({
      title: "See Ya",
      text: "You have been Logged out",
      showCancelButton: false,
    });
  };
  return (
    <>
      <div className="navbar mx-auto p-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-white font-bold font-poppins">Home</a>
              </li>
              <li>
                <a className="text-white font-bold font-poppins">About Us</a>
              </li>
              <li>
                <a className="text-white font-bold font-poppins">Service</a>
              </li>
              <li>
                <a className="text-white font-bold font-poppins">Testimonial</a>
              </li>
              <li>
                <a
                  className="text-white font-bold font-poppins"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>

          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl text-black font-poppins font-bold"
          >
            MusicLab
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          {<MainHomePage /> ? <></> : <></>}
          <ul className="menu menu-horizontal px-1 lg:flex hidden">
            <li>
              <Link
                to="/#myElement"
                className="text-black font-bold font-poppins"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "/", hash: "#service" }}
                className="text-black font-bold font-poppins"
              >
                Service
              </Link>
            </li>
            <li>
              <a className="text-black font-bold font-poppins">Testimonial</a>
            </li>
            <li>
              <a
                className="text-black font-bold font-poppins"
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>
          </ul>
          {checkToken && checkRole === "Student" ? (
            <>
              {" "}
              <Link
                to="/profile"
                className="btn bg-white text-black font-poppins font-bold hover:bg-black hover:text-white"
              >
                Profile
              </Link>
            </>
          ) : checkToken && checkRole === "Mentor" ? (
            <>
              {" "}
              <Link
                to={`profileTeacher/${id}`}
                className="btn bg-white text-black font-poppins font-bold hover:bg-black hover:text-white"
              >
                Profile
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Link
                to="/login"
                className="btn bg-white text-black font-poppins font-bold hover:bg-black hover:text-white"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

// const NavMain = () => {
//   const user = useContext(ApiContext);
//   const MySwal = withReactContent(Swal);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState<boolean>(false);
//   const [cookies, setCookie, removeCookie] = useCookies(["token"]);
//   const checkToken = cookies.token;
//   const id = localStorage.getItem("id");
//   const checkRole = localStorage.getItem("role");

//   const handleLogout = () => {
//     removeCookie("token");
//     navigate("/login");
//     MySwal.fire({
//       title: "See Ya",
//       text: "You have been Logged out",
//       showCancelButton: false,
//     });
//   };
//   return (
//     <>
//       <div className="navbar mx-auto p-8">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <a className="text-white font-bold font-poppins">Home</a>
//               </li>
//               <li>
//                 <a className="text-white font-bold font-poppins">About Us</a>
//               </li>
//               <li>
//                 <a className="text-white font-bold font-poppins">Service</a>
//               </li>
//               <li>
//                 <a className="text-white font-bold font-poppins">Testimonial</a>
//               </li>
//               <li>
//                 <a
//                   className="text-white font-bold font-poppins"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <Link
//             to="/"
//             className="btn btn-ghost normal-case text-2xl text-white font-poppins font-bold"
//           >
//             MusicLab
//           </Link>
//         </div>
//         <div className="navbar-center hidden lg:flex"></div>
//         <div className="navbar-end">
//           <ul className="menu menu-horizontal px-1 lg:flex hidden">
//             <li>
//               <a className="text-white font-bold font-poppins">Home</a>
//             </li>
//             <li>
//               <a className="text-white font-bold font-poppins">About Us</a>
//             </li>
//             <li>
//               <a className="text-white font-bold font-poppins">Service</a>
//             </li>
//             <li>
//               <a className="text-white font-bold font-poppins">Testimonial</a>
//             </li>
//           </ul>
//           {checkToken && checkRole === "Student" ? (
//             <>
//               {" "}
//               <Link
//                 to="/profile"
//                 className="btn bg-white text-black font-poppins font-bold hover:bg-black hover:text-white"
//               >
//                 Profile
//               </Link>
//             </>
//           ) : checkToken && checkRole === "Mentor" ? (
//             <>
//               {" "}
//               <p
//                 onClick={() => navigate(`profileTeacher/${id}`)}
//                 className="btn bg-white text-black font-poppins font-bold hover:bg-black hover:text-white"
//               >
//                 Profile
//               </p>
//             </>
//           ) : (
//             <>
//               {" "}
//               <Link
//                 to="/login"
//                 className="btn bg-white text-black font-poppins font-bold hover:bg-black hover:text-white"
//               >
//                 Login
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

export { ReusableNav };
