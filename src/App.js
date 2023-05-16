import React from 'react';
import './App.css';
import iot1 from './images/iot1.png'; // Import the PNG image

const headingOneStyle = {
  textAlign: 'left',
  margin: '0',
  color: 'white',
  fontSize: '4em',
  lineHeight: '1'
};

const headingTwoStyle = {
  textAlign: 'left',
  margin: '0',
  textTransform: 'uppercase',
  color: 'white',
  marginTop: '0.5em',
  fontWeight: 'normal',
  marginLeft: '20px'
};

const loginButtonStyle = {
  padding: '10px',
  backgroundColor: '#fff',
  color: '#132f56',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  position: 'absolute',
  left: '45px',
  marginTop: '1em'
};

function App() {
  const appStyle = {
    backgroundColor: '#132f56',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    height: '100vh',
    width: '100vw'
  };

  const imgStyle = {
    width: '30%',
    height: '85%',
    marginRight: '200px',
    marginTop: '35px' // Added marginTop property with a value of '20px'
  };

  return (
    <div className="App" style={appStyle}>
      <div>
        <h1 style={headingOneStyle}>Welcome To The Smart<br/>Environmental<br/>Monitoring System</h1>
        <h2 style={headingTwoStyle}>Monitor illegal mining activities in Atewa Forest</h2>
        <button style={loginButtonStyle}>Login</button>
      </div>
      <div style={imgStyle}>
        <img src={iot1} alt="IoT One" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}

export default App;

