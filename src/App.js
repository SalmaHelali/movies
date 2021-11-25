import MovieCard from './component/MovieCard'

import './App.css'
import React from 'react'
import Home from './component/Navbar'
// Image
import Agneepath from './images/agneepath.jpg'
import Friendzone from './images/Friendzone.jpg'
import Dora from './images/dora.jpg'
import Aladdin from './images/Aladdin.jpg'
import Tick from './images/Tick.jpg'
import Voyage from './images/Voyage.jpg'

import {useState}  from 'react' 
import Add from './component/Add'
import Filter from './component/Filter'
function App() {   


    const [ Movies,setMovies ]=useState(
        [ 
         
                
       {title: 'Agneepath'
         ,posterURL : Agneepath 
         ,rating:'3  ' ,
          description:  "Un jeune homme (Hrithik Roshan) devient le lieutenant d'un seigneur de crime comme faisant parti d'un plan à long term de venger le meurtre de son père." ,},

             {title: 'Friendzone'
             ,posterURL : Friendzone
             ,rating:'2' ,
              description:"Thibault, un romantique plein d'espoir, croit que sa chance pourrait tourner lorsque des étincelles jaillissent entre lui et Rose. Mais peut-il passer de sa meilleure amie à son petit ami ?" ,},
            
             { title: 'Dora'
            ,posterURL : Dora  
             ,rating:'5' ,
             description:"Après des années à explorer la jungle avec ses parents, Dora se prépare à vivre l'épreuve la plus difficile de sa vie : l'entrée au lycée ! Son âme d'exploratrice resurgit quand elle doit voler à la rescousse de ses parents en danger. Accompagnée de son fidèle singe Babouche, de son cousin Diego et de nouveaux amis hauts en couleur, Dora embarque dans une folle aventure qui l'amènera à percer le mystère de la Cité d'or perdue." ,} ,
 
                  { title: 'Aladdin'
                  ,posterURL : Aladdin  
                  ,rating:'1' ,
                   description:" Lorsqu'un charmant garçon des rues du nom d'Aladdin cherche à conquérir le coeur de la belle, énigmatique et fougueuse princesse Jasmine, il fait appel au tout puissant Génie, le seul qui puisse lui permettre de réaliser trois voeux, dont celui de devenir le prince Ali afin de mieux accéder au palais." ,},  
             

                   { title: 'Voyage vers la lune'
                   ,posterURL : Voyage
                   ,rating:'4' ,
                    description:"Une jeune fille brillante et passionnée construit une fusée pour se rendre sur la lune et prouver l'existence d'une légendaire déesse lunaire. C'est alors qu'elle se retrouve embarquée dans une quête inattendue. En effet, elle découvre un univers féerique peuplé de créatures fantastiques." ,}  ,

                    { title: 'Tick Tick Boom'
                    ,posterURL : Tick
                    ,rating:'4' ,
                     description:"Tick, Tick... Boom ! est un film biographique américain de 2021 réalisé par Lin-Manuel Miranda avec un scénario de Steven Levenson, d'après la comédie musicale du même nom de Jonathan Larson. Le film met en vedette Andrew Garfield, Robin de Jesús, Alexandra Shipp, Joshua Henry, avec Judith Light, et Vanessa Hudgens." ,} ,

           ])

            
                 
  

const [search,setSearch]=useState("")

    return (

            <div>
            <Home />
        <Filter setSearch={setSearch} />
             <Add  Movies={Movies} setMovies={setMovies}  />  
             
            <MovieCard  Movies= {Movies} search={search} />
         
         

    </div>
    )
    }

export default App 

