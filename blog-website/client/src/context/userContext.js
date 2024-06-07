import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext(null);

const UserProvider = ({children}) => {
    let token = Cookies.get("token");
    let decodedPayload = null;

    if (token){
        const [header, payload, signature] = token.split('.');

        if (header && signature){
            decodedPayload = JSON.parse(atob(payload));

            const currentDate = Math.floor(Date.now()/1000);
            const expiryDate = decodedPayload.exp;

            if (currentDate >= expiryDate){
                Cookies.remove("token");
                token = null;
            }
        }
    }

    const [isUser, setIsUser] = useState(token ? true : false);
    const [user, setUser] = useState(token ? decodedPayload : null);

    return (
        <UserContext.Provider value={{ isUser, setIsUser, user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;