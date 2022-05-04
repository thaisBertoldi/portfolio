import { createContext, ReactNode, FC, useState, useEffect } from "react";
import { ContextDTO, ReposDTO } from "../models/AllDTOs";
import api from "../service/api";

export const UserContext = createContext({});

const UserProvider = ( { children }: ContextDTO ) => {
    const [dataUser, setDataUSer] = useState([])
    const [dataRepos, setDataRepos] = useState<Array<ReposDTO>>([])

    const getDataUser = async () => {
        try {
            const {data} = await api.get('/thaisBertoldi');
            setDataUSer(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllRepos = async () => {
        try {
        const { data } = await api.get('/thaisBertoldi/repos')
        setDataRepos(data)
        console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataUser()
        getAllRepos()
    },[])

    return (
        <UserContext.Provider value={{dataUser, dataRepos}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;