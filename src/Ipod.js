import Screen from './Screen';
import NavButton from './NavButton';
import React from 'react';

class Ipod extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [
        {
          name: 'songs',
          id: 1,
          selected: false
        },
        {
          name: 'artists',
          id: 2,
          selected: true
        },
        {
          name: 'settings',
          id: 3,
          selected: false
        },
        {
          name: 'favorites',
          id: 4,
          selected: false
        },
        {
          name: 'games',
          id: 5,
          selected: false
        },
        {
          name: 'ringtones',
          id: 6,
          selected: false
        },
        {
          name: 'torch',
          id: 7,
          selected: false
        },
        {
          name: 'radio',
          id: 8,
          selected: false
        },
        {
          name: 'camera',
          id: 9,
          selected: false
        }
      ]
    }
  }

  handlerSelectDown = (item) => {
    const { items } = this.state;
    const index = items.indexOf(item);
    items[index].selected = false;
    const newIndex = (index + 1) % items.length;
    items[newIndex].selected = true
    this.setState({ items: items });
  }

  handlerSelectUp= (item) => {
    const { items } = this.state;
    const index = items.indexOf(item);
    items[index].selected = false;
    const newIndex = (index - 1) % items.length;
    items[newIndex].selected = true
    this.setState({ items: items });
  }

  render() {
    return (
      <div className="Ipod">
        <Screen
          items={this.state.items}
          handlerSelectDown={this.handlerSelectDown}  
          handlerSelectUp = {this.handlerSelectUp}
        />
        <NavButton></NavButton>
      </div>
    )
  }
}


export default Ipod