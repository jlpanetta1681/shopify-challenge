import './Styles/App.css';
import { React, useState } from 'react';

function App() {

  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("");
  const [message, setMessage] = useState("");
  
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("api.openai.com/v1/engines/text-davinci-002/completions", {
        method: "GET",
        body: JSON.stringify({
          genre: genre,
          name: name,
          instrument: instrument,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setGenre("");
        setName("");
        setInstrument("");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  
  return (

    <div className="App">
      <div className="directions">
        <h1>Choose a genre! Get a cool band name!</h1>
        <h2>Give me some information and I will generate cool stage names</h2>
        <h2>for you and your band-mates</h2>

    </div>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={genre}
          placeholder="enter genre"
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="what is your name?"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={instrument}
          placeholder="instrument(optional for stage name)"
          onChange={(e) => setInstrument(e.target.value)}
        />
         <button type="submit">Create</button>

           <div className="message">
               {message ? 
               <p>
                   {message}
               </p> : null}
            </div>
    </form>
</div>
  )}

export default App;
