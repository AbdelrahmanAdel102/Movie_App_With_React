
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Results() {
    const params = useParams()
    const [Results, setResults] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0d92752441ea525aae2246c8fbf90041&language=en-US&query=${params.input}`)
            .then((res) => {
                setResults(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [params.input])
    return (
        <>
            <div className="container">
                <div className="row">
                    {Results.map((result) => {
                        return (
                            <div className="col-md-3 mt-4" key={result.id} >
                                <div className="card border-0">
                                    <span className="position-absolute start-50 translate-middle p-2 rounded-circle bg-warning text-dark rate">
                                        <span>{result.vote_average}</span>
                                    </span>
                                    <Link to={`/${result.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} className="card-img-top" alt='Cover' />
                                    </Link>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <Link to={`/${result.id}`}>
                                                <p className="card-movie-title text-wrap text-center">{result.title}</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Results;