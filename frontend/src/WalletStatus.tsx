import { useCurrentAccount } from "@mysten/dapp-kit";
import { Container, Flex, Heading, Text } from "@radix-ui/themes";
// import { OwnedObjects } from "./OwnedObjects";
import DisplayNft from "./DisplayNft";
import MintNft from "./MintNft";
import { useState } from "react";

export function WalletStatus() {
  const account = useCurrentAccount();
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <Container my="2">
      <Heading mb="2">Wallet Status</Heading>

      {account ? (
        <Flex direction="column">
          <Text>Wallet connected</Text>
          <Text>Address: {account.address}</Text>
        </Flex>
      ) : (
        <Text>Wallet not connected</Text>
      )}
      <MintNft refreshKey={refreshKey} setRefreshKey={setRefreshKey} />
      <DisplayNft refreshKey={refreshKey} />
    </Container>
  );
}
