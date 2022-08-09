import React,{useState,useEffect} from "react";
import axios from '../../axios';
import { imageUrl,API_KEY } from "../../constants/constants";
import "./Rowpost.css";
import Youtube from 'react-youtube'
function Rowpost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId]=useState()
    useEffect(() => {
      axios.get(props.url).then(response=>{
        setMovies(response.data.results);
      })
    
      } 
    )
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id) =>   {
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    if(response.data.results!==0){
setUrlId(response.data.results[0])
    }
})
      }
  return (
    <div className="row">
      <h2>{props.title}</h2>        
      <div className="posters">
        {movies.map((obj)=>{   
            return(
 <img onClick={()=>handleMovie(obj.id)}
 className={props.isSmall? "smallPoster" : "poster"}
 src={`${imageUrl+obj.backdrop_path}`}
 alt="poster"
/>
            )
        }
        )}
       
      </div>
   { urlId &&  <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default Rowpost;
