const axios = require('axios');

module.exports = async (req, res) => {
  // Permitem accesul de la frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { paymentId, txid } = req.body || {};
  const PI_API_KEY = process.env.PI_API_KEY;

  try {
    // Verificam daca e o cerere de aprobare
    if (req.body && paymentId && !txid) {
      await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {}, {
        headers: { Authorization: `Key ${PI_API_KEY}` }
      });
      return res.status(200).json({ message: "Approved" });
    }

    // Verificam daca e o cerere de finalizare (complete)
    if (req.body && paymentId && txid) {
      await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/complete`, { txid }, {
        headers: { Authorization: `Key ${PI_API_KEY}` }
      });
      return res.status(200).json({ message: "Completed" });
    }
    
    // Mesaj de test daca accesezi link-ul direct in browser
    return res.status(200).send("Backend FitPot API este activ! ✅");

  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ error: "Eroare la Pi API" });
  }
};
