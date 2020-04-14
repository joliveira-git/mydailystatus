import React, { useEffect } from 'react'
import auth0 from '../lib/auth0'
import router from 'next/router'
import { db } from '../lib/db'

const App = (props) => {
    useEffect(()=>{
        console.log(props)
        if(!props.isAuth){
            console.log('não autorizado')
            router.push('/')
        }else if(props.forceCreate){
            router.push('/create-status')
            console.log('autorizado')
        }
    })
    if (!props.isAuth || props.forceCreate){
        return null
    }

    return (
        <div>
            <h1>App</h1>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    )
}

export default App
export async function getServerSideProps({req, res}){
    // ao autenticar é gerado um cookie, que chamamos de sessão pq vai expirar
    const session = await auth0.getSession(req)
    if(session){
        const today = new Date();
        const currentDate = today.getFullYear() + '-' + today.getMonth()+1 + '-' + today.getDate();
        const todaysCheckin = await db
            .collection('markers')
            .doc(currentDate)
            .collection('checks')
            .doc(session.user.sub)
            .get()
        const todaysData = todaysCheckin.data()
        console.log(todaysCheckin)
        let forceCreate = true
        if(todaysData){
            //pode ver os outros checkins
            forceCreate = false
        }
        return{
            props:{
                isAuth: true,
                user: session.user,
                forceCreate
            }
        }
    }
    return{
        props:{
            isAuth: false,
            user: { }
        }
    }
}