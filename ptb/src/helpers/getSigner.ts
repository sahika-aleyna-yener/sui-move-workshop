import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { fromBase64 } from "@mysten/sui/utils";

export const getSigner = ({ secretKey }: { secretKey: string }) => {
  // Handle both Bech32 format (suiprivkey...) and base64 format
  if (secretKey.startsWith("suiprivkey")) {
    // Use decodeSuiPrivateKey for Bech32 format
    return Ed25519Keypair.fromSecretKey(secretKey);
  } else {
    // Handle base64 format (legacy)
    let privKeyArray = Uint8Array.from(Array.from(fromBase64(secretKey)));
    return Ed25519Keypair.fromSecretKey(Uint8Array.from(privKeyArray).slice(1));
  }
};
