document.addEventListener("DOMContentLoaded", function () {
    const chatWindow = document.getElementById("chat-window");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const voiceBtn = document.getElementById("voice-btn");
    const typingIndicator = document.getElementById("typing-indicator");

    const botResponses = {
        "hello": "Hello! How can I assist you today? 😊",
        "how are you": "I'm just a chatbot, but I'm here to help! 😃",
        "what services do you offer": "We provide pet checkups, grooming, vaccinations, and more! 🐾",
        "where is the clinic": "Our clinic is located at 123 Pet Street, Pet City. 📍",
        "goodbye": "Goodbye! Have a great day! 👋",
        "default": "I'm not sure about that. Can you ask something else? 🤔"
    };

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;

        if (sender === "bot") {
            speakText(message);
        }
    }

    function getBotResponse(userText) {
        userText = userText.toLowerCase();
        return botResponses[userText] || botResponses["default"];
    }

    function handleUserMessage() {
        const userText = userInput.value.trim();
        if (userText === "") return;

        appendMessage("user", userText);
        userInput.value = "";

        typingIndicator.style.display = "block";
        setTimeout(() => {
            typingIndicator.style.display = "none";
            const botReply = getBotResponse(userText);
            appendMessage("bot", botReply);
        }, 1200);
    }

    function speakText(text) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US";
        speech.pitch = 1;
        speech.rate = 1;
        window.speechSynthesis.speak(speech);
    }

    function startVoiceRecognition() {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (event) {
            const voiceText = event.results[0][0].transcript;
            appendMessage("user", voiceText);

            typingIndicator.style.display = "block";
            setTimeout(() => {
                typingIndicator.style.display = "none";
                const botReply = getBotResponse(voiceText);
                appendMessage("bot", botReply);
            }, 1200);
        };

        recognition.onerror = function () {
            alert("Voice recognition error. Please try again.");
        };
    }

    sendBtn.addEventListener("click", handleUserMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleUserMessage();
        }
    });

    voiceBtn.addEventListener("click", startVoiceRecognition);
});
