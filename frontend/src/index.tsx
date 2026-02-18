import React from 'react';
import ReactDOM from 'react-dom';

const FitPotApp = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#1a1a1a',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#ffa500' }}>FitPot 🏃‍♂️💰</h1>
      <p>Bine ai venit, Lucian!</p>
      <div style={{ 
        border: '2px solid #333', 
        borderRadius: '15px', 
        padding: '20px', 
        margin: '20px auto',
        maxWidth: '400px'
      }}>
        <h2>Pașii tăi: 0</h2>
        <p>Miza curentă în Pot: 100 Pi</p>
        <button style={{
          backgroundColor: '#ffa500',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '25px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }} onClick={() => alert('Conectare la Pi Wallet...')}>
          Plătește Taxa de Intrare (1 Pi)
        </button>
      </div>
      <p style={{ fontSize: '12px', marginTop: '50px' }}>
        Conectat la Portofelul: GD6LEB...XNHP
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
