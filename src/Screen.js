
import Menu from './Menu';
import React from 'react';

class Screen extends React.Component {
  
  render() {
    const { items, handlerSelectDown, handlerSelectUp } = this.props;
    return (
      <div className="Screen">
        <Menu
          items={items}
        />
        
      </div>
    )
  }
}

export default Screen;