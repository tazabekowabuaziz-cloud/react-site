import React from 'react';
import Header from './components/layout/header/Header';
import { Route, Routes } from 'react-router-dom';
import Popular from './components/pages/popular/Popular';
import TopRated from './components/pages/topRated/TopRated';
import Favorite from './components/pages/favorite/Favorite';
import MovieDetails from './components/pages/movieDetails/MovieDetails';
import Search from './components/pages/search/Search';
import Home from './components/pages/home/Home';
import Footer from './components/layout/footer/Footer';





const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/topRated" element={<TopRated/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/movieDetails/:movieId" element={<MovieDetails/>}/>
        <Route path="/search/:kinoName" element={<Search/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

