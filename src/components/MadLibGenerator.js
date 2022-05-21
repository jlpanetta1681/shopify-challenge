import React from 'react';


class RandomMadLib extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      bandName: ''
    };
  }

  handleInput1 = (event) => {
    this.setState({
      input1: event.target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const input = `${this.state.input1} ${this.state.input2}`;
    fetch(`https://api.openai.com/v1/engines/davinci/completions?max_tokens=10`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'prompt': `take the input year and return a history fact from that year ${this.state.input1}`,
        'temperature': 1.0,
        'top_p': 0.9
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bandName: data.choices[0].text
        });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input 1:
            <input type="number" value={this.state.input1} onChange={this.handleInput1} />
          </label>
          
        </form>
        <h1>{this.state.bandName}</h1>
      </div>
    );
  }
}
export default RandomMadLib;;