// Skapa userContext så man kan komma åt User överallt

import React, { SetStateAction, Dispatch } from "react";

interface IUserContext {
    user: string;
    setUser: Dispatch<SetStateAction<string>>
}

const UserContext = React.createContext<IUserContext>({
    user: "",
    setUser: () => {}
})

export { UserContext };