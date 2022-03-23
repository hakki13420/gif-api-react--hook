

const fetchData=({search})=>{
    
    const url=
    `https://api.giphy.com/v1/gifs/search?api_key=VXmfF5eMrnTSG0ewVjEJiLr7LR0tmSd4&q=${search}&limit=25&offset=0&rating=g&lang=en`
    console.log(url)
    return fetch(url)
        .then(res=>res.json())
        .then(response=>{
            const {data}=response
            const giflies=data.map(item=>{
                const {images,title,id}=item
                const {url}=images.downsized
                return {url,title,id}
            })
            return giflies
        })                   
}

export default fetchData;