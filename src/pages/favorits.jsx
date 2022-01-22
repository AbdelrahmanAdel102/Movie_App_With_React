

import { useSelector } from 'react-redux';
import { remove } from "../store/action";
import { useDispatch } from 'react-redux';

function Favorites() {
    const dispatch = useDispatch()
    const removeMovie = (el) => {
        dispatch(remove(el))

    }
    const ind = useSelector((state) =>
        state.fav)

    return (
        <>
            <div className="container">
                {ind.length === 0 ? (
                    <div className="text-center">
                        <h1>No Fav yet</h1>
                    </div>

                ) : <div>
                    {ind.map((el) => {
                        return (
                            <div className="card mb-3 mt-4" key={el.id}>
                                <div className='row g-0'>
                                    <div className='col-md-3'>
                                        <img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} className="img-fluid rounded-start" alt="Cover" style={{ maxHeight: "30rem" }} />
                                    </div>
                                    <div className='col-md-9 d-flex align-items-center'>
                                        <div className="card-body">
                                            <h3 className="card-title">{el.original_title}</h3>
                                            <p className="card-text text-wrap mt-4">{el.overview}</p>
                                            <p className='cart-text'><strong> Rate: </strong>{el.vote_average}/10</p>
                                            <p className="card-text"><strong>Relese Date: </strong>{el.release_date}</p>
                                        </div>
                                        <div className='d-flex align-items-end flex-column bd-highlight mb-3'>
                                            <span className='btn btn-danger ms-2' onClick={() => removeMovie(el)}>Remove </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
                }
            </div>
        </>
    )
}

// }

export default Favorites;