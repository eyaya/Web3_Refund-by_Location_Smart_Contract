import type { AppProps } from "next/app";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//const activeChain = "BaseSepoliaTestnet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={BaseSepoliaTestnet}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
