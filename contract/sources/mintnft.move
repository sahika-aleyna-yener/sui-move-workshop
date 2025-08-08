/// Module: mintnft
module mintnft::mintnft;


// === Imports ===

use std::string::String;
use sui::{display, package};
use sui::event;



// === Structs ===

/// Owned Object - NFT cane be accessed and modified by the owner
public struct Nft has key, store {
   // TODO: Add the fields for the NFT
   // 1. The id of the NFT
   // 2. The name of the NFT
   // 3. The description of the NFT
   // 4. The url of the NFT
}

// Shared Object - Addresses that minted NFTs will be stored and everyone can access and modify it
public struct MintAddresses has key, store {
   // TODO: Add the fields for the MintAddresses
   // 1. The id of the MintAddresses object
   // 2. The addresses of the addresses that minted NFTs
}

// Immutable Object - No one can modify this object
public struct NftMetadata has key, store {
   // TODO: Add the fields for the NftMetadata
   // 1. The id of the NftMetadata object
   // 2. The time stamp of the NftMetadata object
}


// ===OTW===
// TODO: Add the OTW for the package

// === Events ===
public struct MintNftEvent has drop,copy {
   // TODO: Add the fields for the MintNftEvent
   // 1. The id of the NFT
   // 2. The name of the NFT
}


// ===Initializers===
fun init(otw:MINTNFT, ctx: &mut TxContext){
  // TODO: Create a MintAddresses object

  // TODO: Claim package publisher rights

  // TODO: Set up NFT display object with metadata fields

  // TODO: Transfer display and publisher to sender, share MintAddresses
}


// === Public Functions ===

public entry fun mint(mintAddresses:&mut MintAddresses, name:String, url:String, ctx: &mut TxContext){
  // TODO: Create a new NFT object with name, description and url

  // TODO: Emit mint event with NFT id and name

  // TODO: Transfer NFT to minter

  // TODO: Add minter address to tracking list

  // TODO: Create immutable metadata object with timestamp
}
//Update Nft Name ------> This will not throw an error as it is a mutable object but only the owner can update it
public entry fun update_nft(nft: &mut Nft, name:String){
  // TODO: Update the NFT name with the new name
}

// Update the nft metadata ------> This will not updated as it is a freezed object
public entry fun update_nft_metadata(nftMetadata: &mut NftMetadata, ctx: &mut TxContext){
  // TODO: Update the metadata timestamp (Note: This will fail since object is frozen)
}


