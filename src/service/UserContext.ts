import React, { SetStateAction, Dispatch } from "react";


interface IUserContext {
  user: string;
  role: string; // New property to store the user's role
  setUser: Dispatch<SetStateAction<string>>;
  setRole: Dispatch<SetStateAction<string>>; // Function to set the user's role
}

const UserContext = React.createContext<IUserContext>({
  user: "",
  role: "", // Initialize with a default role (e.g., "guest")
  setUser: () => undefined,
  setRole: () => undefined, // Initialize the setRole function
});

export { UserContext };