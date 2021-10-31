// import logo from './logo.svg';
import './App.css';
// import bg from './bg-recep-white.jpg';
import Iframe from './components/iframe.js';
import Aframe from './components/audio.js';
import bg from './hand-in-hand.jpg';
import vid  from './hand_in_hand_3d_Slomo.mp4';
import aud  from './Tasbih_Ayisha Abdul Basith.mp3'
import sil  from './silence.mp3'
import React, { useState, useEffect } from 'react';
import { Transition, CSSTransition, SwitchTransition  } from 'react-transition-group';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'


function App() {

  const src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5763172136863!2d77.6310565148229!3d13.062618790796243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19739d97f2e5%3A0xca325c4cae2e82b2!2sThe%20Crystal%20Palace%20-%20Convention%20center!5e0!3m2!1sen!2sin!4v1634464428653!5m2!1sen!2sin'

  
  const [entered, setEntered] = useState(false);
  const [play, setPlay] = useState(false);

  const defaultStyle = {
    transition: `transform 200ms, opacity 200ms ease`,
    opacity: 1
  };

  const transitionStyles = {
    entering: { transform: 'scale(1)', opacity: 0 }, 
    entered: { transform: 'scale(1)', opacity: 1},
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  const AComponent = ({ in: inProp }) => (
    <Transition
      in={inProp}
      timeout={{
        appear: 100,   
        enter: 300,
        exit: 300
      }}
      mountOnEnter
    >
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
        <Iframe source={src} />
        </div>
      )}
    </Transition>
  );

  // const Player = () => (
  //   <AudioPlayer
  //     autoPlay
  //     src={aud}
  //     onPlay={e => console.log("onPlay")}
  //   />
  // );

  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    document.onclick = function() {
      audioEl.play();
    }
    document.ondblclick = function() {
      audioEl.pause();
    }
  });
    
 
  return (

    <div className="App">
      <header className="App-header">
      <div className = "head-text">
      <div class="neonText">
      ‏اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ‎  (Peace Be Upon You)

      </div>
       
        <div  class="container" >
        {/* <img src={bg} className="App-logo" alt="background" /> */}

          {/* <img src={bg} className="App-logo" alt="Avatar" class="image" /> */}
          <video width="600" height="300" autoPlay loop muted>
          <source src={vid} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          
          <div class="overlay">
          <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"/>

            {/* <div class="text">‏اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ‎  (Peace Be Upon You)</div> */}
            <div class="text">From the Blessings of ALLAH SUBHANAHU W TA’ALA,</div>
            <div class="text">Our Parents, My Near and Dear One's</div>
            <div class="text">We are entering in a new phase of life</div>
            <div class="text">We will be honored and glad to have</div>
            <div class="text">You and Your family</div>
            <div class="text">Preside over the Valima(Reception)</div>
            <div class="text">Your presence is utmost requested</div>
            <div class="text">Looking Forward For Your Presence <i class="em em-innocent" aria-role="presentation" aria-label="BIRD"></i>
</div>
         </div>
         
               
        </div>
        <div class="flower">
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
</div>

      <div class="neonText">
             <h3> A Warm Welcome </h3>
        {/* <button onClick={() => {
            setPlay(!play);
          }}>
          <span>Click Here To Say Subhanallah</span>
        </button> */}
        <audio className="audio-element" loop preload="auto" >
          <source src={aud} type="audio/mp3"></source>
         
        </audio>
      </div>

        {/* <div class="bottom-left">Bottom Left</div>
          <div class="top-left">Top Left</div>
          <div class="top-right">Top Right</div>
          <div class="bottom-right">Bottom Right</div>
          <div class="centered">Centered</div> */}

    <div>
      <AComponent in={entered} />
        <button
          onClick={() => {
            setEntered(!entered);
          }}
          
        >
          Click Here For Venue Location
        </button>
    </div>
   

        
        </div>

       

      </header>
     
      {/* <ReactAudioPlayer
        src={aud}
        autoPlay     
        loop
        preload 
        controls
      /> */}
      
      {/* <div class="hide">

          <AudioPlayer
          src={aud}
          autoPlay={true}
          loop={true}
          preload
          showSkipControls={false}
          showJumpControls={false}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          showDownloadProgress={false}
          progressUpdateInterval={false}
          defaultCurrentTime="hey" defaultDuration="hello"
          onLoadStart
          showFilledProgress={false}

          />
</div> */}


      </div>


    
    
  );

  
}

export default App;
