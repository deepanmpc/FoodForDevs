import fetch from 'node-fetch';
import { getToken } from './auth.js';

const ZOMATO_MCP_URL = 'https://mcp-server.zomato.com/mcp';

interface JsonRpcRequest {
  jsonrpc: '2.0';
  id: number;
  method: string;
  params?: object;
}

interface JsonRpcResponse {
  jsonrpc: '2.0';
  id: number;
  result?: unknown;
  error?: {
    code: number;
    message: string;
    data?: unknown;
  };
}

function logError(message: string): void {
  process.stderr.write(`[zomato-client] ${message}\n`);
}

function logInfo(message: string): void {
  process.stderr.write(`[zomato-client] ${message}\n`);
}

let requestId = 1;

async function makeJsonRpcCall(method: string, params?: object): Promise<unknown> {
  const token = getToken();
  
  const request: JsonRpcRequest = {
    jsonrpc: '2.0',
    id: requestId++,
    method,
    params
  };

  logInfo(`Calling ${method}...`);

  try {
    const response = await fetch(ZOMATO_MCP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(request)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = (await response.json()) as JsonRpcResponse;

    if (data.error) {
      throw new Error(`JSON-RPC Error ${data.error.code}: ${data.error.message}`);
    }

    logInfo(`Successfully called ${method}`);
    return data.result;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    logError(`Failed to call ${method}: ${message}`);
    throw error;
  }
}

export async function listZomatoTools(): Promise<unknown> {
  return makeJsonRpcCall('tools/list');
}

export async function callZomatoTool(toolName: string, args: Record<string, unknown>): Promise<unknown> {
  return makeJsonRpcCall('tools/call', { name: toolName, arguments: args });
}