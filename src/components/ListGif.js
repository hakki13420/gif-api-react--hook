import {useEffect, useState} from 'react'
import fetchData from '../services/fetchData'
import Gif from "./Gif"
import Loading from './Loading'
import './ListGif.css'

const ListGif=({search})=>{

    const [giflies, setGiflies]=useState([])      
    const [loading, setLoading]=useState(false)

    useEffect(() => {    
        setLoading(true)
        fetchData({search})
        .then(response =>{
            console.log('use effect')
            setLoading(false)
            setGiflies(response)
        }) 
        .catch((err)=>console.log(err))
    }, [search])

    return (
        <div className='ListGif'>
            { loading?
                <Loading />
                :giflies.length===0?
                'no items please change the keyword and try again'
                :(giflies.map(gifl=>{
                return  <Gif key={gifl.id} 
                        id={gifl.id}
                        url={gifl.url}
                        title={gifl.title}
                  />
                }))
            }    
        </div>
    )
}

export default ListGif