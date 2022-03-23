import {useState, useEffect} from 'react'
import './Horloge.css'

const Horloge=()=>{
    
    const [horloge, setHorloge]=useState(new Date())
    let st
    const gettime=()=>{
        st=setTimeout(()=>{
            setHorloge(new Date())
        },1000)
    }
    const displayTime=(date)=>{
        return date.getHours()+":"+date.getMinutes()+
        ":"+date.getSeconds()
    }

    useEffect(() => {
        clearTimeout(st)
        gettime()        
        
    }, [horloge])
    return(
        <div className="Horloge">
             {
                displayTime(horloge)
             }
        </div>
    )
}

export default Horloge