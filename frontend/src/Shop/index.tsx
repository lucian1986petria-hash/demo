import React, { useState } from 'react';
const arenas = [
  {
    sku: 'bronze-arena',
    name: 'Bronze Arena (Daily)',
    description: '5,000 steps challenge. Perfect for beginners!',
    amount: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/5219/5219258.png',
  },
  {
    sku: 'silver-arena',
    name: 'Silver Arena (Pro)',
    description: 'Do you have what it takes for 10,000 steps? Bigger rewards!',
    amount: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/3132/3132730.png',
  },
  {
    sku: 'gold-arena',
    name: 'Gold Arena (Elite)',
    description: '15,000 steps for champions. The stakes are high!',
    amount: 10,
    image: 'https://cdn-icons-png.flaticon.com/512/2583/2583344.png',
  },
];

const Shop: React.FC = () => {
  const [status, setStatus] = useState<string>('Select an arena to join the competition');

  const onJoinArena = (arena: any) => {
    setStatus(`Initializing entry for ${arena.name}...`);
    console.log("Staking initiated for:", arena.amount);
  };

  return (
    <div className="shop-container" style={{ fontFamily: 'sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <header className="shop-header" style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h1 style={{ color: '#6d28d9', fontSize: '32px', fontWeight: 'bold' }}>FitPot Arena</h1>
        <p className="status-bar" style={{ color: '#4b5563', marginTop: '10px' }}>{status}</p>
      </header>

      <div className="product-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0 20px 40px' }}>
        {arenas.map((arena) => (
          <div key={arena.sku} className="product-card" style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <img src={arena.image} alt={arena.name} style={{ width: '80px', height: '80px', marginBottom: '15px' }} />
            <h2 style={{ fontSize: '20px', color: '#1f2937', marginBottom: '8px' }}>{arena.name}</h2>
            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '20px' }}>{arena.description}</p>
            <button 
              onClick={() => onJoinArena(arena)}
              style={{ backgroundColor: '#6d28d9', color: 'white', border: 'none', width: '100%', padding: '12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}
            >
              Stake {arena.amount} Pi
            </button>
          </div>
        ))}
      </div>
      
      <footer className="shop-footer" style={{ textAlign: 'center', padding: '20px', color: '#9ca3af', fontSize: '12px' }}>
        <p>© 2026 FitPot - Move & Earn Protocol</p>
      </footer>
    </div>
  );
};

export default Shop;
