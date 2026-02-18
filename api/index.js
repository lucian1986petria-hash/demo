const axios = require('axios');

module.exports = async (req, res) => {
  // Setăm permisiunile să poată vorbi cu butonul
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Mesaj de confirmare pentru browser
  if (req.method === 'GET') {
    return res.status(200).send("API FitPot este Online! ✅");
  }

  const { paymentId, txid } = req.body || {};
  const PI_API_KEY = process.env.PI_API_KEY;

  try {
    if (paymentId && !txid) {
      await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {}, {
        headers: { Authorization: `Key ${PI_API_KEY}` }
      });
      return res.status(200).json({ message: "Approved" });
    }

    if (paymentId && txid) {
      await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/complete`, { txid }, {
        headers: { Authorization: `Key ${PI_API_KEY}` }
      });
      return res.status(200).json({ message: "Completed" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
