import React, { useContext } from 'react';
import "./Favorite.css"
import { MovieContext } from '../../../context';

const Favorite = () => {
    const {favorite , setFavorite} =  useContext(MovieContext)

    function deleteFavorite (proId) {
        // let res = JSON.parse(localStorage.getItem("favorite"))|| []
        let filterFavorite = favorite.filter((el) => el.id !== proId)
        setFavorite(filterFavorite)
        localStorage.setItem("favorite",JSON.stringify(filterFavorite))
        
    }
    return (
        <div id="favorite">
            <div className="container">
                <div className="topRated">
                    {favorite.map((el)=> (
                       <div className="topRatedCard">  
                       
                        <img
                      width="220px" 
                        src={`https://image.tmdb.org/t/p/w440_and_h660_face//${el.poster_path}`}
                        alt=""
                         />
                         <span>
                         {el.title}

                         <button onClick={() => deleteFavorite(el.id)}>delete</button>
                         </span>
                         
                       </div>
                    


               ) )}</div>
            </div>
            
        </div>
    );
};

export default Favorite;