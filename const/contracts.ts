/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains"; // or the chain your contract is on

const client = createThirdwebClient({
  clientId: "7889951627d25c9dde1c8ea5b1a7bac6", // Replace with your actual client ID
});

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
const MARKETPLACE_ADDRESS = "0x9F4524f7Ea61f368BB731033dC47f78aC6c22dEc";
export const MARKETPLACE = getContract({
	address: MARKETPLACE_ADDRESS,
	client,
	chain: sepolia,
});

// 3. The address of your NFT collection smart contract.
const NFT_COLLECTION_ADDRESS = "0xe49E00070f4d75b211518Fb0CDe09b32226587A3";
export const NFT_COLLECTION = getContract({
	address: NFT_COLLECTION_ADDRESS,
	client,
	chain: sepolia,
});

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://sepolia.etherscan.io";
