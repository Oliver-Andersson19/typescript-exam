import React, { SetStateAction, Dispatch } from "react";


interface IUserContext {
  user: string;
  role: string;
  setUser: Dispatch<SetStateAction<string>>;
  setRole: Dispatch<SetStateAction<string>>;
}

const UserContext = React.createContext<IUserContext>({
  user: "",
  role: "",
  setUser: () => undefined,
  setRole: () => undefined,
});

export { UserContext };