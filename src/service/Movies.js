import React, { Component } from 'react';
import Star from '../assets/star.png'
import { MvTitle, Ul,Post, Poster, OneMovie, StarImg } from '../StyledComponents/MainStyled';
import axios from 'axios';

const filmeApi = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=79acdbe4e920682f6a71f2048ab8a137&language=en-US&page=1',
});

console.log(filmeApi);

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies = async () => {
    const get = await filmeApi.get();
    console.log(get);

    const allMovies = get.data.results.map((chave) => {
      return {
        ...chave,
        image: `https://image.tmdb.org/t/p/w500${chave.poster_path}`,
      };
    });

    this.setState({
      movies: allMovies,
    });
  };

  render() {
    return (
      <>
        {this.state.movies.map((item) => (
          <OneMovie>
            <Post>
              <Poster src={item.image} alt="" />
              <MvTitle>{item.title}</MvTitle>
            </Post>
            <Ul>
              <li>Data de Estreia: {item.release_date}</li>
              <li>Votos: {item.vote_count}</li>
              <li>
                Avaliação: {item.vote_average} <StarImg src={Star} alt="" />{' '}
              </li>
            </Ul>
          </OneMovie>
        ))}
      </>
    );
  }
}
