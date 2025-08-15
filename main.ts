import { CdpClient } from "@coinbase/cdp-sdk";
import dotenv from "dotenv";
import { createWalletClient, http, createPublicClient, parseEther } from "viem";
import { toAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

dotenv.config();
const cdp = new CdpClient();

const account = await cdp.evm.createAccount();
console.log("Created account:", account.address);

const walletClient = createWalletClient({
  account: toAccount(account),
  chain: baseSepolia,
  transport: http(),
});

// This is used to wait for transaction confirmation
const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

console.log("Requesting testnet ETH from faucet...");
const { transactionHash: faucetTransactionHash } = await cdp.evm.requestFaucet({
  address: account.address,
  network: "base-sepolia",
  token: "eth",
});

console.log("Waiting for funds to arrive...");
const faucetTxReceipt = await publicClient.waitForTransactionReceipt({
  hash: faucetTransactionHash,
});
console.log("Received testnet ETH");

const hash = await walletClient.sendTransaction({
  to: "0x0000000000000000000000000000000000000000",
  value: parseEther("0.000001"),
});

const txReceipt = await publicClient.waitForTransactionReceipt({
  hash,
});
console.log(
  `Transaction sent! Link: https://sepolia.basescan.org/tx/${hash}`
);