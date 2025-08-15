// Erc3475Token.js
import { CdpClient } from '@coinbase/cdp-sdk';
import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

const cdp = new CdpClient({
  apiKeyId: process.env.CDP_API_KEY_ID,
  apiKeySecret: process.env.CDP_API_KEY_SECRET,
  walletSecret: process.env.CDP_WALLET_SECRET,
});

const ERC3475_ABI = [
  // Replace with the actual ERC-3475 ABI
  "function balanceOf(address owner, uint256 classId, uint256 nonceId) view returns (uint256)",
  "function transfer(address to, uint256 classId, uint256 nonceId, uint256 amount) returns (bool)",
];

const Erc3475Token = async () => {
  try {
    // Step 1: Create or retrieve a wallet
    const wallet = await cdp.evm.getOrCreateAccount({ name: 'MyERC3475Wallet' });
    console.log('Wallet Address:', wallet.address);

    // Step 2: Connect to the ERC-3475 token contract
    const provider = new ethers.providers.JsonRpcProvider('https://rpc-url'); // Replace with your network RPC URL
    const signer = new ethers.Wallet(wallet.privateKey, provider); // Use the wallet's private key
    const tokenContract = new ethers.Contract('0xYourTokenContractAddress', ERC3475_ABI, signer);

    // Step 3: Check token balance
    const classId = 1; // Replace with the actual class ID
    const nonceId = 1; // Replace with the actual nonce ID
    const balance = await tokenContract.balanceOf(wallet.address, classId, nonceId);
    console.log(`Token Balance for Class ${classId}, Nonce ${nonceId}:`, balance.toString());

    // Step 4: Transfer tokens (optional)
    const recipient = '0xRecipientAddress'; // Replace with the recipient's address
    const amount = 10; // Replace with the amount to transfer
    const transferTx = await tokenContract.transfer(recipient, classId, nonceId, amount);
    console.log('Transfer Transaction:', transferTx.hash);
  } catch (error) {
    console.error('Error adding ERC-3475 token:', error);
  }
};

Erc3475Token();