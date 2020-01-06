import React, { Component } from 'react';

export default class GifList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.map(e => (
            <li key={e.id}>
              <img src={e.images.original.url} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
