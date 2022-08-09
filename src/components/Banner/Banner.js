import React,{ useEffect,useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'

function Banner() {
   
    const[movie,setMovie]=useState()
    useEffect(() => {
   const random = Math.floor((Math.random() * 19) + 1);

    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
            setMovie(response.data.results[random])
    })

    }, [])
return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
<h1 className='title'>{movie ? movie.title:''}</h1>
<div className='banner_buttons'>
<button className='button'>Play</button>
<button className='button'>My List</button>
</div>
<h3 className='description'>{movie ? movie.overview:''}</h3>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner