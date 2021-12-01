import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import useAuth from '../auth/context'
import { useRouter } from 'next/router'
import {RedirectFromServer} from '../auth/cookies'

const Login = () => {
    const { login, isAuthenticated } = useAuth()
    const router = useRouter()
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated])


    const onSubmit = event => {
        event.preventDefault()
        login(values.email, values.password)
    }

    return (

        <Layout>
            <div className='login'>
                <h1>Formulaire de connexion</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">E-mail</label><br />
                    <input type="email" placeholder="Votre email"
                        onChange={(e) => {
                            setValues({
                                ...values,
                                email: e.target.value
                            })
                        }}

                    /><br />
                    <label htmlFor="password">Mot de passe</label><br />
                    <input type="password" placeholder="mot de passe"
                        onChange={(e) => {
                            setValues({
                                ...values,
                                password: e.target.value
                            })
                        }}

                    /><br />
                    <button type="submit" value="Envoyer">Connexion</button>
                </form>
            </div>

        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    RedirectFromServer(context)
    return {
        props:{}
    }
}

export default Login
