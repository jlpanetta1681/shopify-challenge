import './Styles/App.css';
import { React, useState } from 'react';

let APIKey = process.env.OPENAI_API_KEY;


function App() {
  console.log(APIKey)

  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  
  
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    const request = `Create a band name using ${genre} ${name}`
    console.log(request)
    try {
      let res = fetch("https://api.openai.com/v1/engines/davinci/completions", {
        method: "POST",
       
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${APIKey}`
        }),
        body: JSON.stringify({
          genre: genre,
          name: name,
          
  "prompt": "Say this is a test",
  "max_tokens": 5,
  "temperature": 1,
  "top_p": 1,
  "n": 1,
  "stream": false,
  "logprobs": null,
  "stop": "\n"
}
      
        ),
    });
      // let resJson = await res.json();
      if (res.status === 200) {
        setGenre("");
        setName("");
  
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  
  return (

    <div className="App" >
   
      
      <div className="directions">
        <h1>Choose a genre! Get a cool band name!</h1>
        <h2>Give me some information and I will generate a name for your band</h2>
    

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
