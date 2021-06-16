
import Menu from './Menu';
import React from 'react';
import Volume from './Volume';




class Screen extends React.Component {

  
  
  render() {
    
    const {items,title,image,volumePercentage} = this.props
    console.log('items in screen component', items, this.props);
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'

    };

    return (
      <div className="Screen" style = {styles}>
        <Menu
          style = {{backGroundColor : 'white'}}
          items={items}
          title={title}
        />
        <Volume
          volumePercentage = {volumePercentage}
        />
      </div>
    )
  }
}

export default Screen;

