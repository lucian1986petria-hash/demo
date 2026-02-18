import React, { useState } from 'react';
import './Shop.css';

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

  const onJoinArena = (arena: typeof arenas[0]) => {
    setStatus(`Initializing entry for ${arena.name}...`);
    
    // Pi SDK Payment Configuration
    const paymentData = {
      amount: arena.amount,
      memo: `FitPot Entry: ${arena.name}`,
      metadata: { sku: arena.sku },
    };

    console.log("Sending payment to wallet:", paymentData);
    // Pi.createPayment will be triggered here
  };

  return (
    <div className="shop-container">
      <header className="shop-header" style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ color: '#6d28d9', fontSize: '2.5rem', marginBottom: '10px' }}>FitPot Arena</h1>
        <p className="status-bar" style={{ fontStyle: 'italic', color: '#4b5563', minHeight: '20px' }}>{status}</p>
      </header>

      <div className="product-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px' }}>
        {arenas.map((arena) => (
          <div key={arena.sku} className="product-card" style={{ border: '1px solid #e5e7eb', borderRadius: '16px', padding: '20px', textAlign: 'center', backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <img src={arena.image} alt={arena.name} style={{ width: '100px', height: '100px', marginBottom: '15px' }} />
            <h2 style={{ margin: '10px 0', color: '#1f2937' }}>{arena.name}</h2>
            <p style={{ fontSize: '15px', color: '#6b7280', marginBottom: '20px' }}>{arena.description}</p>
            <button 
              onClick={() => onJoinArena(arena)}
              style={{ backgroundColor: '#6d28d9', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', width: '100%', transition: 'background-color 0.2s' }}
            >
