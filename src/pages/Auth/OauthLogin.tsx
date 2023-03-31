import React, { useState, useEffect } from "react";
import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router";
import Button from "../../components/Button";
import withReactContent from "sweetalert2-react-content";
import Swal from "utils/Swal";
import { useCookies } from "react-cookie";

export default function OauthLogin() {
  const [, setCookie] = useCookies(["token"]);
  const [token_oauth, setTokenOauth] = useState<string>("");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse: any) => {
      setTokenOauth(tokenResponse.access_token);
      console.log(tokenResponse.access_token);
    },
  });

  const handleLoginOauth = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const body = {
      token_oauth,
    };

    axios
      .post("/login/oauth", body)
      .then((res) => {
        const { data, message } = res.data;
        console.log(data.token);
        setCookie("token", data.token, { path: "/" });

        MySwal.fire({
          title: "Success Login Using Google Account",
          text: message,
          showCancelButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        const { message } = err.response.data;
        console.log(message);

        MySwal.fire({
          title: "Please Using Valid Email Account",
          text: message,
          showCancelButton: false,
        });
      });
  };

  return (
    <>
      <Button
        label="Sign in with Google 🚀"
        className="btn"
        onClick={() => login()}
      ></Button>

      <Button
        label="Get Authorize 🚀"
        className="btn"
        onClick={(e: any) => handleLoginOauth(e)}
      ></Button>
    </>
  );
}

export const Success = () => {
  return <>Succes Login</>;
};
