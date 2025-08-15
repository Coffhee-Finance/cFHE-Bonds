export const dynamic = "force-dynamic";
export const revalidate = 0;
import React, { Suspense } from "react";
import { NFTGridLoading } from "@/components/NFT/NFTGrid";
import ListingGrid from "@/components/ListingGrid/ListingGrid";
import { MARKETPLACE, NFT_COLLECTION } from "@/const/contracts";

import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains"; // or the chain your contract is on

const client = createThirdwebClient({
  clientId: "7889951627d25c9dde1c8ea5b1a7bac6", // Replace with your actual client ID
});

export default function Buy() {
	return (
		<div className="">
			<h1 className="text-4xl">Buy Bonds</h1>

			<div className="my-8">
				<Suspense fallback={<NFTGridLoading />}>
					<ListingGrid
						marketplace={MARKETPLACE}
						collection={NFT_COLLECTION}
						emptyText={
							"Looks like there are no listed NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
						}
					/>
				</Suspense>
			</div>
		</div>
	);
}
