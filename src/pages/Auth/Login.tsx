import React, { useState, useEffect } from "react";
import LogoMusicLab from "../../assets/logo-musiclab.webp";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";

const Login = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["token", "role"]);
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    if (email && password && role) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    return () => {
      setDisabled(disabled);
    };
  }, [email, password, role]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const body = {
      email,
      password,
      role,
    };

    axios
      .post("/login", body)
      .then((res) => {
        const { data, message } = res.data;
        console.log(data.token);

        setCookie("token", data.token, { path: "/" });
        localStorage.setItem("role", data.role);
        localStorage.setItem("id", data.id);
        MySwal.fire({
          title: "Welcome to MusicLab",
          text: message,
          showCancelButton: false,
        });

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        const { message } = err.response.data;

        MySwal.fire({
          title: "Incorrect Email And Password",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleRole = (e: any) => {
    setRole(e.target.value);
  };

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
            <form onSubmit={handleLogin}>
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
                  onChange={(e: any) => setEmail(e.target.value)}
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
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <label className="label">
                  <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-6/12 mt-5">
                    Role
                  </span>
                </label>
                <select
                  id="select-role"
                  className="input input-bordered w-10/12 lg:w-6/12 border-slate-300  mx-auto text-black font-semibold font-poppins bg-white"
                  onChange={handleRole}
                >
                  <option defaultValue={"DEFAULT"}>Pilih Role</option>
                  <option value="Student">Student</option>
                  <option value="Mentor">Mentor</option>
                </select>
              </div>
              <div className="text-center w-full  mt-10">
                <Button
                  id="btn-login"
                  label="Login"
                  className="bg-button w-10/12 lg:w-6/12 rounded-lg py-2 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
                  loading={loading || disabled}
                />
                <Button
                  id="btn-login"
                  label="Login With Google Account"
                  className="bg-button w-10/12 lg:w-6/12 rounded-lg py-2 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
                  onClick={() => navigate("/oauthLogin")}
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
