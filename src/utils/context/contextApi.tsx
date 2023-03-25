import { createContext } from "react";
import { EditProfilType } from "../Datatypes";
import { ProfileType } from "../types/Profile";

export const ApiContext = createContext<EditProfilType>({});
