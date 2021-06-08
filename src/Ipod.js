import Screen from './Screen';
import NavButton from './NavButton';
import React from 'react';

class Ipod extends React.Component {

    constructor() {
      super();
      this.state = {
        items: [{
            name: 'songs',
            id: 1,
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
            name: 'radio',
            id: 8,
            selected: false
          }

        ]
      }
    }

    findSelectedItem = () => {
      return this.state.items.filter((item) => {
        return item.selected === true
      })[0]
    }

    handlerSelectDown = () => {
      const item = this.findSelectedItem();
      console.log('selected item is ', item)
      const {
        items
      } = this.state;
      const index = items.indexOf(item);
      console.log('setting selected true for the item', index, items[index]);
      items[index].selected = false;
      const newIndex = (index + 1) % items.length;
      items[newIndex].selected = true
      this.setState({
        items: items
      });
    }

    handlerSelectUp = () => {
      const item = this.findSelectedItem();
      console.log('selected item is ', item)
      const {
        items
      } = this.state;
      const index = items.indexOf(item);
      items[index].selected = false;
      const newIndex = Math.abs((index - 1 + items.length) % items.length);
      console.log("new index is ", newIndex);
      items[newIndex].selected = true
      this.setState({
        items: items
      });
    }

  render() {
    return (
      <div className="Ipod">
        <Screen
          items={this.state.items}
        />
        <NavButton
        handlerSelectDown={this.handlerSelectDown}  
        handlerSelectUp = {this.handlerSelectUp}
        />
      </div>
    )
  }
}


export default Ipod