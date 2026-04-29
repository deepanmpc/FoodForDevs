# FoodForDevs 🍔

> "The best code is written after lunch." — Every Developer

Order food from your terminal using Zomato MCP.

## Supported Tools

- **Claude Desktop** — ✅ Working — [Download](https://claude.com/download)
- **Claude Code** — ✅ Working — `npm install -g @anthropic-ai/claude-code`
- **Gemini CLI** — ✅ Working — `npm install -g @google/gemini-cli`
- **Codex** — 🔄 Beta — VSCode Insiders + AI features
- **OpenCode** — 🔄 Beta — [opencode.ai](https://opencode.ai)

## Quick Start

### 1. Install Any Supported Tool

Pick one from the list above.

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

### 3. Restart the Tool

Press `Cmd + Q` to quit, then reopen.

### 4. Sign In

In the chat, type:
```
find pizza restaurants
```

Browser opens - **login with your regular Zomato phone number**.

### 5. Start CLI

```bash
# Navigate to this project directory
cd /path/to/FoodForDevs

# Start your preferred CLI
gemini    # or: claude, codex, opencode
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

The agent will:
1. **Search smart** - Find restaurants matching your taste
2. **Recommend smart** - Suggest based on your favorites
3. **Order smart** - Place orders matching your budget
4. **Track automatically** - Keep you updated

### How It Works

**Tell the agent once:**
```
Tonight I want something for dinner
```

The agent will handle everything automatically!

---

## Done! Enjoy your food! 🍕