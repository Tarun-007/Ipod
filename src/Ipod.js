import Screen from './Screen';
import NavButton from './NavButton';
import React from 'react';
import $ from 'jquery';


class Ipod extends React.Component {

  constructor() {
    super();
    this.state = {
      currentBackground:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png',
      title: 'Main',
      items: [{
        name: 'songs',
        id: 1,
        selected: true,
        subMenu: {
          title: 'Songs',
          items: [
            {
              id: 1,
              selected: true,
              name: 'A million Dreams',
              img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png'
            },
            {
              id: 2,
              selected: false,
              name: 'Ankhon mein teri',
              img :'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png'
            },
            {
              id: 3,
              selected: false,
              name: 'Afterglow',
              img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png'
            },
            {
              id: 4,
              selected: false,
              name: 'All the stars',
              img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png'
            },
            {
              id: 5,
              selected: false,
              name: 'Channa mereya',
              img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png'
            },
            {
              id: 6,
              selected: false,
              name: 'Adiga adiga',
              img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png'
            }
          ]
        }
      },
      {
        name: 'settings',
        id: 3,
        selected: false,
        img : 'https://image.pngaaa.com/217/3805217-middle.png'
      },
      {
        name: 'favorites',
        id: 4,
        selected: false,
        img : 'https://winaero.com/blog/wp-content/uploads/2018/08/favorites-heart-icon-1-big-256.png'
      },
      {
        name: 'radio',
        id: 8,
        selected: false,
        img:'https://w7.pngwing.com/pngs/784/584/png-transparent-internet-radio-computer-icons-stereo-electronics-logo-internet-radio.png'
      }

      ]
    }

    let currentMenu = this.state;
    this.state.currentMenu = currentMenu;

    // console.log('mounting component');
    // this.setState(prevState => {

    //   let newState = {
    //     // object that we want to update
    //     ...prevState.jasper,    // keep all other key-value pairs
    //     currentMenuItems: prevState.items      // update the value of specific key

    //   }
    //   console.log(newState);
    //   return newState;

    // });





  }

  componentDidMount() {

  }

  findSelectedItem = () => {
    return this.state.currentMenu.items.filter((item) => {
      return item.selected === true
    })[0]
  }

  handlerSelectDown = () => {
    const item = this.findSelectedItem();
    console.log('selected item is ', item)
    const currentMenu = this.state.currentMenu;
    const items = currentMenu.items;
    const index = items.indexOf(item);
    console.log('setting selected true for the item', index, items[index]);
    items[index].selected = false;
    const newIndex = (index + 1) % items.length;
    items[newIndex].selected = true
    currentMenu.items = items;
    this.setState({
      currentMenu: currentMenu
    });
    const selectedElement = document.querySelector('.highLightItem')
    selectedElement.scrollIntoView({ behavior: 'smooth' })
  }

  handlerSelectUp = () => {
    const item = this.findSelectedItem();
    console.log('selected item is ', item)
    const currentMenu = this.state.currentMenu;
    const items = currentMenu.items;
    const index = items.indexOf(item);
    items[index].selected = false;
    const newIndex = Math.abs((index - 1 + items.length) % items.length);
    console.log("new index is ", newIndex);
    items[newIndex].selected = true;
    currentMenu.items = items;
    this.setState({
      currentMenu: currentMenu
    });

    const selectedElement = document.querySelector('.highLightItem');
    console.log('scrolling to the top')
    selectedElement.scrollIntoView(true);
  }

  toggleMenuDisplay() {
    let menu = $('.Menu');
    menu.toggleClass('openMenu')
  }

  selectOption = () => {
    const currentMenuItems = this.state.currentMenu.items;
    console.log("selected option is ", this, currentMenuItems);
    const item = this.findSelectedItem();
    let index = currentMenuItems.indexOf(item);
    console.log('index of current menu', index)
    if (currentMenuItems[index].hasOwnProperty('subMenu')) {
      console.log("settting the sub menu")
      this.setState({ currentMenu: currentMenuItems[index].subMenu });
    } else {
      console.log("setting the background image");
      this.setState({currentBackground : currentMenuItems[index].img})
    }
    console.log(this.state.currentMenu)
  }

  backButton = () => {
    const menu = this.state;
    const title = menu.currentMenu.title;
    if (menu.title !== title) {
      delete menu.currentMenu; 
      this.setState({
        currentMenu: menu
      })
    }
    
  }

  volumehandler() {
    
  }

  render() {
    console.log(this.state)
    return (
      <div className="Ipod">
        <Screen
          items={this.state.currentMenu.items}
          title={this.state.currentMenu.title}
          image={this.state.currentBackground}
          volumePercentage={this.state.volumePercentage}
        />
        <NavButton
          handlerSelectDown={this.handlerSelectDown}
          handlerSelectUp={this.handlerSelectUp}
          toggleMenuDisplay={this.toggleMenuDisplay}
          selectOption={this.selectOption}
          backButton={this.backButton}
          volumehandler={this.volumehandler}
        />
      </div>
    )
  }
}


export default Ipod