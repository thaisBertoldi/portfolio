import { createContext, ReactNode, FC, useState, useEffect } from "react";
import { ENDPOINT_REPOS } from "../constants";
import api from "../service/api";

export const UserContext = createContext({});

const UserProvider: FC<any> = ( { children } ) => {
    const [dataUser, setDataUSer] = useState([])

    const getDataUser = async () => {
        try {
            const {data} = await api.get('/thaisBertoldi');
            setDataUSer(data)
            console.log(data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getDataUser()
    },[])

    return (
        <UserContext.Provider value={{dataUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;