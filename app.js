// Main application file
const SimpleChatbot = require('./chatbot.js');

class ChatbotApp {
    constructor() {
        this.chatbot = new SimpleChatbot();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // For web browser usage
        if (typeof document !== 'undefined') {
            const sendButton = document.getElementById('sendButton');
            const userInput = document.getElementById('userInput');
            const chatArea = document.getElementById('chatArea');

            if (sendButton && userInput) {
                sendButton.addEventListener('click', () => this.handleUserInput());
                userInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.handleUserInput();
                    }
                });
            }
        }
        
        // For Node.js console usage
        if (typeof process !== 'undefined') {
            const readline = require('readline');
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            console.log('Chatbot started! Type "exit" to quit.\n');
            this.startConsoleChat(rl);
        }
    }

    handleUserInput() {
        const userInput = document.getElementById('userInput');
        const chatArea = document.getElementById('chatArea');
        
        if (userInput.value.trim()) {
            const userMessage = userInput.value;
            this.addMessageToChat('user', userMessage);
            
            const botResponse = this.chatbot.getResponse(userMessage);
            setTimeout(() => {
                this.addMessageToChat('bot', botResponse);
            }, 500);
            
            userInput.value = '';
        }
    }

    addMessageToChat(sender, message) {
        const chatArea = document.getElementById('chatArea');
        if (chatArea) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}-message`;
            messageDiv.textContent = message;
            chatArea.appendChild(messageDiv);
            chatArea.scrollTop = chatArea.scrollHeight;
        } else {
            // For console output
            const prefix = sender === 'user' ? 'You: ' : 'Bot: ';
            console.log(prefix + message);
        }
    }

    startConsoleChat(rl) {
        const askQuestion = () => {
            rl.question('You: ', (input) => {
                if (input.toLowerCase() === 'exit') {
                    console.log('Goodbye!');
                    rl.close();
                    return;
                }

                const response = this.chatbot.getResponse(input);
                this.addMessageToChat('bot', response);
                console.log(''); // Empty line for readability
                
                askQuestion(); // Continue the conversation
            });
        };

        askQuestion();
    }
}

// Initialize the app
if (typeof document !== 'undefined') {
    // Browser environment
    document.addEventListener('DOMContentLoaded', () => {
        new ChatbotApp();
    });
} else if (typeof process !== 'undefined') {
    // Node.js environment
    new ChatbotApp();
}