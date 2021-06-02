import React from 'react';
import axios from "axios";
import Movie from "../components/Movie"
import "./Home.css";

// function components has no state
class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => { // 화살표 함수, async 함수로 선언하여 비동기 데이터 받아옴
    const { // es6 style data.data.movies 대신에 movies로 바로 접근가능
      data: { // await 키워드 추가하여 비동기 요청이 끝날때까지 기다린 후 movies에 데이터 채워줌
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating") 
    console.log(movies);
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }

  render(){
    console.log("render");
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading..</span>
         </div>
        ) : ( 
          <div className="movies">
            {
              movies.map(movie => {
                return (<Movie 
                  key = {movie.id}
                  id = {movie.id} 
                  year = {movie.year} 
                  title = {movie.title} 
                  summary = {movie.summary} 
                  poster = {movie.medium_cover_image}
                  genres = {movie.genres}
                />
                );
                })
            }
          </div>
        )}
      </section>
    
    );
  }
}

export default Home;
