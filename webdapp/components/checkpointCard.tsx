import { Web3Button } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';
import { CONTRACT_ADDRESS } from '../constants/address';

type Props = {
    index: number;
    latitude: number;
    longitude: number;
    diameter: number;
    timestamp: number;
};

export default function CheckpointCard({ index, latitude, longitude, diameter, timestamp }: Props) {
    return (
        <div className={styles.contactCardContainer}>
            <div className={styles.contactCardInfo}>
                <h2>{latitude}</h2>
                <p>{longitude}</p>
                <p>{diameter}</p>
                <p>{timestamp}</p>
            </div>
            <Web3Button
                className={styles.removeContactButton}
                contractAddress={CONTRACT_ADDRESS}
                action={(contract) => contract.call(
                    "removeCheckpoint",
                    [
                        index
                    ]
                )}
            >x</Web3Button>
        </div>
    )
}