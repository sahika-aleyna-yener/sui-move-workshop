# Sui PTB (Programmable Transaction Block) Project

This is a TypeScript project for working with Sui's Programmable Transaction Blocks (PTBs).

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   npm run setup
   ```
   This will create a `.env` file with default values. Edit the `.env` file and replace `your_secret_key_here` with your actual Sui wallet secret key (base64 encoded).

## Running the Project

### Option 1: Run without environment variables (default)

```bash
npm run dev
```

This will run the project with default values and won't require a `.env` file.

### Option 2: Run with environment variables

```bash
npm run dev:env
```

This requires a properly configured `.env` file with your actual `SECRET_KEY`.

## Project Structure

- `src/index.ts` - Main entry point
- `src/helpers/` - Helper functions for Sui operations
  - `getAddress.ts` - Get wallet address from secret key
  - `getSigner.ts` - Create Sui signer from secret key
- `src/tests/` - Test files

## Environment Variables

The following environment variables can be configured in the `.env` file:

- `SUI_NETWORK` - Sui network to use (default: testnet)
- `SECRET_KEY` - Your Sui wallet secret key (base64 encoded)
- `SUI_RPC_URL` - Optional custom RPC URL

## Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Getting Your Secret Key

To get your Sui wallet secret key:

1. Use Sui CLI: `sui client export-address`
2. Or from Sui Wallet: Export private key (base64 format)
3. Add it to your `.env` file as `SECRET_KEY=your_actual_secret_key`

## Example Output

When running successfully, you should see:

```
Hello, world!
This is the Sui network: testnet
Wallet address: 0x...
```

## Troubleshooting

- **"Invalid character" error**: Make sure your `SECRET_KEY` is properly base64 encoded
- **"No SECRET_KEY provided"**: Either add your secret key to `.env` or run without environment variables
- **Module not found errors**: Run `npm install` to install dependencies
