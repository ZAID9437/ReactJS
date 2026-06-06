import React from 'react'

const App = () => {

  function btnClikced(){
    console.log("Button is clicked!");
  }

  function inputChanging(){
    console.log('User Is Typing');
  }

  const pageScrolling = (elem) =>{
    // console.log('Speed',elem);
    if(elem>0)
    {
      console.log('Seedha Scrolling');
    }
    else{
      console.log('Ulta Scrolling');
    }
  }

  return (
    <div>
      <button onClick={
        function(){
          console.log("Hello Guys");
        }
      }>Click Here</button>

      <button onClick={() => {
        console.log("Button Clicked");
      }}>Click Here</button>

      <input onChange={inputChanging} type="text" placeholder='Enter Text Here '/>

      <input 
          onChange={(elem) => {
            console.log(elem.target.value);
          }}
          type="text" 
          placeholder='Enter Taxt' 
      />

      <div onMouseMove={(elem)=>{
        console.log(elem.clientY)
      }} className='box'>
      </div>
      <div onWheel={(elem)=>{
        pageScrolling(elem.deltaY);
      }}>
        <div className="page1"></div><br />
        <div className="page2"></div><br />
        <div className="page3"></div>
      </div>
    </div>
  )
}

export default App

