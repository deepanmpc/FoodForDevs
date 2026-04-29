# FoodForDevs 🍔

> "The best code is written after lunch." — Every Developer

Order food from your terminal using Zomato MCP.

## Quick Start

### 1. Install Claude Desktop

Download: https://claude.com/download

### 2. Setup Zomato MCP

Run in terminal:

```bash
cat > ~/Library/Application\ Support/Claude/claude_desktop_config.json << 'EOF'
{
  "mcpServers": {
    "zomato-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp-server.zomato.com/mcp"
      ]
    }
  }
}
EOF
```

### 3. Restart Claude Desktop

Press `Cmd + Q` to quit, then reopen.

### 4. Sign In

In Claude Desktop chat, type:
```
find pizza restaurants
```

Browser opens - **login with your regular Zomato phone number**.

### 5. Start Gemini CLI

```bash
cd /Users/deepandee/Desktop/FoodForDevs
gemini
```

### 6. Order Food!

```
/zomato:find biryani
/zomato:menu 12345
/zomato:order chicken biryani
```

---

## Agentic Ordering 🔮

Set your preferences once, and let the agent handle the rest!

### Tell the Agent Your Preferences

Just share your food preferences with the agent:

**Example:**
```
My preferences:
- I love biryani, especially chicken biryani
- Prefer less spicy food
- My favorite restaurants: Paradise Biryani, Behrouz
- Usually order for 2 people
- Delivery within 3km
- Budget: ₹500-800 per person
```

The agent remembers this and will:

1. **Search smart** - Find restaurants matching your taste
2. **Recommend smart** - Suggest based on your favorites
3. **Order smart** - Place orders matching your budget
4. **Track automatically** - Keep you updated

### How It Works

**Tell the agent once:**
```
Tonight I want something for dinner
```

The agent will:
- Find restaurants you like
- Show you menu options
- Add your usual order to cart
- Ask to confirm
- Place the order
- Track until delivery

**That's it!** No need to search every time.

---

## Commands

| Command | Description |
|---------|-------------|
| `/zomato:find <food>` | Find restaurants |
| `/zomato:menu <restaurant_id>` | View menu |
| `/zomato:cart <item_id> <qty>` | Add to cart |
| `/zomato:order <request>` | Place order |
| `/zomato:cancel <order_id>` | Cancel order |
| `/zomato:pay <order_id>` | Get payment |
| `/zomato:status <order_id>` | Track order |

---

## Troubleshooting

### Not getting OAuth prompt?
- Quit Claude Desktop completely (Cmd + Q)
- Reopen and try again

### Token expired?
- Simply log in again when prompted

### Commands not working?
- Make sure you have internet connection
- Try restarting Claude Desktop

---

## Done! Enjoy your food! 🍕