import React, { Component } from 'react'
import axios from 'axios'

const filmeApi = axios.create({
  baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=79acdbe4e920682f6a71f2048ab8a137&language=en-US&page=1'
})

console.log(filmeApi)

export default class Movies extends Component {
  render() {
    return (
      <></>
    )
  }
}
