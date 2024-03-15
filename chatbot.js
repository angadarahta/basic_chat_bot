class SimpleChatbot {
    constructor() {
        this.rules = {
            greeting: {
                patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
                responses: ['Hello! How can I help you?', 'Hi there!', 'Hey! What can I do for you?']
            },
            farewell: {
                patterns: ['bye', 'goodbye', 'see you', 'farewell'],
                responses: ['Goodbye! Have a great day!', 'See you later!', 'Bye! Take care!']
            },
            help: {
                patterns: ['help', 'support', 'assist'],
                responses: ['I can help with common questions. Try asking about hours, location, or services.']
            },
            hours: {
                patterns: ['hours', 'open', 'close', 'schedule'],
                responses: ['We are open Monday to Friday, 9 AM to 6 PM.']
            },
            location: {
                patterns: ['location', 'address', 'where'],
                responses: ['Our office is at 123 Main Street, City, State 12345.']
            },
            contact: {
                patterns: ['contact', 'phone', 'email', 'number'],
                responses: ['You can reach us at (555) 123-4567 or email@example.com.']
            },
            thanks: {
                patterns: ['thanks', 'thank you', 'appreciate'],
                responses: ["You're welcome!", "Happy to help!", "Anytime!"]
            },
            default: {
                responses: ["I'm not sure I understand. Can you rephrase that?", 
                           "I don't have an answer for that. Try asking about hours, location, or contact information."]
            }
        };
    }

    // Preprocess user input
    preprocessInput(input) {
        return input.toLowerCase().trim().replace(/[^\w\s]/gi, '');
    }

    // Find matching rule
    findMatchingRule(input) {
        const processedInput = this.preprocessInput(input);
        
        for (const [ruleName, rule] of Object.entries(this.rules)) {
            if (ruleName === 'default') continue;
            
            for (const pattern of rule.patterns) {
                if (processedInput.includes(pattern)) {
                    return ruleName;
                }
            }
        }
        
        return 'default';
    }

    // Generate response
    getResponse(input) {
        const ruleName = this.findMatchingRule(input);
        const rule = this.rules[ruleName];
        const randomIndex = Math.floor(Math.random() * rule.responses.length);
        
        return rule.responses[randomIndex];
    }

    // Add new rule
    addRule(ruleName, patterns, responses) {
        this.rules[ruleName] = {
            patterns: patterns,
            responses: responses
        };
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SimpleChatbot;
}