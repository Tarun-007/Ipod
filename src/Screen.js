
import Menu from './Menu';
import React from 'react';

class Screen extends React.Component {
  
  render() {
    const {items,handlerRotateClockWise,handlerRotateCounterClockWise}
    return (
      <div className="Screen">
        <Menu
          items={this.props.items}
          
        />
        
      </div>
    )
  }
}

export default Screen;