require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

app.post("/gerar", async (req, res) => {
  try {
    const { nome, tema } = req.body;

    const resposta = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `Crie uma notícia curta estilo blog de fofoca sobre ${nome} e o tema ${tema}. 
Não invente crime, acusação grave ou fato confirmado. Use tom curioso e seguro.
Retorne com título e texto curto.`
    });

    res.json({ texto: resposta.output_text });
  } catch (e) {
    res.status(500).json({ erro: "Erro ao gerar texto" });
  }
});

app.listen(3001, () => {
  console.log("IA rodando em http://127.0.0.1:3001");
});