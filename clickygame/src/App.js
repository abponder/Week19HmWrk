import React, { Component } from 'react';
import './App.css';
import image1 from "./images/charmander.png"
import image2 from "./images/compass.png"
import image3 from "./images/dratini.png"
import image4 from "./images/eevee.png"
import image5 from "./images/gamepad.png"
import image6 from "./images/location.png"
import image7 from "./images/player.png"
import image8 from "./images/pokemon-trainer.png"
import image9 from "./images/racing-game.png"
import image10 from "./images/rattata.png"
import image11 from "./images/snorlax.png"

var imageArray = [
  {
    id:1,
    url:image1,
    hasBeenClicked: false
  },
  {
    id:2,
    url:image2,
    hasBeenClicked: false
  },
  {
    id:3,
    url:image3,
    hasBeenClicked: false
  },
  {
    id:4,
    url:image4,
    hasBeenClicked: false
  },
  {
    id:5,
    url:image5,
    hasBeenClicked: false
  },
  {
    id:6,
    url:image6,
    hasBeenClicked: false
  },
  {
    id:7,
    url:image7,
    hasBeenClicked: false
  },
  {
    id:8,
    url:image8,
    hasBeenClicked: false
  },
  {
    id:9,
    url:image9,
    hasBeenClicked: false
  },
  {
    id:10,
    url:image10,
    hasBeenClicked: false
  },
  {
    id:11,
    url:image11,
    hasBeenClicked: false
  }
]

class App extends Component {

  constructor(){
    super()
    this.state={
      images:imageArray,
      message:"click any image to begin"
    }
  }

handleimageclick=(id)=>{ 
  console.log(id);
  var that=this
  for(var i = 0; i<imageArray.length; i++ ) {
    if(id===imageArray[i].id){

        if(imageArray[i].hasBeenClicked===false) {
          imageArray[i].hasBeenClicked=true
            this.setState({
              message:"You guessed right!"
            })
            setTimeout(function() {
              that.setState({
                message:"Try another image!"
              })
            },500)
        }else{
          console.log("you lost");
          this.setState({
            message:"You guessed wrong!"
          })
        }

      
    }

  }

}
 
  render() {
    var displayimages = this.state.images.map((item,index)=> 
    <div key={index} onClick={()=> this.handleimageclick(item.id)}>
    <img alt="anyThing" src={item.url}></img>
  </div>
) //how to loop in react
    return (
      <div className="App">
        <div className="header">
          <div>clickyGame</div>
          <div>{this.state.message}</div>
          <div>Score</div>
        </div>
        <div className="game-images">
          {displayimages}
        </div>
      </div>
    );
  }
}

export default App;
