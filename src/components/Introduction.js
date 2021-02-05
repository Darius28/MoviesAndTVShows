import React, { Component } from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export default class Introduction extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="navHeight"></div>
                <hr/>
                <div className="flex">
                    <h1 className="marginAuto fontLS">Welcome, User</h1>
                </div>
                <div style={{display: 'flex', height: '45vh', width: '50vw', margin: 'auto' }}>
                <div style={{ margin: 'auto', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                    <h1 className="fontLS" style={{padding: '20px', lineHeight: '1.7em', textAlign: 'center'}}>
                    <span className="white">This is your one stop destination for all the latest information about</span> Movies, TV Shows and 
                        more!
                    </h1>
                    </div>
                </div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', height: '250px'}}>
                    <div className="introGrid">
                        <h4>Click here to check out <span className='white'>Trending</span> Movies and TV Shows</h4><hr/>
                        <Link to='/trending'><button className="btn btn-warning btn-lg">Go To Trending</button></Link>
                    </div>
                    <div className="introGrid">
                        <h4>Click here to <span className='white'>Search</span> Movies and TV Shows</h4><hr/>
                        <Link to='/search'>
                            <button className="btn btn-warning btn-lg">Go To Search</button>
                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}
