const express = require("express");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(bodyParser.json());

// OpenAI API Configuration
const configuration = new Configuration({
  apiKey: "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", // Replace with your OpenAI API key
});
const openai = new OpenAIApi(configuration);

// Chat Route
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo", // Use "gpt-4" if needed
      messages: [{ role: "user", content: userMessage }],
    });

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    res.status(500).json({ reply: "Sorry, there was an issue with the chatbot." });
  }
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});