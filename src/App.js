// import logo from './logo.svg';
import './App.css';
// import bg from './bg-recep-white.jpg';
import Iframe from './components/iframe.js';
import bg from './hand-in-hand.jpg';
import desktopVideo  from './desktopVideo.mp4';
import tabletVideo  from './tabletVideo.mp4';
import mobileVideo  from './mobileVideo.mp4';
import androidVideo from './androidVideo.mp4';
import aud  from './Tasbih_Ayisha Abdul Basith.mp3'
import React, { useState, useEffect , useRef} from 'react';
import { Transition, CSSTransition} from 'react-transition-group';


function App() {

  const valimaUrl= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5763172136863!2d77.6310565148229!3d13.062618790796243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19739d97f2e5%3A0xca325c4cae2e82b2!2sThe%20Crystal%20Palace%20-%20Convention%20center!5e0!3m2!1sen!2sin!4v1634464428653!5m2!1sen!2sin'
  const nikahUrl= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6295003754176!2d76.07615241482227!3d12.995532790840151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba537e46aa19a2f%3A0x25a4db3b0f3a74cc!2sMK%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1635701223520!5m2!1sen!2sin'
  
  const [nikah, setNikah] = useState(false);
  const [valima, setValima] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [ndisplay, setNdisplay] = useState(false);
  const [vdisplay, setVdisplay] = useState(false);

  const defaultStyle = {
    transition: `transform 200ms, opacity 200ms ease`,
    opacity: 1
  };

  const transitionStyles = {
    entering: { appear: 'scale(1)', opacity: 0 }, 
    entered: { appear: 'scale(1)', opacity: 1},
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  const NikahLocation = ({ in: inProp }) => (
    <Transition
      in={inProp}
      timeout={{
        appear: 10,   
        enter: 30,
        exit: 30
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
        <Iframe source={nikahUrl} />
        </div>
      )}
    </Transition>
  );

  const ValimaLocation = ({ in: inProp }) => (
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
            ...transitionStyles[state],
          }}
        >
        <Iframe source={valimaUrl} />
        </div>
      )}
    </Transition>
  );


  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    document.onclick = function() {
      audioEl.play();
    }
    document.ondblclick = function() {
      audioEl.pause();
    }
  });

  const getVideoSrc = width => {
    if (width >= 1080) return tabletVideo;
    if (width >= 720 ) return tabletVideo;
    if (width >= 480 ) return mobileVideo;
    return mobileVideo;
  };

  const Video = props => {
    const src = getVideoSrc(window.innerWidth);
    return (
      <div  >
        <video 
        autoPlay 
        loop 
        playsInline 
        preload 
        muted 
        src={src}
        style={{
          // aspectRatio: width/height,
          
        }}
        width={width/1.6}
        height={height/2}
        // aspectRatio={width/height}
        
         />
      </div>
    );
  };

  const onNButtonClickHandler = () => {
    setNdisplay(!ndisplay);
   };

   const onVButtonClickHandler = () => {
    setVdisplay(!vdisplay);
   };

  return (
    <div className="App">


      <header className="App-header">
        

      <div className = "head-text">
      <div class="neonText">
      ‏اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ‎

      </div>
      <div class="neonText">
      (Peace Be Upon You)

      </div>
       
        <div  class="container" >
        {/* <img src={bg} className="App-logo" alt="background" /> */}

          {/* <img src={bg} className="App-logo" alt="Avatar" class="image" /> */}
          
          <Video />

          {/* <iframe width="560" height="315" src={mobileVideo} autoplay='1' allow='autoplay' muted loop preload></iframe> */}


          <div class="overlay" >
          <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"/>

            {/* <div class="text">‏اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ‎  (Peace Be Upon You)</div> */}
            <div class="text">From the Blessings of ALLAH SUBHANAHU W TA’ALA,</div>
            <div class="text">Our Parents, My Near and Dear One's</div>
            <div class="text">We are entering in a new phase of life</div>
            <div class="text">We will be honored and glad to have</div>
            <div class="text">You and Your family</div>
            <div class="text">Preside over the Nikah & Valima</div>
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

      
    <div class="ngmap">
      <NikahLocation in={nikah} />
        <button class="button button1"
          onClick={() => {
            setNikah(!nikah);
          }}
          
        >
          Nikah Location
        </button>
    </div>
   
    <div>
      <ValimaLocation in={valima} />
        <button class="button button2"
          onClick={() => {
            setValima(!valima);
          }}
          
        >
          Valima Location
        </button>
    </div>
    
    <div class="top-left" >
           <button  class="nbutton" style={{'vertical-align':'middle'}}><span style={{'textAlign':'center'}}>Nikah </span></button>
    </div>

    <div class="top-right">
           <button  class="vbutton" style={{'vertical-align':'middle'}}><span>Valima </span></button>
    </div>

    {/* <div class="bottom-left" >
           <button  class="nvbutton" style={{'vertical-align':'middle'}}><span style={{'textAlign':'center'}}>Nikah Venue </span></button>
    </div>

    <div class="bottom-right">
           <button  class="vvbutton" style={{'vertical-align':'middle'}}><span>Valima Venue</span></button>
    </div> */}

    <div className="bottom-left">
     {ndisplay && <div className="nikah-venue">M.K Convention Center
     Thanniruhalla
     B.M.Road Hassan</div>}
      <button class="nvbutton" onClick={onNButtonClickHandler}>Nikah Venue</button>
    </div>

    <div className="bottom-right">
     {vdisplay && <div className="valima-venue">The Crystal Palace Convention center
    Thanisandra Main Road
    R.K. Hegde Nagar Bengaluru</div>}
      <button class="vvbutton" onClick={onVButtonClickHandler}>Valima Venue</button>
    </div>
    </div>

    



    {/* <div>{`Window width = ${width}`}</div>
    <div>{`Window height = ${height}`}</div> */}

      </header>
     
      
      
      </div>


    
    
  );

  
}

export default App;
