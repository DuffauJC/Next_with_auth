import React from 'react'
import Layout from '../components/layout'
import {AdminRoute} from '../auth/adminRoutes'

const Dashboard = () => {
    return (
        <Layout>
            <h1>Tableau de bord</h1>
        </Layout>
    )
}

export default AdminRoute(Dashboard) 
