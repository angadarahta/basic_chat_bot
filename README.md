## Simple Rule-Based Chatbot

A lightweight, rule-based chatbot built with vanilla JavaScript that can handle common queries.

## Features

- 🤖 Simple pattern matching for common queries
- 🌐 Works in both browser and Node.js environments
- 📱 Responsive web interface
- 💬 Multiple response variations
- 🔧 Easy to extend with new rules

## Installation & Usage

### Option 1: Web Browser
1. Download all files to a directory
2. Open `index.html` in your web browser
3. Start chatting!

### Option 2: Node.js Console
1. Ensure you have Node.js installed
2. Navigate to the project directory
3. Run: `node app.js`
4. Type your messages and press Enter
5. Type "exit" to quit

## Supported Queries

The chatbot currently handles:
- **Greetings**: hello, hi, hey, good morning
- **Farewells**: bye, goodbye, see you
- **Help**: help, support, assist
- **Business Hours**: hours, open, close, schedule
- **Location**: location, address, where
- **Contact**: contact, phone, email, number
- **Thanks**: thanks, thank you, appreciate

## Customization

### Adding New Rules

In `chatbot.js`, add new rules to the `rules` object:

```javascript
this.rules.yourNewRule = {
    patterns: ['keyword1', 'keyword2'],
    responses: ['Response 1', 'Response 2', 'Response 3']
};
```

### Programmatic Usage

```javascript
const SimpleChatbot = require('./chatbot.js');
const chatbot = new SimpleChatbot();

// Get response
const response = chatbot.getResponse('hello');
console.log(response); // "Hello! How can I help you?"

// Add custom rule
chatbot.addRule('pricing', ['price', 'cost', 'how much'], 
    ['Our pricing starts at $99.', 'Contact us for a custom quote!']);
```

## File Structure

- `chatbot.js` - Core chatbot logic and rule definitions
- `app.js` - Application controller and interface handlers
- `index.html` - Web interface
- `package.json` - Node.js configuration

## Extending

To make the chatbot more sophisticated, consider:
- Adding natural language processing
- Implementing conversation context
- Adding API integrations
- Creating a database for dynamic rules

## License

MIT License - Feel free to use and modify for your projects!