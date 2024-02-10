import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import AddCheckpoint from "../components/addCheckpoint";
import CheckpointList from "../components/checkpointList";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

//import "../styles/globals.css";
// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK(BaseSepoliaTestnet, {
  clientId:"9c3cbec1384224d02fa21d82caa4d2ec",
});


const contract = sdk.getContract("0xc84409666CEE694Be2c61020B9A1562d7Cb4709e");


const Home: NextPage = () => {
  const address = useAddress();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GeoLoxis Logistics and Delivery System.
              </a>
            </span>
          </h3>
        </div>
      <div className={styles.addressContainer}>
        <div className={styles.addressHeader}>
          <h1>Checkpoints</h1>
          <ConnectWallet />
        </div>
        {address && (
          <div className={styles.addressListContainer}>
            <div className={styles.addressListHeader}>
              <h3>Checkpoints:</h3>
              <AddCheckpoint />
            </div>
            <CheckpointList />
          </div>
        )}
      </div>
      </div>
    </main>
  );
};

export default Home;
