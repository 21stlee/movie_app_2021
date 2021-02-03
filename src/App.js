// This is class type App.js

// import React, { Component } from 'react';
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";


class App extends React.Component {  
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {   // async (비동기) 와 await: axios.get(URL)에 시간이 걸리는 경우, axios의 동작이 끝날 때까지 다음 동작을 기다리게 한다
    const {
      data: {
        data: { movies }    // > movies.data.data.movies의 ES6식 표현
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");  
    // axios()는 fetch()의 대용으로, fetch()의 작은 layer라고 할 수 있다
    // ?sort_by=rating은 yts에서 제공하는 옵션
    this.setState({ movies, isLoading: false });    // movies:movies의 ES6식 표현, 앞의 movies는 state의 movies를, 뒤의 movies는 axios가 받아온 movies를 가리킨다
  };

  componentDidMount() {   // reder()가 끝나면 호출되는 함수로, yts API에서 가져오는 movie data를 fetching하는 구간이다.
    // setTimeout(() => {
    //   this.setState({ isLoading: false })
    // }, 6000);
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;   // get me 'isLoading' from the 'state', 'movies > this.movies.state.isLoading, this.movies.state.movies의 ES6식 표현
    return (   
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}   // medium_cover_image는 해당 사이트 yts 내부의 실제 값
                genres={movie.genres}
              />
            ))}
          </div> 
        )}   
      </section>     
           
        // If isLoading is ture, show me "Loading". if is not ture, show me "We are ready" > JavaScript ternary operator (삼항 연산자)
        // movies는 state의 movies, movie는 mapping할 object
        // console.log(movie);    
      
    );
  }
}



export default App;
