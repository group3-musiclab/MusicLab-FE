import React, { useState, useEffect } from "react";
import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router";
import Button from "../../components/Button";

export default function OauthLogin() {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${respose.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
              Accept: "application/json",
            },
          }
        );
        navigate("/succesOauth");
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <Button
        label="Sign in with Google 🚀"
        className="btn"
        onClick={() => login()}
      ></Button>
    </>
  );
}

export const Success = () => {
  return <>Succes Login</>;
};
