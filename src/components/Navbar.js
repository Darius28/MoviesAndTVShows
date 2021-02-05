import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 
export default class Navbar extends Component {
    render() {
        return (
            <div id="navLayout" className="navHeight">
                <div></div>
                <div id="navHeader">
                    <Link to='/'>
                    <button style={{ borderRadius: '5px'}} 
                    className="btn btn-outline-warning">
                    Movies and TV shows Library</button>
                    </Link>
                </div>
                <div></div>
            </div>
        )
    }
}
