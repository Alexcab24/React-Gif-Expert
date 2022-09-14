

export const GifItem = ({title, url}) => {
console.log({title, url});
    return (
      // container-gifs
 <div className = "card">
  <div>
  <img src={url} alt={title} />
<p>{title}</p>

  </div>

 </div>
  )
}
