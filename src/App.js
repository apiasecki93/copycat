import React from 'react';
// import ReactDOM from 'react-dom';
import CopyCat from './components/copyCat'

// const images = {
//   copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
//   quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
// };


class App extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: '',
      name: 'MAX'
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  handleChange(e){
    this.setState({input: e.target.value})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    
    return (
      <CopyCat
      copying={copying}
      toggleTape = {toggleTape}
      input= {this.state.input}
      onChange ={this.handleChange}
      name = {this.state.name}
      />
    );
  };
}

export default App;

// ReactDOM.render(<App />, document.getElementById('app'));