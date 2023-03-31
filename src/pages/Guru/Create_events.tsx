import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Button from "components/Button";
import { useCookies } from "react-cookie";

export default function Create_events() {
  const { id } = useParams();

  localStorage.setItem("idTransaction", JSON.stringify(id));
  const transaction_id = JSON.parse(
    localStorage.getItem("idTransaction") || ""
  );
  console.log(transaction_id);

  const handleCreateEvents = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const body = {
      transaction_id: +transaction_id,
    };

    axios
      .post("oauth/create-event", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { message } = res.data;
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Button
        id="btn-submitbutton"
        label="Create Events"
        className="btn"
        onClick={(e: any) => handleCreateEvents(e)}
      />
    </>
  );
}
