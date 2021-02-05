import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getTrendingApiDetails, saveSelectedMovie, getSelectedMovieId} from '../redux/actions/ActionCreator'
import Navbar from './Navbar';
import {posterNotFound} from './imageUrls'
import {Link} from 'react-router-dom'

function MovieCard(props) {
    const search = props.search
    const movie = props.movies
    const loading = props.loading
    console.log('In MovieCard ',search)
    useEffect(() => {
        window.scrollTo(0, 0)
        props.getTrendingApiDetails(search)
    }, [])
    
    return (
        <div>
            <Navbar />
            <div className="navHeight"></div><hr/><br/>
            
            { loading ? 
            <div style={{display: 'flex'}}>
                <div style={{margin: 'auto'}}> 
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> 
            : 
            <div>
            <div style={{paddingLeft: '6vw'}}>
                <h5><span className='white'>Trending (pask week) </span></h5>
                <h5><span className='white'>Total Results: </span>{movie.length}</h5>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '20px'}}>

                {   
                    movie.map((user, i) => 
                    <div style={{overflow: 'hidden'}} key={i}>
                    <div className="movieCard" key={i}>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                            <div style={{width: '110px', height: '110px', borderRadius: '55px',
                             border: '1px solid white', overflow: 'hidden', display: 'flex'}}>
                                <img src={user.poster_path ? "https://image.tmdb.org/t/p/w200" + user.poster_path : posterNotFound} 
                                style={{margin: 'auto'}} width='110px' height='110px' />
                            </div>
                            <h2><span className="white">{user.original_title ? user.original_title : user.original_name}</span></h2>
                        </div><br/>                    
                        <h4><span className='white'>Release Date: </span>{user.release_date ? user.release_date : <i>N/A</i>}</h4>
                        <p>{user.overview}</p> 
                        <Link to='/fullmoviecard'>
                            <button className="btn btn-info" onClick={() => {             
                                props.saveSelectedMovie(user)
                                props.getSelectedMovieId(user.id)
                                }}>
                                    Click to learn more
                            </button>    
                        </Link>                  
                    </div>
                    {i % 3 === 2 ? <br/> : null}
                    </div>
                    )
                }
                </div>   
            </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        loading: state.loading,
        search: state.search_query
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getTrendingApiDetails: (data) => dispatch(getTrendingApiDetails(data)),
        saveSelectedMovie: (data) => dispatch(saveSelectedMovie(data)),
        getSelectedMovieId: (data) => dispatch(getSelectedMovieId(data))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MovieCard)