
import { useParams } from 'react-router-dom';
import { useState, useEffect, React } from 'react';
import axios from 'axios';

function MovieDetailes() {
    const params = useParams()
    const [movieInfo, setInfo] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=0d92752441ea525aae2246c8fbf90041`)
            .then((res) => {
                setInfo(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className='container mt-4'>
                <div className="card mb-3">
                    <img src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`} className="card-img-top" alt="cover" style={{ maxHeight: "30rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">{movieInfo.title}</h5>
                        <p className="card-text text-justfy">{movieInfo.overview}</p>
                        <p className="card-text text-justfy">Language: {movieInfo.original_language}</p>
                        <p className='cart-text'>Rate: {movieInfo.vote_average}/10</p>
                        <p className="card-text">Relese Date: {movieInfo.release_date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieDetailes;