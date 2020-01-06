import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

const APIkey = 'ZLEEpxRHkbTY2QNgnVXy1feX3uMsmztk';

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  handleSubmit = query => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${APIkey}&rating=g`;
    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({gifs: json.data.slice(0,3)}));
  };

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit}></GifSearch>
        <GifList gifs={this.state.gifs}></GifList>
      </div>
    );
  }
}
