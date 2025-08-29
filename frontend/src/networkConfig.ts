import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        packageId: "0x0",
        mintAddresses: "0x0",
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        packageId: "0x7c768e4ab2c76e00b85318febdc01730dd99792715a26601918eee5fcedf6383",
        mintAddresses: "0xf0182ba3542a979c600ab1a868ad9cd1dbc6a462377f4c502a39de8cbe389b5c"
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        packageId: "0x0",
        mintAddresses: "0x0",
      },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
