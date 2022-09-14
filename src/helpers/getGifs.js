export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fvMHm5i7hexZZHP3hdXLpasa6HhBNxPE&q=${category}&limit=21`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return{  
            id: img.id,
            title:  img.title,
             url: img.images.downsized_medium.url 
         } ;


    }
    
    )
    return gifs;
//     console.log(gifs)   
//  console.log(data); 
}