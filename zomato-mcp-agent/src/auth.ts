import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

const DEFAULT_TOKEN_PATH = join(homedir(), '.zomato-token');

export function getToken(): string {
  const tokenPath = process.env.ZOMATO_TOKEN_PATH || DEFAULT_TOKEN_PATH;

  try {
    const token = readFileSync(tokenPath, 'utf-8').trim();
    if (!token) {
      throw new Error('Token file is empty. Please authenticate via VSCode first and copy your OAuth token to ~/.zomato-token');
    }
    return token;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(
        `Token file not found at ${tokenPath}.\n\n` +
        `Please authenticate via VSCode first:\n` +
        `1. Open VSCode with Zomato MCP extension\n` +
        `2. Complete OAuth flow in VSCode\n` +
        `3. Copy the Bearer token to ~/.zomato-token\n`
      );
    }
    throw error;
  }
}