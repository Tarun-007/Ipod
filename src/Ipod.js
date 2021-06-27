import Screen from "./ScreenComponents/Screen";
import NavButton from "./Buttons/NavButton";
import React from "react";
import $ from "jquery";
import VolumeButtons from "./Buttons/VolumeButton";

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      volumePercentage: "-40%",
      currentBackground: "https://i.redd.it/qpz89816tsa21.jpg",
      title: "Main",
      items: [
        {
          name: "songs",
          id: 1,
          selected: true,
          subMenu: {
            title: "Songs",
            items: [
              {
                id: 1,
                selected: true,
                name: "A million Dreams",
                img:
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png",
              },
              {
                id: 2,
                selected: false,
                name: "Ankhon mein teri",
                img:
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png",
              },
              {
                id: 3,
                selected: false,
                name: "Afterglow",
                img:
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png",
              },
              {
                id: 4,
                selected: false,
                name: "All the stars",
                img:
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png",
              },
              {
                id: 5,
                selected: false,
                name: "Channa mereya",
                img:
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png",
              },
              {
                id: 6,
                selected: false,
                name: "Adiga adiga",
                img:
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png",
              },
            ],
          },
        },
        {
          name: "settings",
          id: 3,
          selected: false,
          img: "https://image.pngaaa.com/217/3805217-middle.png",
        },
        {
          name: "favorites",
          id: 4,
          selected: false,
          img:
            "https://winaero.com/blog/wp-content/uploads/2018/08/favorites-heart-icon-1-big-256.png",
        },
        {
          name: "radio",
          id: 8,
          selected: false,
          img:
            "https://w7.pngwing.com/pngs/784/584/png-transparent-internet-radio-computer-icons-stereo-electronics-logo-internet-radio.png",
        },
      ],
    };
    let currentMenu = this.state; // current menu stored in this property. whenever menu changes this property will be assigned
    this.state.currentMenu = currentMenu;
  }

  findSelectedItem = () => {
    return this.state.currentMenu.items.filter((item) => {
      return item.selected === true;
    })[0];
  };

  // nav button rotate clockWise action
  handlerSelectDown = () => {
    const item = this.findSelectedItem();
    const currentMenu = this.state.currentMenu;
    const items = currentMenu.items;
    const index = items.indexOf(item);
    items[index].selected = false;
    const newIndex = (index + 1) % items.length; // to give rotating select effect
    items[newIndex].selected = true;
    currentMenu.items = items;
    this.setState({
      currentMenu: currentMenu,
    });
    const selectedElement = document.querySelector(".highLightItem");
    selectedElement.scrollIntoView({
      behavior: "smooth",
    });
  };

  //navButton rotate anti- clock wise action
  handlerSelectUp = () => {
    const item = this.findSelectedItem();
    const currentMenu = this.state.currentMenu;
    const items = currentMenu.items;
    const index = items.indexOf(item);
    items[index].selected = false;
    const newIndex = Math.abs((index - 1 + items.length) % items.length); // rotating select effect
    items[newIndex].selected = true;
    currentMenu.items = items;
    this.setState({
      currentMenu: currentMenu,
    });

    const selectedElement = document.querySelector(".highLightItem");
    selectedElement.scrollIntoView(true);
  };

  toggleMenuDisplay() {
    let menu = $(".Menu");
    menu.toggleClass("openMenu");
  }

  //nav button when selected an option ( click middle button )
  selectOption = () => {
    const currentMenuItems = this.state.currentMenu.items;
    const item = this.findSelectedItem();
    let index = currentMenuItems.indexOf(item);
    if (currentMenuItems[index].hasOwnProperty("subMenu")) {
      this.setState({
        currentMenu: currentMenuItems[index].subMenu,
      });
    } else {
      this.setState({
        currentBackground: currentMenuItems[index].img,
      });
    }
    console.log(this.state.currentMenu);
  };

  // previous menu ( click left nav button )
  backButton = () => {
    const menu = this.state;
    const title = menu.currentMenu.title;
    if (menu.title !== title) {
      delete menu.currentMenu;
      this.setState({
        currentMenu: menu,
      });
    }
  };

  //volume level handler increment or decrease
  volumehandler = (param) => {
    $(".volumeContainer").removeClass("hide");
    const currentPercentage = this.state.volumePercentage;
    let percentage = Number(currentPercentage.slice(0, -1));
    console.log(param, percentage);
    if (param) {
      percentage += 10;
    } else {
      percentage -= 10;
    }
    if (percentage < 0 && percentage > -100) {
      percentage = percentage + "%";
      this.setState({
        volumePercentage: percentage,
      });
    }
    setTimeout(() => {
      $(".volumeContainer").addClass("hide");
    }, 2500);
  };

  render() {
    console.log(this.state);
    return (
      <div className="Ipod">
        <Screen
          items={this.state.currentMenu.items}
          title={this.state.currentMenu.title}
          image={this.state.currentBackground}
          volumePercentage={this.state.volumePercentage}
        />{" "}
        <VolumeButtons volumeHandler={this.volumehandler} />{" "}
        <NavButton
          handlerSelectDown={this.handlerSelectDown}
          handlerSelectUp={this.handlerSelectUp}
          toggleMenuDisplay={this.toggleMenuDisplay}
          selectOption={this.selectOption}
          backButton={this.backButton}
          volumehandler={this.volumehandler}
        />{" "}
      </div>
    );
  }
}

export default Ipod;
