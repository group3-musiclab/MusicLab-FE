import React from "react";
import LogoMusicLab from "../../assets/logo-musiclab.webp";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full flex overflow-auto flex-col-reverse lg:flex-row bg-white">
        <div className="flex-1 h-auto overflow-hidden">
          <div className="flex flex-col ">
            <h1 className=" text-2xl lg:text-4xl font-bold text-center  mt-8 lg:mt-32 font-poppins text-black">
              Welcome Back
            </h1>
            <p className="text-md lg:text-xl w-9/12 lg:w-6/12 mx-auto font-semibold  text-center mt-5 font-poppins text-black">
              Turn your passionate with music better with us
            </p>
            <form>
              <div className="form-control w-full mx-auto">
                <label className="label mt-3">
                  <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-6/12">
                    Email
                  </span>
                </label>
                <Input
                  id="input-username"
                  type="email"
                  placeholder="marlina1998"
                  className="input input-bordered w-10/12 lg:w-6/12 border-slate-300  mx-auto text-black font-semibold font-poppins bg-white"
                />
                <label className="label mt-5">
                  <span className="label-text text-black  font-semibold text-lg font-poppins  mx-auto w-10/12 lg:w-6/12">
                    Password
                  </span>
                </label>
                <Input
                  id="input-password"
                  type="password"
                  placeholder="********"
                  className="input input-bordered  bg-bg-input border-slate-300  mx-auto w-10/12 lg:w-6/12 text-black font-semibold font-poppins bg-white"
                />
                <label className="label">
                  <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-6/12 mt-5">
                    Role
                  </span>
                </label>
                <select
                  id="select-role"
                  className="input input-bordered w-10/12 lg:w-6/12 border-slate-300  mx-auto text-black font-semibold font-poppins bg-white"
                  defaultValue={"DEFAULT"}
                >
                  <option disabled selected>
                    Pilih Salah Satu
                  </option>
                  <option value="Student">Student</option>
                  <option value="Mentor">Mentor</option>
                </select>
              </div>
              <div className="text-center w-full  mt-10">
                <Button
                  id="btn-login"
                  label="Login"
                  className="bg-button w-10/12 lg:w-6/12 rounded-lg py-2 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
                  onClick={() => navigate("/homepage")}
                />
              </div>
            </form>
            <p className="text-center text-black  font-semibold mt-5 font-poppins">
              Don't Have an Account?{" "}
              <span className="font-bold font-poppins">
                <Link to="/register">Register</Link>
              </span>
              <div className="pb-16"></div>
            </p>
          </div>
        </div>
        <div className="flex flex-col  flex-1 w-full h-auto justify-center items-center text-6xl font-bold text-white">
          <h2 className="text-button font-poppins mb-10 hidden lg:flex">
            MusicLab
          </h2>
          <img src={LogoMusicLab} className=" mt-10 lg:mt-0 w-4/12" />
          <p className="text-slate-400 text-sm mt-2">Logo by Catalyststuff</p>
        </div>
      </div>
    </>
  );
};

export default Login;
