import React from 'react';
import Navigation from '../components/Navigation';

function About() {
  return (
    <React.Fragment>
      <Navigation path="about" />
      <div
        style={{
          padding: '2%',
        }}
      >
        {' '}
        <h1 style={{ textAlign: 'center' }}>About</h1>
        <h3> Genee</h3>
        <div className="aboutpage">
          Here you can see some details about Genee.
        </div>
        <div className="aboutpage">
          Version 1.0.0
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
