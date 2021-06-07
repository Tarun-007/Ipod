
import Menu from './Menu';
import React from 'react';

class Screen extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        'songs', 'artists', 'settings', 'favorites'
      ]
    }
  }
  render() {
    return (
      <div className="Screen">
        <Menu items = {this.state.items}></Menu>
      </div>
    )
  }
}

export default Screen;