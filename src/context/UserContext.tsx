import { createContext, useState, useEffect } from "react";
import api from "../service/api";
import { ContextDTO, ReposDTO } from "../models/AllDTOs";

export const UserContext = createContext({});

const UserProvider = ( { children }: ContextDTO ) => {
    const [dataUser, setDataUSer] = useState([])
    const [dataRepos, setDataRepos] = useState<Array<ReposDTO>>([])
    const [loading, setLoading] = useState(true)

    const getDataUser = async () => {
        try {
            const {data} = await api.get('/thaisBertoldi');
            setDataUSer(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const getAllRepos = async () => {
        try {
        const { data } = await api.get('/thaisBertoldi/repos')
        setDataRepos(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataUser()
        getAllRepos()
    },[])

    return (
        <UserContext.Provider value={{ dataUser, dataRepos, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;