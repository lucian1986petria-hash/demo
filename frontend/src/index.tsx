import React from 'react';
import ReactDOM from 'react-dom';

// Definim totul aici, fara importuri externe care pot crapa
const App = () => (
  <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
    <h1 style={{ color: '#8A2BE2', fontSize: '40px' }}>FitPot 🏃‍♂️</h1>
    <p>Versiunea 1.0 - Infrastructură activă</p>
    <div style={{ padding: '20px', border: '1px solid #333', borderRadius: '10px', textAlign: 'center' }}>
      <p>Portofel configurat: <strong>GD6LEB...XNHP</strong></p>
      <button style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#8A2BE2', color: '#fff', cursor: 'pointer' }}>
        Test Plată Pi
      </button>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
