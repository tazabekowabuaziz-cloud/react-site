import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../../apikey';
import axios from 'axios';
import "./Videos.css"

const Videos = ({videosId}) => {
      const [videos , setvideos] = useState([])
    async function getVideo(key) {
        let res = await axios(`https://api.themoviedb.org/3/movie/${videosId}/videos?api_key=${key}&language=en-US`

        )
        console.log(res.data.results);
        setvideos(res.data.results)

        

    }
useEffect(() => {
    getVideo(API_KEY)

}, [])


    return (
        <div id="videos">
            <div className="container">
                <div className="videos">
                    {
                        videos.slice(0,3).map((el) => 
                         <iframe
                         width="419" 
                        height="200"
                         src={`https://www.youtube.com/embed/${el.key}`}
                          title="Человек-Паук: Новый день — Русский трейлер 2 (4K Дубляж, 2026) Том Холланд" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
)
                    }
                </div>
            </div>
        </div>
    );
};

export default Videos;