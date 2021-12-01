import React, { useState, createContext, useContext,useEffect } from 'react'
import api from './axios'
import Router from "next/router"
import { setCookie, removeCookie, getCookieFromBrowser } from './cookies'
import jwt from 'jwt-decode'


const AuthContext = createContext({})


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = getCookieFromBrowser('token')
            // console.log('token',token)
            if (token) {
                // api.defaults.headers.Authorization = `Bearer ${token}`
                // const user = data.data.user
                // if(user) setuser(user)
            }
            setLoading(false)
         
        }
        loadUserFromCookies()
        
    },[user])
     
    const login = async (email, password) => {
        const data  = await api.post("/api/v1/user/login", {
            email, password
        })
        // console.log('data', data.data)
        const token=data.data.token
        if (token) {
            setCookie('token', token)
            api.defaults.headers.Authorization = `Bearer ${token}`
            const user = data.data.user
            setUser(user)
            await Router.push('/')
        }
    }

    const logout = () => {
        removeCookie('token')
        setUser(null)
        Router.push('/')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout,loading }}>
            {children}
        </AuthContext.Provider>
    )

}

export default function useAuth() {
    return useContext(AuthContext)
}


