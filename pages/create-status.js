import React, { useState } from 'react'
import auth0 from '../../lib/auth0'
import axios from  'axios';

const CreateStatus = () => {
    const [dados, setDados] = useState({
        status: 'bem',
        coords:{
            lat: null,
            long: null
        }
    })
    const getMyLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                setDados(old =>{
                    return {
                        ...old,
                        coords:{
                            lat: position.coords.latitude,
                            long: position.coords.longitude
                        }
                    }
                })
            })
        }
    }
    const onStatusChange = evt => {
        //Necessário guardar do lado de fora pq a função interna é chamada de forma assíncrona e o valor pode não existir mais
        const value = evt.target.value
        setDados(old =>{
            return{
                ...old,
                status: value
            }
        })
        console.log(evt.target.value);
    }
    const save = async () =>{
        await axios.post('/api/save-status', dados)
    }

    return(
        <div className="py-2 px-4">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    <h1>Status do dia:</h1>
                    <label className='block'>
                        <input type='radio' name='status' value='bem' onClick={onStatusChange}/>
                        Estou bem e sem sintomas.
                    </label>
                    <label className='block'>
                        <input type='radio' name='status' value='gripe' onClick={onStatusChange}/>
                        Estou com sintomas de gripe / resfriado.
                    </label>
                    <label className='block'>
                        <input type='radio' name='status' value='covid' onClick={onStatusChange}/>
                        Estou com sintomas de COVID. 
                    </label>
                    <br/>
                    <p> Status: {dados.status}</p>
                    <p> Localização: Latitude:{dados.coords.lat}, Longitude: {dados.coords.long}</p>
                    <br/>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getMyLocation}>Pegar a minha localização</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={save}>Salvar meu status</button> 
                    </div>
                </div>
            </div>                 
        </div>
    )
}
export default CreateStatus

export async function getServerSideProps({ req, res}){
    const session = await auth0.getSession(req)
    if (session){
        return{
            props:{
                isAuth: true,
                user: session.user,
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

