/**
 * Simple Rule-Based Chatbot
 * Main chatbot logic and response handling
 */

class SimpleChatbot {
    constructor() {
        this.rules = [];
        this.defaultResponse = "I'm not sure how to help with that. Can you try asking differently?";
        this.greeting = "Hello! I'm a simple chatbot. How can I help you today?";
    }

    // Add rules to the chatbot
    addRule(pattern, response, options = {}) {
        this.rules.push({
            pattern: pattern instanceof RegExp ? pattern : new RegExp(pattern, 'i'),
            response: response,
            exactMatch: options.exactMatch || false
        });
    }

    // Process user input and return response
    processInput(input) {
        if (!input || input.trim() === '') {
            return "Please type something so I can help you!";
        }

        const cleanInput = input.trim().toLowerCase();

        // Check each rule for matches
        for (const rule of this.rules) {
            if (rule.exactMatch) {
                if (cleanInput === rule.pattern.source.toLowerCase()) {
                    return typeof rule.response === 'function' ? rule.response(input) : rule.response;
                }
            } else {
                if (rule.pattern.test(cleanInput)) {
                    return typeof rule.response === 'function' ? rule.response(input) : rule.response;
                }
            }
        }

        return this.defaultResponse;
    }

    // Initialize with default rules
    initialize() {
        // Greetings
        this.addRule(/^(hi|hello|hey|greetings)/, this.greeting);
        this.addRule(/good morning/, "Good morning! How can I assist you today?");
        this.addRule(/good afternoon/, "Good afternoon! What can I help you with?");
        this.addRule(/good evening/, "Good evening! How may I help you?");

        // Farewells
        this.addRule(/^(bye|goodbye|see ya|cya)/, "Goodbye! Have a great day!");
        this.addRule(/^(thanks|thank you|thx)/, "You're welcome! Is there anything else I can help with?");

        // Help
        this.addRule(/help/, "I can help with common questions. Try asking about hours, location, services, or contact information.");

        return this;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SimpleChatbot;
}