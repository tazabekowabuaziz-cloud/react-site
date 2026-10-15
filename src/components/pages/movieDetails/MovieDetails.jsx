import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../../../apikey';
import "./MovieDetails.css"
import { MdFavoriteBorder } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';
import { BiBookmark } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import Actors from '../actors/Actors';
import Videos from '../video/Videos';
import { MovieContext } from '../../../context';

const MovieDetails = () => {

    const [movieDetails, setmovieDetails] = useState({})
     const {movieId} =  useParams()
  const {setFavorite} =   useContext(MovieContext)
    // console.log(movieDetails);
  
  
    function addToFavorite(item) {
        let res = JSON.parse(localStorage.getItem("favorite")) || [];
        let result = [...res, item]
        setFavorite(result)
        localStorage.setItem("favorite",JSON.stringify(result))

    }
    

    async function getMovieDetails(key){
        let str = await axios(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
        );
        // console.log(str.data);
        setmovieDetails(str.data)
        
    }
    useEffect(() => {
        getMovieDetails(API_KEY)

    }, [])

    return (
        
       
      <>
      
        <div 
        id="movieDetails"
            style={{
          background: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path}") center center / cover`,
        }}
        >
            <div className="container">
                <div className="movieDetails">
               <img width="220px" 
                        src={`https://image.tmdb.org/t/p/w440_and_h660_face//${movieDetails.poster_path}`}
                        alt=""
                         />
                    <div className="movieDetailsText">
                        <h1>{movieDetails.original_title}
                             ({movieDetails.release_date?.slice(0,4)})
                             </h1>
                             
                        <p>{movieDetails.release_date} 
                            <span>{movieDetails.genres?.map((el)=> el.name )}</span>
                          {  movieDetails.runtime}
                            </p>
                        <div className="movieDetailsIcon">
                            <IoMdMenu />
                            <MdFavoriteBorder />
                            <BiBookmark  onClick={() => addToFavorite(movieDetails)}/>
                        </div>
                        <h2>{movieDetails.tagline}</h2>
                        <h1>Обзор</h1>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>
            </div>
           
        </div>
        <Actors actorsId={movieId}/>
        <Videos videosId={movieId}/>
        </>
       
         
    );
};

export default MovieDetails;