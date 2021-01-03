import React from 'react';
import PropTypes from 'prop-types';

import styles  from '../styles';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

class CopyCat extends React.Component {
  
  render() {

    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}} >Copy Cat&nbsp; 
    {this.props.name ? this.props.name : 'Tom'}</h1>
        <input type='text' value={this.props.input} onChange={this.props.onChange} ></input>
        <img 
          style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying? this.props.input : null}</p>
      </div>
    );
  };
}
CopyCat.propTypes = {
    input: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    copying: PropTypes.bool.isRequired,
    toggleTape: PropTypes.func.isRequired
}
export default CopyCat;