# LinkedIn Posting Plan - FoodForDevs Project
## 9-Day Content Strategy

---

### Day 1 - Announcement (Launch Day)

**Hook:** "I just built something that every developer has been waiting for."

**Content:**
```
🍔 FoodForDevs — Order food directly from your terminal!

No more switching between apps while coding. Just tell your AI assistant what you want, and boom — food is on the way.

Built with Zomato MCP + Claude Desktop + Gemini CLI.

Who's hungry? 🚀
```

**Media:** Demo video of searching "biryani" in Gemini CLI → getting restaurant results

**What to record:**
1. Open Gemini CLI
2. Type `/zomato:find biryani`
3. Show restaurant results with names, ratings, delivery time
4. Show the order confirmation

---

### Day 2 - How It Works

**Hook:** "Here's the tech stack behind FoodForDevs."

**Content:**
```
The stack:
→ Claude Desktop / Claude Code / Gemini CLI
→ Zomato MCP (Model Context Protocol)
→ mcp-remote for OAuth handling
→ TypeScript + Node.js

The magic: OAuth works even when the tool isn't whitelisted.
Sometimes the smartest solutions are the simplest hacks. 💡
```

**Media:** Screenshot of the MCP config in VSCode

**What to screenshot:**
1. Show `claude_desktop_config.json` with mcpServers: zomato-mcp

---

### Day 3 - The "Why"

**Hook:** "Why did I build this? Because I got hungry at 2AM while debugging."

**Content:**
```
Every developer knows this moment:

🧑‍💻 *Deep in code*
🤔 "I'm hungry but don't want to leave"
📱 *Grab phone* *Open app* *Search* *Browse* *Order* *Wait*
😴 *Code interrupted*

Now? Just:

/zomato:find biryani

And get back to coding. That's the point. 🎯
```

**Media:** Before/after workflow comparison

**What to create:**
1. Create a simple 2-panel meme:
   - Left: Phone → Zomato App → Browse → Order (5 min)
   - Right: CLI → /zomato:find → Food (30 sec)

---

### Day 4 - Agentic Ordering Magic

**Hook:** "This is the part I'm most excited about."

**Content:**
```
The future of food ordering is AGENTIC.

Tell the agent your preferences ONCE:
- "I love chicken biryani"
- "Less spicy"
- "Budget: ₹600"

Then just say: "Get me dinner"

And it:
→ Finds matching restaurants
→ Shows your favorites
→ Orders your usual
→ Tracks delivery

No more repetitive searching. The agent remembers. 🔮
```

**Media:** Demo of setting preferences and ordering with one prompt

**What to record:**
1. Show typing preferences to Claude Desktop
2. Say "get me dinner"
3. Show agent automatically finding and ordering

---

### Day 5 - Support for Multiple Tools

**Hook:** "One project, five ways to use it."

**Content:**
```
FoodForDevs works with:

✅ Claude Desktop  — Stable, production-ready
✅ Claude Code CLI — Fast, terminal-based
✅ Gemini CLI    — Google's AI CLI
🔄 Codex       — VSCode AI (Beta)
🔄 OpenCode    — Open source CLI (Beta)

The beauty of MCP? Write once, use everywhere.
Your AI assistant is now your food assistant. 🍕
```

**Media:** Logos/memes of each tool

**What to create:**
1. Simple graphic with all 5 tools listed
2. Use tool logos or emojis
3. Green check for working, yellow for beta

---

### Day 6 - Call to Action

**Hook:** "Try it and let me know what you think."

**Content:**
```
🎉 FoodForDevs is live!

Clone it → Set it up → Order food → Get back to coding

GitHub: github.com/deepanmpc/FoodForDevs

Setup takes 2 minutes. No API keys needed.

Tag a developer who needs this in their life 🙌

#AI #FoodTech #Developer #MCP #Claude #Gemini #Coding
```

**Media:** Project GitHub star counts, repo link screenshot

**What to screenshot:**
1. GitHub repo page
2. Star count (if any)
3. Clone count (if any)

---

## What Pics/Videos to Create

### Day 1 - Demo Video
- Record screen showing: Open Gemini CLI → type `/zomato:find pizza` → see results with restaurant names, ratings, delivery time

### Day 2 - Config Screenshot  
- Show the `claude_desktop_config.json` with Zomato MCP config

### Day 3 - Workflow Meme
- Create simple meme: "Before: Phone → App → Order" vs "After: CLI → /zomato:find"

### Day 4 - Preference Demo
- Screen recording showing: Set preferences once → say "get dinner" → auto-order

### Day 5 - Tool Logos
- Simple graphic with all 5 tools listed with their status

### Day 6 - Repository Hero
- GitHub repo screenshot with stars/forks

---

## 3 Bonus Posts (Day 7-9)

### Day 7 - Behind the Scenes

**Hook:** "The OAuth challenge no one talks about."

**Content:**
```
The problem I couldn't solve:

Zomato's OAuth only works with:
→ Claude.ai
→ VSCode.dev
→ ChatGPT

Not Gemini CLI. Not Claude Code CLI.

So I built a local proxy server using mcp-remote.
It reads the token from Claude Desktop and forwards requests.

Sometimes the best code is code that solves YOUR problem first. 🎯
```

**Media:** Architecture diagram OR simple flow chart

---

### Day 8 - Developer Lifestyle

**Hook:** "This is how coding sessions go now."

**Content:**
```
Coding session v2.0:

11:00 AM — Coffee + /zomato:find dosa
12:30 PM — Food arrives
12:35 PM — Back to coding
03:00 PM — /zomato:find chai + samosa
06:00 PM — /zomato:order dinner

Zero context switching.
Zero phone picking.
100% productivity. ☕️→💻→🍔

Your IDE just became a food delivery app.
```

**Media:** Timeline graphic OR funny coder meme

---

### Day 9 - Community Shoutout

**Hook:** "Thank you to everyone who tested."

**Content:**
```
1 week ago, this was just an idea.
Today, FoodForDevs has:

🚀 X developers using it
🍕 Y orders placed
💻 Z CLI tools supported

Thank you to everyone who:
→ Tested the MCP config
→ Found bugs
→ Suggested features
→ Tagged their dev friends

This is just the beginning. Here's to building in public. 🥂

#BuildInPublic #Startups #DeveloperTools
```

**Media:** Testimonial quotes OR engagement screenshot

---

## Pro Tips

- Post at **9AM IST** (best engagement)
- Engage with comments in first 30 mins
- Ask people to tag developers who would love this
- Pin the repo link in comments