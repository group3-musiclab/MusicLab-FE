import { createContext } from "react";
import { EditProfilType } from "../types/Datatypes";
import { ProfileType } from "../types/Profile";

export const ApiContext = createContext<EditProfilType>({});
