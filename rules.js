/**
 * Chatbot Rules Configuration
 * Define all the patterns and responses for the chatbot
 */

function initializeChatbotRules(chatbot) {
    // Business Information
    chatbot.addRule(/hours? of operation|when are you open|business hours/, 
        "We're open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM.");
    
    chatbot.addRule(/location|address|where are you/, 
        "We're located at 123 Main Street, Suite 100, Anytown, USA 12345.");
    
    chatbot.addRule(/phone number|contact number|call you/, 
        "You can reach us at (555) 123-4567.");
    
    chatbot.addRule(/email|contact email/, 
        "Send us an email at info@example.com.");
    
    chatbot.addRule(/website|web site/, 
        "Visit our website at www.example.com for more information.");
    
    // Services
    chatbot.addRule(/services?|what do you offer/, 
        "We offer consulting, technical support, training, and custom development services.");
    
    chatbot.addRule(/pricing|price|cost|how much/, 
        "Our pricing varies based on the service. Please contact us for a custom quote.");
    
    chatbot.addRule(/support|technical support/, 
        "Our technical support team is available Monday-Friday 8AM-8PM. Call (555) 123-4567 for assistance.");
    
    // About
    chatbot.addRule(/about|who are you|what is this/, 
        "We are a technology solutions company helping businesses with their digital transformation needs.");
    
    chatbot.addRule(/team|employees|staff/, 
        "We have a team of 50+ experienced professionals including developers, consultants, and support staff.");
    
    chatbot.addRule(/experience|how long/, 
        "We've been serving clients for over 10 years with proven results and satisfied customers.");
    
    // Common queries with function responses
    chatbot.addRule(/my name is (\w+)/, (input) => {
        const name = input.match(/my name is (\w+)/i)[1];
        return `Nice to meet you, ${name}! How can I help you today?`;
    });
    
    chatbot.addRule(/weather/, 
        "I don't have access to real-time weather data. Please check your local weather service.");
    
    chatbot.addRule(/joke/, 
        "Why do programmers prefer dark mode? Because light attracts bugs! 😄");
    
    chatbot.addRule(/how are you/, 
        "I'm just a chatbot, but I'm functioning perfectly! How can I assist you?");
    
    return chatbot;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeChatbotRules };
}