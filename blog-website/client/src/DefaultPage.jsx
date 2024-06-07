import React, { useState, useEffect } from "react";
import Home from "./Components/home/Home.jsx";
import Account from "./Components/account/Account.jsx";
import Loader from "./Loader.jsx";

function DefaultPage() {
    const [authenticate, setAuthenticate] = useState(false);

    useEffect(()=>{
        const tokenExists = isTokenExists();

        if (tokenExists){
            const tokenExpired = isTokenExpired();

            if (!tokenExpired){
                setAuthenticate(true);
            }
            else {
                setAuthenticate(false);
                localStorage.removeItem("token");
            }
        }

    }, []);

    const isTokenExists = () => {
        const storedToken = localStorage.getItem("token");

        if (storedToken){
            return true;
        }

        return false;
    }

    const isTokenExpired = () => {
        try {
            const [header, payload, signature] = localStorage.getItem("token").split('.');

            const decodePayload = JSON.parse(atob(payload));

            if (header && signature && decodePayload && decodePayload.exp){
                const currentTime = Math.floor(Date.now()/1000);
                const expiryTime = decodePayload.exp;

                if (expiryTime > currentTime){
                    return false;
                }   
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        catch (error){
            return true;
        }
    }

    return (
        <>
            <Loader />
            
        </>
    )
} 

export default DefaultPage;