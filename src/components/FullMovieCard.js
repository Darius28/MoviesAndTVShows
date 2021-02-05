import React, {useEffect, useState} from 'react'
import { getGenreApiDetails, getMovieCastApi} from '../redux/actions/ActionCreator'
import {connect} from 'react-redux'
import Navbar from './Navbar'
import {posterNotFound, castImgNotFoundLarger} from './imageUrls'
import {Link} from 'react-router-dom'

function FullMovieCard(props) {

    const movieId = props.movie_id
    console.log('getting movie id ',movieId)
    useEffect(() => {
        window.scrollTo(0, 0)
        props.getGenreApiDetails()
        props.getMovieCastApi(movieId)       
    }, [])

    const loading = props.loading

    //console.log(props.selected_movie)
    const reqdMovie = props.selected_movie
    const movieGenres = reqdMovie.genre_ids
    //console.log(movieGenres)
    const allGenres = props.genres
    //console.log(allGenres)

    const matchingGenres = []

    // movieGenres.map(item => {
    //     console.log(item)
    // })

    allGenres.map(item => {
        //console.log(item.name, item.id)
        //console.log(movieGenres)
        movieGenres.map(item2 => {
            if(item2 === item.id)
            {
                //console.log('matched!!!!!!!!!!!')
                matchingGenres.push(item.name)
            }
        })
    })
    
    //console.log(matchingGenres)

    const movieCast = props.movie_cast
    console.log(movieCast)

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
                    <div style={{position: 'relative'}}>
                        { reqdMovie.backdrop_path ? <img src={"https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
                        reqdMovie.backdrop_path} style={{opacity: '0.3'}}
                        width='1520px' height='510px' /> : <div style=
                        {{width: '1520px', height: '510px', backgroundColor: '#1BA098', opacity: '0.3'}}></div> }
                        <div style={{position: 'absolute', top: '4vh', left: '5vw', border: '2px solid #1BA098', borderRadius: '5px'}}>
                            <img src={reqdMovie.poster_path ? 
                            "https://image.tmdb.org/t/p/w500" + reqdMovie.poster_path : posterNotFound} width='300px' height='450px' />
                        </div>
                        <div style={{position: 'absolute', top: '6vh', left: '450px', width: '65%'}}>
                            <div>
                                <h2 className='white'>{reqdMovie.original_title ? reqdMovie.original_title : reqdMovie.original_name}</h2>
                                <h5><span className='white'>Release Date: </span> 
                                {reqdMovie.release_date ? reqdMovie.release_date : <i>N/A</i>}</h5><hr/>
                                <span className="badge bg-primary">User Rating: {reqdMovie.vote_average} / 10</span>
                                <br/><br/>
                                <h4>{reqdMovie.overview}</h4>
                                <br/>
                                <h6 style={{letterSpacing: '1px'}}>Genres: 
                                    {   
                                        matchingGenres.map((data, i) => {
                                            return (<span key={i} style={{letterSpacing: '1px'}}
                                                className="white"> {data}{matchingGenres.length === i + 1 ? '' : ','} </span>
                                        )})
                                    }
                                </h6>
                            </div>
                        </div>
                    </div>
                </div> 
            }   
            <hr/>
            <div className="flex">
                <h2 className="white marginAuto" 
                style={{letterSpacing: '2px'}}>
                    <span style={{paddingBottom: '5px', borderBottom: '1px solid #1BA098'}}>CAST</span> 
                </h2>
            </div>
            <br/><br/>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'}}>
                {
                    movieCast.map((data, i) => {
                        while(i < 10)
                        {
                            return(<div>
                                <div style={{
                                 display: 'flex', flexDirection: 'column'}} key={i}>
                                <div style={{padding: '10px', width: '220px', margin: 'auto',
                                    border: '1px solid #1BA098', borderRadius: '10px', minHeight: '450px' }}>
                                    {data.profile_path ? <img src={'https://image.tmdb.org/t/p/w200'+data.profile_path} className='marginAuto'
                                    style={{border: '1px solid #DEB992'}} /> : 
                                        <div>{castImgNotFoundLarger}</div>
                                    }<hr/>
                                    <h3 className='white'>{data.original_name}</h3>
                                    <h5>{data.character}</h5>
                                </div>
                            </div>
                            {i % 5 == 4 ? <br/> : null}
                            </div>
                            )
                        }
                        
                    })
                
                }
            </div><br/>    
            <div className='flex'>
                <Link to ='/fullmoviecast' className='marginAuto'>
                    <button className="btn btn-info">Click here to see the entire cast</button></Link>
            </div>
            <div style={{height: '40vh'}}></div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        loading: state.loading,
        genres: state.genres,
        selected_movie: state.selected_movie,
        movie_cast: state.movie_cast,
        movie_id: state.movie_id
    }
    
}

const mapDispatchToProps = dispatch => {
    return{
        getGenreApiDetails: () => dispatch(getGenreApiDetails()),
        getMovieCastApi: (data) => dispatch(getMovieCastApi(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FullMovieCard)
