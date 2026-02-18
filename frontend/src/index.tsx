import React from 'react';
import ReactDOM from 'react-dom';

const FitPotApp = () => {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    backgroundColor: '#121212',
    color: '#ffffff',
    minHeight: '100vh'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#1e1e1e',
    borderRadius: '20px',
    padding: '30px',
    marginTop: '20px',
    border: '1px solid #333',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#8A2BE2',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#A020F0', fontSize: '3rem', marginBottom: '10px' }}>FitPot</h1>
      <p style={{ fontSize: '1.2rem', color: '#bbb' }}>Mergi. Câștigă. Repetă.</p>
      
      <div style={cardStyle}>
        <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>👟 Pași astăzi</div>
        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#A020F0' }}>0</div>
        <hr style={{ borderColor: '#333', margin: '20px 0' }} />
        <p>Miza în Arena: <strong>10 Pi</strong></p>
        <button 
          style={buttonStyle}
          onClick={() => window.alert('Se conectează la Pi Wallet...')}
        >
          INTRĂ ÎN ARENĂ
        </button>
      </div>

      <p style={{ marginTop: '40px', fontSize: '0.8rem', color: '#555' }}>
        Portofel Destinație: GD6LEB...XNHP
      </p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <FitPotApp />
  </React.StrictMode>,
  document.getElementById('root')
);
