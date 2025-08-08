import { SuiTransactionBlockResponse } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { suiClient } from "../suiClient";
import { getSigner } from "./getSigner";
import { ENV } from "../env";
import { getAddress } from "./getAddress";

export const mintNft = async (): Promise<SuiTransactionBlockResponse> => {
  if (!ENV.USER_SECRET_KEY) {
    throw new Error("USER_SECRET_KEY is required");
  }

  const tx = new Transaction();


  
  tx.moveCall({
    target: // TODO: Add the target mint function,
    arguments: [
      // TODO: Add the arguments for the mint function
    ],
  });

  return suiClient.signAndExecuteTransaction({
    transaction: tx,
    signer: getSigner({ secretKey: ENV.USER_SECRET_KEY }),
    options: {
      showEffects: true,
      showObjectChanges: true,
    },
  });
};
