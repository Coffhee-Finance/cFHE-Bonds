import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { CdpClient } from '@coinbase/cdp-sdk';
import dotenv from 'dotenv';

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className="">
      <div className="flex justify-center p-2">
        <Image
          src="/hero-asset.png"
          width={860}
          height={540}
          alt="Hero asset, NFT marketplace"
          quality={100}
          className="max-w-screen mb-4"
        />
      </div>
      <div className="px-8 mx-auto text-center">
        <h1 className="mb-5 text-white font-bold text-6xl">
          <span className="text-transparent bg-clip-text gradient">
						cFHE Tokens
          </span>
          <br />
					Decentralized Bonds
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          <Link
            className="hover:underline"
            href="https://thirdweb.com"
            target="_blank"
          >
						Encryption
          </Link>{" "}
					powered marketplace for buying debt instruments on <b>Ethereum.</b>{" "}
          <i> Options and Limit Orders (coming soon)</i>.
        </p>

        
      </div>
    </div>
  );
};

export default Home;
