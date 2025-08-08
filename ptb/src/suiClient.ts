import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { ENV } from "./env";

export const suiClient = new SuiClient({
  url: getFullnodeUrl(ENV.SUI_NETWORK as "testnet" | "devnet" | "mainnet"),
});
