import React, {useEffect, useState} from 'react'
import {getMovieCastApi} from '../redux/actions/ActionCreator'
import {connect} from 'react-redux'
import Navbar from './Navbar'
import { castImgNotFound} from './imageUrls'

function FullMovieCast(props) {
    const loading = props.loading
    const movieId = props.movieId
    const fullMovieCast = props.movieCast
    const selectedMovieName = props.selected_movie.original_title

    useEffect(() => {
        getMovieCastApi(movieId)
        window.scrollTo(0, 0)
    }, [])

    console.log('fullMovieCast',  fullMovieCast)

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
            <h2 style={{textAlign: 'center'}}>
                Showing the full cast of: <i className='white' >{selectedMovieName}</i>
            </h2>
            <hr/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
            {
                
            fullMovieCast.map((data, i) => {
               return (
                   <div>
                <div style={{border: '1px solid #1BA098', borderRadius: '5px', width: '450px', 
                display: 'grid', gridTemplateColumns: '30% 70%', margin: 'auto'}} key={i}>
                <div className='marginAuto' style={{padding: '10px', }}> 
                    {/* <img src={data.profile_path !== null ? 'https://image.tmdb.org/t/p/w132_and_h132_face' +
                     data.profile_path : castImgNotFound }
                    style={{border: '1px solid #DEB992', borderRadius: '5px'}}/> */}
                    {data.profile_path ? <img src={ 'https://image.tmdb.org/t/p/w132_and_h132_face' + data.profile_path} 
                    style={{border: '1px solid #DEB992', borderRadius: '5px'}}/> : castImgNotFound }
                </div>
                <div style={{padding: '10px', display: 'grid', gridTemplateRows: '1fr 1fr'}}>
                    <h3 style={{textAlign: 'center', margin: 'auto'}} className='white'>
                        {data.original_name}
                    </h3>
                    <h5 style={{textAlign: 'center', margin: 'auto'}}>{data.character}</h5>
                </div>
            </div>{i % 2 == 1 ? <br/> : null}
            </div>
               ) 
            })
            }
        </div>
        </div>
        }   
    </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        movieId: state.movie_id,
        movieCast: state.movie_cast,
        selected_movie: state.selected_movie
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieCastApi: (data) => dispatch(getMovieCastApi(data))
    }
}   

export default connect(mapStateToProps, mapDispatchToProps) (FullMovieCast)
