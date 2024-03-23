import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [isUser, setIsUser] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ isUser, setIsUser, user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;