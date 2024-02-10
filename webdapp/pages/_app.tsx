import type { AppProps } from "next/app";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK(BaseSepoliaTestnet, {
  clientId: "9c3cbec1384224d02fa21d82caa4d2ec",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
//const sdk = new ThirdwebSDK(BaseSepoliaTestnet, {
//  secretKey: "YOUR_SECRET_KEY",/
//});

const contract = sdk.getContract("0xdAaCC925B1257737925213aA42Ff89101Dd00867");

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//const activeChain = "BaseSepoliaTestnet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={BaseSepoliaTestnet}
      clientId={process.env.CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
