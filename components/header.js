import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useAuth from '../auth/context'



const Header = () => {
    const router = useRouter()
    const {isAuthenticated,user,logout}=useAuth()


    return (
        <div className='header'>
            <nav>
                <ul>{
                    router.pathname === '/' ?
                        <li className="active">
                            <Link href='/'>Home</Link>
                        </li> : <li>
                            <Link href='/'>Home</Link>
                        </li>
                }

                    {
                        router.pathname === '/profil' ?
                            <li className="active">
                                <Link href='/profil'>Profil</Link>
                            </li> : <li>
                                <Link href='/profil'>Profil</Link>
                            </li>
                    }

                    {
                        isAuthenticated && (
                            <>
                              <span>
                                Bonjour {user.firstName}
                                </span>
                                <button onClick={logout}>Deco</button>
                                </>
                            
                       )
                    }
                    {
                        !isAuthenticated && (
                            <>
                                {
                                  router.pathname === '/login' ?
                            <li className="active">
                                <Link href='/login'>Login</Link>
                            </li> : <li>
                                <Link href='/login'>Login</Link>
                            </li>    
                               } 
                                </>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Header
