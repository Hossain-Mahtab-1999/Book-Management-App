import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user") || null)
    )
    const login = async (inputs) => {
        const res = await axios.post('http://localhost:8800/server/auths/login', inputs, { withCredentials: true })
        setCurrentUser(res.data)
        console.log(res)
    };
    //console.log(currentUser)

    const logout = async () => {
        await axios.post('http://localhost:8800/server/auths/logout', { withCredentials: true })
        setCurrentUser(null)
        // return res
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
