import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const messagesFile = path.join(__dirname, 'messages.json');

if (!fs.existsSync(messagesFile)) {
  fs.writeFileSync(messagesFile, '[]', 'utf8');
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Veuillez remplir tous les champs.' });
  }

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Le nom est invalide.' });
  }

  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: "L'adresse e-mail est invalide." });
  }

  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Le message est invalide.' });
  }

  const newMessage = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    date: new Date().toISOString(),
  };

  fs.readFile(messagesFile, 'utf8', (readErr, data) => {
    if (readErr) {
      return res.status(500).json({ error: 'Erreur de lecture du fichier local.' });
    }

    let messages = [];

    try {
      messages = JSON.parse(data || '[]');
    } catch (error) {
      messages = [];
    }

    messages.push(newMessage);

    fs.writeFile(messagesFile, JSON.stringify(messages, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: 'Erreur serveur lors de la sauvegarde.' });
      }

      return res.status(200).json({
        success: true,
        message: 'Message reçu avec succès !',
      });
    });
  });
});

app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send('API Express ap mache!');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});