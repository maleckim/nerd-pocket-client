import React,{useState} from 'react';
import './LandingPage.css';
import notecardIMG from '../../Assets/notecards.PNG'
import testIMG from '../../Assets/test.PNG'
import notesIMG from '../../Assets/notes.PNG'
 


export default function LandingPage(props){

  let [count, setCount] = useState(0);

  

  let images = [notecardIMG, testIMG, notesIMG,'Keep track of important deadlines']
  let text = ['Create notecards','Test yourself on your notecards','Create easy to manage notes','Keep track of important deadlines']
  let currentIMG = images[count];
  let currentTXT = text[count];

  setInterval(function() {
    count = count + 1;
    if(count >= 4){
      count = 0
    }
    setCount(count)
  }, 5000);


  
  return(
    <section className='fullPage'>
      <div className='leftBox'>
        <div className='leftContent'>
          <h1>All in one hub for your learning needs!</h1>
          <p>keep all of your learning essentials in one easy to manage place</p>
          <button onClick={() => props.history.push('/register')}>Get started</button>
        </div>
      </div>
      <div className='rightBox'>
        <div className='meter'>
          <span><span class='progress'></span></span>
        </div>
      <div className='dynamicRight'>
        <h3>Nerd-Pocket allows you to:</h3>
        <p>{currentTXT}</p>
        <img className='rightImage' src={currentIMG} />
      </div>
      </div>
    </section>
  )

}