import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema
} from '@modelcontextprotocol/sdk/types.js';
import { listZomatoTools, callZomatoTool } from './zomato-client.js';

const SERVER_NAME = 'zomato-mcp-agent';
const SERVER_VERSION = '1.0.0';

const PROMPTS = {
  'zomato-find': {
    name: 'zomato-find',
    description: 'Find nearby Zomato restaurants',
    arguments: [
      { name: 'query', description: 'Search query for restaurants', required: true }
    ]
  },
  'zomato-menu': {
    name: 'zomato-menu',
    description: 'Browse a restaurant menu',
    arguments: [
      { name: 'restaurant_id', description: 'Restaurant ID', required: true }
    ]
  },
  'zomato-cart': {
    name: 'zomato-cart',
    description: 'Add items to cart',
    arguments: [
      { name: 'item_id', description: 'Item ID', required: true },
      { name: 'quantity', description: 'Quantity', required: false }
    ]
  },
  'zomato-order': {
    name: 'zomato-order',
    description: 'Place order',
    arguments: []
  },
  'zomato-pay': {
    name: 'zomato-pay',
    description: 'Get QR code payment for order',
    arguments: [
      { name: 'order_id', description: 'Order ID', required: true }
    ]
  },
  'zomato-status': {
    name: 'zomato-status',
    description: 'Track order status',
    arguments: [
      { name: 'order_id', description: 'Order ID', required: true }
    ]
  }
};

const PROMPT_MESSAGES: Record<string, string> = {
  'zomato-find': `Search for restaurants near my location matching {{query}}. Show name, rating, cuisine, delivery time, restaurant ID.`,
  'zomato-menu': `Fetch full menu for restaurant {{restaurant_id}}. Group by category, show item IDs, prices, descriptions.`,
  'zomato-cart': `Add item {{item_id}} quantity {{quantity}} to cart. Confirm and show cart total.`,
  'zomato-order': `Place the order for current cart. Ask for address if needed. Return order ID and estimated delivery time.`,
  'zomato-pay': `Generate QR code payment for order {{order_id}}. Show all payment details.`,
  'zomato-status': `Track live status of order {{order_id}}. Show current stage, ETA, delivery partner.`
};

class ZomatoMcpServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      { name: SERVER_NAME, version: SERVER_VERSION },
      { capabilities: { tools: {}, prompts: {} } }
    );

    this.setupHandlers();
  }

  private setupHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const tools = await listZomatoTools();
      return { tools: tools as never[] };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
      const result = await callZomatoTool(name, args || {});
      return { content: [{ type: 'text', text: JSON.stringify(result) }] };
    });

    this.server.setRequestHandler(ListPromptsRequestSchema, async () => {
      return {
        prompts: Object.values(PROMPTS).map(prompt => ({
          name: prompt.name,
          description: prompt.description,
          arguments: prompt.arguments
        }))
      };
    });

    this.server.setRequestHandler(GetPromptRequestSchema, async (request) => {
      const promptName = request.params.name;
      const promptMessage = PROMPT_MESSAGES[promptName];
      
      if (!promptMessage) {
        throw new Error(`Prompt not found: ${promptName}`);
      }

      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: promptMessage
            }
          }
        ]
      };
    });
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    process.stderr.write(`[${SERVER_NAME}] Server running on STDIO\n`);
  }
}

const server = new ZomatoMcpServer();
server.run().catch((error) => {
  process.stderr.write(`[${SERVER_NAME}] Fatal error: ${error}\n`);
  process.exit(1);
});