import React, { useState } from 'react';
import './Shop.css'; // Asigură-te că fișierul CSS există în folder

const products = [
  {
    sku: 'arena-bronz',
    name: 'Arena Bronz (Zilnică)',
    description: 'Intră în competiția de 5.000 de pași. Câștigă potul zilei!',
    amount: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/5219/5219258.png',
  },
  {
    sku: 'arena-argint',
    name: 'Arena Argint (Pro)',
    description: 'Provocare de 10.000 de pași. Recompense dublate!',
    amount: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/3132/3132730.png',
  },
  {
    sku: 'arena-aur',
    name: 'Arena Aur (Elite)',
    description: 'Miză mare pentru campioni. 15.000 de pași, pot uriaș!',
    amount: 10,
    image: 'https://cdn-icons-png.flaticon.com/512/2583/2583344.png',
  },
];

const Shop: React.FC = () => {
  const [status, setStatus] = useState<string>('Alege o arenă pentru a începe');

  const onOrder = (product: typeof products[0]) => {
    setStatus(`Te înscrii în ${product.name}...`);
    
    // Aici intervine Pi SDK pentru plată
    const paymentData = {
      amount: product.amount,
      memo: `Înscriere FitPot: ${product.name}`,
      metadata: { sku: product.sku },
    };

    console.log("Plată inițiată pentru:", paymentData);
    // Notă: Funcția de plată Pi.createPayment va fi apelată aici după setarea SDK-ului
  };

  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>FitPot Arena</h1>
        <p className="status-bar">{status}</p>
      </header>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.sku} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button className="pay-button" onClick={() => onOrder(product)}>
              Mizează {product.amount} Pi
            </button>
          </div>
        ))}
      </div>
      
      <footer className="shop-footer">
        <p>© 2026 FitPot - Move & Earn</p>
      </footer>
    </div>
  );
};

export default Shop;
