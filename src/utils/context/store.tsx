import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiContext } from "./contextApi";
import { ProfileType } from "../types/Profile";
import { EditProfilType } from "../Datatypes";

interface store {
  children?: any;
}

function Store({ children }: store) {
  const [user, setUser] = useState<EditProfilType>({});

  function Profile() {
    axios
      .get(`mentors`)
      .then((response) => {
        const data = response.data;
        setUser(data);
        console.log("id", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    Profile();

    return () => {
      Profile();
    };
  }, []);

  return (
    <>
      <ApiContext.Provider value={user}>{children}</ApiContext.Provider>
    </>
  );
}

export default Store;
