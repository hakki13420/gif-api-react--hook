import "./Gif.css"
const Gif=({url,title,id})=>{
    
    return (
        <div className="gif">
            <img  src={url}                     
                alt={id}                     
            />
        </div> 
    )
}

export default Gif
