/**
 * Simple Chatbot UI
 * Basic user interface for the chatbot
 */

class ChatbotUI {
    constructor(chatbot) {
        this.chatbot = chatbot;
        this.chatContainer = null;
        this.inputElement = null;
        this.initializeUI();
    }

    initializeUI() {
        // Create chat container
        this.chatContainer = document.createElement('div');
        this.chatContainer.className = 'chatbot-container';
        this.chatContainer.innerHTML = `
            <div class="chatbot-header">
                <h3>Simple Chatbot</h3>
            </div>
            <div class="chatbot-messages" id="chatMessages"></div>
            <div class="chatbot-input">
                <input type="text" id="chatInput" placeholder="Type your message here...">
                <button id="sendButton">Send</button>
            </div>
        `;

        // Add styles
        this.addStyles();

        // Add to page
        document.body.appendChild(this.chatContainer);

        // Get elements
        this.inputElement = document.getElementById('chatInput');
        this.messagesElement = document.getElementById('chatMessages');
        this.sendButton = document.getElementById('sendButton');

        // Add event listeners
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.inputElement.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Show greeting
        this.addMessage('bot', this.chatbot.greeting);
    }

    addStyles() {
        const styles = `
            .chatbot-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 350px;
                height: 500px;
                background: white;
                border: 1px solid #ddd;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                display: flex;
                flex-direction: column;
                font-family: Arial, sans-serif;
            }

            .chatbot-header {
                background: #007bff;
                color: white;
                padding: 15px;
                border-radius: 10px 10px 0 0;
            }

            .chatbot-header h3 {
                margin: 0;
                font-size: 16px;
            }

            .chatbot-messages {
                flex: 1;
                padding: 15px;
                overflow-y: auto;
                background: #f8f9fa;
            }

            .message {
                margin-bottom: 10px;
                padding: 8px 12px;
                border-radius: 18px;
                max-width: 80%;
                word-wrap: break-word;
            }

            .user-message {
                background: #007bff;
                color: white;
                margin-left: auto;
                border-bottom-right-radius: 4px;
            }

            .bot-message {
                background: white;
                border: 1px solid #ddd;
                margin-right: auto;
                border-bottom-left-radius: 4px;
            }

            .chatbot-input {
                padding: 15px;
                border-top: 1px solid #ddd;
                display: flex;
                gap: 10px;
            }

            .chatbot-input input {
                flex: 1;
                padding: 8px 12px;
                border: 1px solid #ddd;
                border-radius: 20px;
                outline: none;
            }

            .chatbot-input button {
                background: #007bff;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 20px;
                cursor: pointer;
            }

            .chatbot-input button:hover {
                background: #0056b3;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        this.messagesElement.appendChild(messageDiv);
        this.messagesElement.scrollTop = this.messagesElement.scrollHeight;
    }

    sendMessage() {
        const message = this.inputElement.value.trim();
        if (message) {
            // Add user message
            this.addMessage('user', message);
            this.inputElement.value = '';

            // Get bot response
            const response = this.chatbot.processInput(message);
            
            // Simulate typing delay
            setTimeout(() => {
                this.addMessage('bot', response);
            }, 500);
        }
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChatbotUI;
}