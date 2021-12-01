import React from 'react'
import Layout from '../components/layout'
import {ProtectedRoutes} from '../auth/protectecRoutes'

const Profil = () => {
    return (
        <Layout>
            <h1>Profil</h1>
        </Layout>
    )
}

export default ProtectedRoutes(Profil) 
