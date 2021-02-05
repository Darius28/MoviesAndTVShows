import React, {useState} from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { getMovieName } from '../redux/actions/ActionCreator'
import {Link} from 'react-router-dom'

function Search (props) {
    const [movie, setMovie] = useState("")
    return (
        <div>
        <Navbar />
        <br/>
        <div className="navHeight"></div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
            <div className="flex" style={{height: '60vh'}}>
            <div style={{ margin: 'auto'}}>
            <h3 className="fontLS" style={{padding: '20px'}}>Search from a wide range of Movies and TV Shows. Get started!</h3>
            </div>
            </div>
            <div className="flex" style={{height: '60vh'}}>
            <div style={{ margin: 'auto'}}>
            <h4 className="fontLS">Search: </h4>
                <input type="text" className="form-control" style={{width: '40vw'}} 
                onChange={(e) => setMovie(e.target.value)} value={movie}></input><hr/>
                <Link to= '/moviecard'>
                <button className="btn btn-warning marginAuto" onClick={() => props.getMovieName(movie)}>Search</button>
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getMovieName: data => dispatch(getMovieName(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Search)