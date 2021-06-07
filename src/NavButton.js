
import ZingTouch from 'zingtouch';
import React from 'react';



class NavButton extends React.Component {

    componentDidMount() {
        var touchArea = document.querySelector('.navButton');
        var myRegion = new ZingTouch.Region(touchArea);

        myRegion.bind(touchArea, 'rotate', function (e) {
            if (e.detail.distanceFromOrigin < 0) {
                console.log("moving in counter clock direction")
            } else {
                console.log('moving in clock wise direction');
            }
        });
    }

    render() {
        return (
            <div className="navButton iconCentered">
                <div className="topButton ">Menu</div>
                <div className="bottomButton ">
                    <img src="https://img.icons8.com/metro/26/000000/pause.png" />
                    <img src="https://img.icons8.com/android/24/000000/play.png"/>
                </div>
                <div className="leftButton">
                    <img src="https://image.flaticon.com/icons/png/512/724/724927.png" />
                </div>
                <div className="rightButton">
                    <img src="https://image.flaticon.com/icons/png/512/724/724927.png" />

                </div>
                <div className="midButton">
                    
            </div>
            </div>
        )
    }
}

export default NavButton;