import { React, useState } from 'react'

function BandNameGenerator () {
  const [genre, setGenre] = useState('')
  const [name, setName] = useState('')

  const generateBandName = (genre, name) => {
    // Use the OpenAI GPT-3 model to generate a band name
    fetch('https://api.openai.com/v1/engines/davinci/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.OPENAI_API_KEY
      },

      body: JSON.stringify({
        max_tokens: 50,
        temperature: 0.7,
        top_p: 1,
        n: 1,
        stream: 'band name',
        candidates: [
          { name: name, type: 'artist' },
          { name: genre, type: 'genre' }
        ]
      })
    })
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          response: responseJSON.choices
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Band Name Generator</h1>
      <form>
        <input
          onChange={e => setGenre(e.target.value)}
          type='text'
          placeholder='name'
        />

        <input
          onChange={e => setName(e.target.value)}
          type='text'
          placeholder='genre'
        />
        <button onClick={() => generateBandName(genre, name)}>Submit</button>
      </form>
    </div>
  )
}
export default BandNameGenerator
