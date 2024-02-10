import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../constants/address";

export default function AddCheckpoint() {

    const [addCheckpoint, setAddCheckpoint] = useState(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [diameter, setDiameter] = useState("");
    const [timestamp, setTimestamp] = useState("");
    

    function resetForm() {
        setLatitude("");
        setLongitude("");
        setDiameter("");
        setTimestamp("");
    }

    return (
        <div>
            {!addCheckpoint ? (
                <button
                    className={styles.addContactTriggerButton}
                    onClick={() => setAddCheckpoint(true)}
                >Add Checkpoint</button>
            ) : (
                <div className={styles.addContactContainer}>
                    <div className={styles.addContactCard}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setAddCheckpoint(false)}
                        >Close</button>
                        <div className={styles.addContactForm}>
                            <h3>Add Contact:</h3>
                            <input 
                                type="text" 
                                placeholder="Latitude"
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Longitude"
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Diameter"
                                value={diameter}
                                onChange={(e) => setDiameter(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Timestamp"
                                value={timestamp}
                                onChange={(e) => setTimestamp(e.target.value)}
                            />
                        </div>
                        <Web3Button
                            contractAddress={CONTRACT_ADDRESS}
                            action={(contract) => contract.call(
                                "addCheckpoint",
                                [
                                    latitude,
                                    longitude,
                                    diameter,
                                    timestamp
                                ]
                            )}
                            onSuccess={() => {
                                resetForm();
                                setAddCheckpoint(false);
                                {console.log()}
                            }}
                        >Add Checkpoint</Web3Button>
                    </div>
                </div>
            )}
        </div>
    )
}