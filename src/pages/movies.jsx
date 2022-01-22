
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from 'react-redux';
import { addF } from "../store/action";
import { AiOutlineHeart } from 'react-icons/ai';

function MoviesList() {
    const [movies, setMovies] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0d92752441ea525aae2246c8fbf90041&page=1`)
            .then((res) => {
                setMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handelPageClick = async (data) => {
        let currentPage = data.selected + 1
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0d92752441ea525aae2246c8fbf90041&page=${currentPage}`)
            .then((res) => {
                setMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const ind = useSelector((state) =>
        state.fav)

    const fav1 = (data) => {
        if (!ind.includes(data)) {
            dispatch(addF(data))
        }
    }

    return (
        <>
            {movies.map((movie) => {
                return (
                    <div className="col-md-3 mt-4" key={movie.id} >
                        <div className="card border-0">
                            <span className="position-absolute start-50 translate-middle p-2 rounded-circle bg-warning text-dark rate">
                                <span>{movie.vote_average}</span>
                            </span>
                            <span className="position-absolute start-70 translate bg-warning"><div id="test" className="btn" style={{ color: 'red' }} size={30} onClick={() => fav1(movie)}><AiOutlineHeart/></div>
                            </span>

                            <Link to={`${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="Cover" />
                            </Link>

                            <div className="card-body">
                                <div className="card-text">
                                    <Link to={`${movie.id}`}>
                                        <p className="card-movie-title text-wrap text-center">{movie.title}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            <hr style={{ height: "5px" }} />
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={500}
                marginPagesDisplayed={2}
                pageRangeDisplayed={10}
                onPageChange={handelPageClick}
                containerClassName="container-fluid pagination justify-content-center mt-2 pagination-lg"
                activeClassName="active"
                forcePage={0}
            />
        </>
    )
}

export default MoviesList;