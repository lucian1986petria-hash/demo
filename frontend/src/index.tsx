import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // Pasul 1: Autentificarea (se intampla cand se deschide aplicatia)
  useEffect(() => {
    const login = async () => {
      try {
        if ((window as any).Pi) {
          const scopes = ['username', 'payments'];
          const auth = await (window as any).Pi.authenticate(scopes, (payment: any) => {
            console.log("Plata incompleta gasita:", payment);
          });
          console.log("Te-ai logat ca:", auth.user.username);
        }
      } catch (err) {
        console.error("Eroare la logare:", err);
      }
    };
    login();
  }, []);

  // Pasul 2: Plata (cand apesi butonul)
  const handlePayment = async () => {
    if (!(window as any).Pi) {
      alert("Deschide in Pi Browser!");
      return;
    }

    try {
      (window as any).Pi.createPayment({
        amount: 0.1, // Testam cu o suma mica
        memo: "Test FitPot",
        metadata: { id: "test-1" },
      }, {
        onReadyForServerApproval: (paymentId: string) => {
          console.log("Asteptam aprobarea serverului...", paymentId);
          // Aici Pi cere un 'ACK' de la backend. 
          // Pentru test, uneori trece si fara daca e configurat corect in Portal.
        },
        onReadyForServerCompletion: (paymentId: string, txid: string) => {
          alert("Plata reusita!");
        },
        onCancel: (paymentId: string) => alert("Plata anulata."),
        onError: (error: Error) => alert("Eroare: " + error.message),
      });
    } catch (err: any) {
      alert("Eroare la initiere plata: " + err.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#8A2BE2' }}>FitPot 🏃‍♂️</h1>
      <p>Status: Portofel Conectat</p>
      <button 
        onClick={handlePayment}
        style={{ padding: '15px 30px', borderRadius: '30px', border: 'none', backgroundColor: '#8A2BE2', color: '#fff', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}
      >
        TEST PLATA PI
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
