import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

// Permitem conexiunea de la frontend-ul tau de Vercel
app.use(cors());
app.use(express.json());

const PI_API_KEY = process.env.PI_API_KEY;

// Endpoint-ul care deblocheaza plata (cel pe care il asteapta Pi Browser)
app.post('/payments/approve', async (req, res) => {
  const { paymentId } = req.body;
  console.log("Aprobam plata:", paymentId);

  try {
    await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/approve`,
      {},
      { headers: { Authorization: `Key ${PI_API_KEY}` } }
    );
    res.status(200).json({ message: "Approved" });
  } catch (err: any) {
    console.error("Eroare la aprobare:", err.response?.data || err.message);
    res.status(500).json({ error: "Nu s-a putut aproba plata" });
  }
});

// Endpoint-ul care finalizeaza plata dupa ce ai bagat parola
app.post('/payments/complete', async (req, res) => {
  const { paymentId, txid } = req.body;
  try {
    await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      { txid },
      { headers: { Authorization: `Key ${PI_API_KEY}` } }
    );
    res.status(200).json({ message: "Completed" });
  } catch (err: any) {
    res.status(500).json({ error: "Nu s-a putut finaliza" });
  }
});

app.get('/', (req, res) => {
  res.send("Backend FitPot este ONLINE ✅");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server activ pe portul ${PORT}`);
});
