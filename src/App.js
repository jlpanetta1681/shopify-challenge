import './Styles/App.css';
import { React, useState } from 'react';
function App() {
  return () => {
  
     const [genre, setGenre] = useState('');
     const [name, setName] = useState('');
     const [instrument, setInstrunent] = useState('');
    <div className="App">
      <div className="directions">
        <h1>Choose a genre! Get a cool band name!</h1>
        <h2>Give me some information and I will generate cool stage names</h2>
        <h2>for you and your band-mates</h2>

    </div>
      <div className="inputFields">
        <input type="text" placeholder="Enter a genre" />
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="What instrument do you play?" />
      </div>
    </div>
      );


export default App;
