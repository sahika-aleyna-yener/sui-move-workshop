import { Transaction } from "@mysten/sui/transactions";

interface Nft {
  name: string;
  url: string;
}

export const mintNft = (nft: Nft, packageId: string, mintAddresses: string) => {
  const tx = new Transaction();
  tx.moveCall({
    target: // TODO: Add the target mint function,
    arguments: [
      // TODO: Add the arguments for the mint function
    ],
  });
  return tx;
};
