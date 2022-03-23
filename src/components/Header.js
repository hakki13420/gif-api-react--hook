import React,{useState} from 'react'
import "./Header.css"
import Horloge from './Horloge'

const Header = ({setSearch}) => {

    const [searchValue, setSearchValue]=useState('')

    const submitHandel=(event)=>{
        event.preventDefault();
        setSearch(searchValue)
    }
    

    return (
        <div className='Header'>
            <form onSubmit={submitHandel} >
                <input  type="text" 
                        placeholder="Search..."
                        onChange={
                            (e)=>setSearchValue(e.target.value)
                        }     
                />               
            </form>
            <Horloge />
        </div>
    )
}

export default Header
