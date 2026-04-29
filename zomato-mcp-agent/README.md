# Zomato MCP Agent 🍔

> "The best code is written after lunch." — Every Developer

A local MCP proxy server that wraps Zomato's remote HTTP MCP for use with Claude Desktop, Claude Code, Gemini CLI, Codex, and OpenCode.

## Supported Tools

| Tool | Status | Install |
|------|--------|--------|
| Claude Desktop | ✅ Working | https://claude.com/download |
| Claude Code CLI | ✅ Working | `npm install -g @anthropic-ai/claude-code` |
| Gemini CLI | ✅ Working | `npm install -g @google/gemini-cli` |
| Codex (VSCode AI) | 🔄 Beta | VSCode Insiders + AI features |
| OpenCode | 🔄 Beta | https://opencode.ai |

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

In the chat, type:
```
find pizza restaurants
```

Browser opens - **login with your regular Zomato phone number**.

### 5. Start CLI

```bash
# Navigate to this project directory
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

The agent remembers this and will:
1. Search smart
2. Recommend smart
3. Order smart
4. Track automatically

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
- Quit the tool completely
- Reopen and try again

### Token expired?
- Simply log in again when prompted

### Commands not working?
- Make sure you have internet connection
- Try restarting the tool

---

## Done! Enjoy your food! 🍕