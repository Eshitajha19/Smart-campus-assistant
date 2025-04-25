// Handle navigation for dashboard (optional)
function navigateTo(feature) {
    alert(`Navigating to ${feature}`);
  }
  
  // Handle sending messages
  function sendMessage() {
    const userMessage = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");
  
    if (userMessage.trim() === "") {
      alert("Please enter a message!");
      return;
    }
  
    // Display user message in chatbox
    const userMessageElement = document.createElement("div");
    userMessageElement.textContent = `You: ${userMessage}`;
    chatbox.appendChild(userMessageElement);
  
    // Display chatbot response placeholder
    const botMessageElement = document.createElement("div");
    botMessageElement.textContent = `Bot: Thinking...`;
    chatbox.appendChild(botMessageElement);
  
    // Clear input field
    document.getElementById("userInput").value = "";
  
    // Fetch chatbot response
    fetchChatbotResponse(userMessage, botMessageElement);
  }
  
  // Fetch response from backend
  function fetchChatbotResponse(message, element) {
    fetch("http://localhost:3000/chat", {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        element.textContent = `Bot: ${data.reply}`;
      })
      .catch((error) => {
        element.textContent = "Bot: Sorry, something went wrong.";
        console.error("Error fetching chatbot response:", error);
      });
  }

  // Navigate to different sections
function navigateTo(feature) {
    alert(`Navigating to ${feature} section!`);
  }
  
  // Handle sending messages
  function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");
  
    if (!userInput.trim()) {
      alert("Please enter a message.");
      return;
    }
  
    // Add user message to chatbox
    const userMessageElement = document.createElement("div");
    userMessageElement.textContent = `You: ${userInput}`;
    chatbox.appendChild(userMessageElement);
  
    // Add loading message for chatbot response
    const botMessageElement = document.createElement("div");
    botMessageElement.textContent = "Bot: Thinking...";
    chatbox.appendChild(botMessageElement);
  
    // Simulate chatbot response after delay (replace with real API)
    setTimeout(() => {
      botMessageElement.textContent = "Bot: Hello! How can I assist you today?";
    }, 1000);
  
    // Clear input field
    document.getElementById("userInput").value = "";
  }