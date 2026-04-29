# Zomato MCP Agent 🍔

> "The best code is written after lunch." — Every Developer

A local MCP proxy server that wraps Zomato's remote HTTP MCP.

## Supported Tools

- **Claude Desktop** — ✅ Working — [Download](https://claude.com/download)
- **Claude Code** — ✅ Working — `npm install -g @anthropic-ai/claude-code`
- **Gemini CLI** — ✅ Working — `npm install -g @google/gemini-cli`
- **Codex** — 🔄 Beta — VSCode Insiders + AI features
- **OpenCode** — 🔄 Beta — [opencode.ai](https://opencode.ai)

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
cd /path/to/FoodForDevs
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
- Search smart
- Recommend smart
- Order smart
- Track automatically

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

## Done! Enjoy your food! 🍕