// server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
    const { name, email, message } = req.body;

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !message) {
        return res.status(400).send('Todos os campos são obrigatórios.');
    }

    // ID do Google Forms e os IDs de cada campo (modifique para seus próprios IDs)
    const googleFormId = '1FAIpQLSd1NP-UseD1RGyiSm_5i3ZrwOPJHDET1E7y8uEHccJJUTHoww'; // Substitua pelo ID do seu formulário
    const entryNameId = 'entry.hj99tb2';
    const entryEmailId = 'entry.hj99tb4';
    const entryMessageId = 'entry.hj99tb6';

    const googleFormUrl = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse`;

    // Tenta enviar os dados para o Google Forms
    try {
        await axios.post(googleFormUrl, null, {
            params: {
                [entryNameId]: name,
                [entryEmailId]: email,
                [entryMessageId]: message,
            },
        });
        res.status(200).send('Formulário enviado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao enviar o formulário.');
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
