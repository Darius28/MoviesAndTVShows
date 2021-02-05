import Introduction from "./components/Introduction";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Search from './components/Search'
import {Provider} from 'react-redux'
import store from './redux/store/Store'
import MovieCard from "./components/MovieCard";
import axios from 'axios'
import React, {useEffect} from 'react'
import FullMovieCard from "./components/FullMovieCard";
import Trending from "./components/Trending";
import FullMovieCast from "./components/FullMovieCast";
import ActorInfo from "./components/ActorInfo";


function App() {
  
  // useEffect(() => {
  //   axios.get
  //   ('https://api.themoviedb.org/3/search/movie?api_key=e07157139c36e5c131e9aff04df1135c&language=en-US&query=the%20spy%20who%20loved%20me&page=1&include_adult=false')
  //   .then(res => {
  //     const data = res.data.results
  //     console.log(data)
  //   })
  //   .catch(err => console.log(err))
  // }, [])
  
 
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <Route path='/' exact component={Introduction} />
      <Route path='/search' component={Search}/>
      <Route path='/moviecard' component={MovieCard} />
      <Route path='/fullmoviecard' component={FullMovieCard} />
      <Route path='/trending' component={Trending} />
      <Route path='/fullmoviecast' component={FullMovieCast} />
      <Route path='/bio' component={ActorInfo} />
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
