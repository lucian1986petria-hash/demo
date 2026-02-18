import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  useEffect(() => {
    const login = async () => {
      try {
        if ((window as any).Pi) {
          const scopes = ['username', 'payments'];
          await (window as any).Pi.authenticate(scopes, (payment: any) => {
            console.log("Plata incompleta:", payment);
          });
        }
      } catch (err) {
        console.error("Eroare la logare:", err);
      }
    };
    login();
  }, []);

  const handlePayment = async () => {
    if (!(window as any).Pi) {
      alert("Deschide in Pi Browser!");
      return;
    }

    try {
      (window as any).Pi.createPayment({
        amount: 0.1,
        memo: "Test FitPot",
        metadata: { id: "test-1" },
      }, {
        onReadyForServerApproval: async (paymentId: string) => {
          await fetch('https://demo-flame-eta-27.vercel.app/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paymentId }),
          });
        },
        onReadyForServerCompletion: async (paymentId: string, txid: string) => {
          await fetch('https://demo-flame-eta-27.vercel.app/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paymentId, txid }),
          });
          alert("Plata reusita! FitPot te asteapta in arena.");
        },
        onCancel: (paymentId: string) => console.log("Anulat"),
        onError: (error: Error) => alert("Eroare: " + error.message),
      });
    } catch (err: any) {
      alert("Eroare: " + err.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#8A2BE2', fontSize: '3rem' }}>FitPot 🏃‍♂️</h1>
      <p style={{ color: '#aaa' }}>Status: Gata de actiune</p>
      <div style={{ padding: '20px', border: '1px solid #333', borderRadius: '15px', backgroundColor: '#111' }}>
        <p>Miza de test: 0.1 Pi</p>
        <button 
          onClick={handlePayment}
          style={{ padding: '15px 30px', borderRadius: '30px', border: 'none', backgroundColor: '#8A2BE2', color: '#fff', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}
        >
          TEST PLATA PI
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
