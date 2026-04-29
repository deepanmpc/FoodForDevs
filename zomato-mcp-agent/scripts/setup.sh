#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=========================================="
echo "Setting up zomato-mcp-agent"
echo "=========================================="

echo ""
echo "[1/4] Installing dependencies..."
npm install

echo ""
echo "[2/4] Building TypeScript..."
npm run build

echo ""
echo "[3/4] Updating config snippets with absolute paths..."

ABSOLUTE_PATH="$(pwd)"
DIST_PATH="$ABSOLUTE_PATH/dist/index.js"

sed -i "s|ABSOLUTE_PATH_TO|$DIST_PATH|g" gemini-settings-snippet.json
sed -i "s|ABSOLUTE_PATH_TO|$DIST_PATH|g" claude-mcp-snippet.json

echo "Updated paths in config snippets."

echo ""
echo "[4/4] Checking token file..."

TOKEN_PATH="$HOME/.zomato-token"
if [ ! -f "$TOKEN_PATH" ]; then
  echo "=========================================="
  echo "WARNING: Token file not found!"
  echo "=========================================="
  echo ""
  echo "Please authenticate via VSCode first:"
  echo "  1. Install Zomato MCP extension in VSCode"
  echo "  2. Complete OAuth flow in VSCode"
  echo "  3. Copy the Bearer token to ~/.zomato-token"
  echo ""
  echo "To extract your token from VSCode:"
  echo "  macOS: find ~/Library/Application\\ Support/Code -name '*.json' 2>/dev/null | xargs grep -l 'zomato' 2>/dev/null"
  echo ""
else
  echo "Token file found at ~/.zomato-token"
fi

echo ""
echo "=========================================="
echo "Setup complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Get VSCode OAuth token (if not already)"
echo "   - Use Zomato MCP in VSCode"
echo "   - Find token in network tab or VSCode storage"
echo "   - Copy to ~/.zomato-token"
echo ""
echo "2. Register MCP in Gemini CLI:"
echo "   Paste this into ~/.gemini/settings.json:"
echo ""
cat gemini-settings-snippet.json
echo ""
echo "3. Register MCP in Claude Code:"
echo "   Use claude-mcp-snippet.json config"
echo ""
echo "4. Verify with: /mcp status"
echo ""
echo "Usage examples:"
echo "  Gemini CLI: /zomato:find biryani"
echo "  Claude Code: /zomato-find biryani"
echo "=========================================="