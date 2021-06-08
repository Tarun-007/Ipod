
import ZingTouch from 'zingtouch';
import React from 'react';
import 'jquery';



class NavButton extends React.Component {

    componentDidMount() {
        var touchArea = document.querySelector('.navButton');
        var myRegion = new ZingTouch.Region(touchArea);
        const { handlerSelectDown, handlerSelectUp } = this.props;
        myRegion.bind(touchArea, 'rotate', function (e) {
            if (e.detail.distanceFromOrigin < 0 && Math.floor(e.detail.angle % 40) === 0) {
                console.log("moving in counter clock direction", e.detail, e)
                handlerSelectUp();
            } else if (e.detail.distanceFromOrigin > 0 && Math.floor(e.detail.angle % 40) === 0) {
                console.log('moving in clock wise direction');
                handlerSelectDown();

            }
        });


        var midButton = document.getElementById('mid');
        var regionOne = new ZingTouch.Region(midButton, true, false);
        var longTap = new ZingTouch.Tap({
            maxDelay: 1000
        })
        regionOne.bind(midButton, longTap, function (e) {
            console.log("mid button tabpped")
            
        });

        
        
    


    }

    render() {

        return (
            <div className="navButton iconCentered">
                <div className="topButton Button ">Menu</div>
                <div className="bottomButton Button">
                    <img src="https://img.icons8.com/metro/26/000000/pause.png" />
                    <img src="https://img.icons8.com/android/24/000000/play.png" />
                </div>
                <div className="leftButton Button">
                    <img src="https://image.flaticon.com/icons/png/512/724/724927.png" />
                </div>
                <div className="rightButton Button">
                    <img src="https://image.flaticon.com/icons/png/512/724/724927.png" />

                </div>
                <div className="midButton" id = "mid">

                </div>
            </div>
        )
    }
}

export default NavButton;