import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
const {images, isLoading} = useFetchGifs( category ); 

  
    return (
   <>

  <center><h2>Búsqueda: {category}</h2></center> 
 <div className="card-grid">
{

images.map( (image) =>(

  <GifItem 
  
  key={image.id}
  {...image}
  />
 
)
  
  )

  
}

   </div>
  
   </>
  )
    }
    

