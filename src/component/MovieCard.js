
import React from 'react'

function MovieCard({Movies, search}) { 

    return (
        <div className ='film'>

{Movies.filter(el=>el.title.toUpperCase().includes(search.toUpperCase().trim())).map((el)=>(
<div >
<img src={el.posterURL} alt={el.title}/>  
<h2>{el.rating} </h2>
<h2>{el.title} </h2>
<h3> {el.description} </h3>
</div>
) )  } 
       
        </div>
    )
    }
    export default MovieCard 
