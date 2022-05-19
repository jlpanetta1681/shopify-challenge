import React from "react";



class BandNameGenerator extends React.Component {
    state = {
      name: '',
      genre: '',
      response: []
    }
  
    componentDidMount() {
      // Generate a band name when the component is mounted
      this.generateBandName('rock', 'John');
    }
  
    generateBandName(genre, name) {
      // Use the OpenAI GPT-3 model to generate a band name
      fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'OPENAI_API_KEY'
        },
        body: JSON.stringify({
          'max_tokens': 50,
          'temperature': 0.7,
          'top_p': 1,
          'n': 1,
          'stream': 'band name',
          'candidates': [
            { 'name': name, 'type': 'artist' },
            { 'name': genre, 'type': 'genre' }
          ]
        })
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          response: responseJSON.choices
        });
      });
    }
  
    render()
     {
      return (
        <div>
          This is the BandNameGenerator component.
          <form>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="genre"/>
          </form>
          {
            this.state.response.map((item, index) => (
              <div key={index}>
                {item.name}
              </div>
            ))
          }
        </div>
      );
    }
  }

  
  export default BandNameGenerator