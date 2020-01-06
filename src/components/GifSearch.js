import React, { Component } from 'react';

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    };
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchValue);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          Search GIPHY:{' '}
          <input
            valiue={this.state.searchValue}
            onSubmit={this.handleSearch}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}
