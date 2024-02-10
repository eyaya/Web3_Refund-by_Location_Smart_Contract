import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../constants/address";
import CheckpointCard from "./checkpointCard";
import React, { useEffect } from "react";
import { BigNumber,ethers } from "ethers";

export default function CheckpointList() {
    const {
        contract
    } = useContract(CONTRACT_ADDRESS);

    const {
        data: checkpoints,
        isLoading: isLoadingContacts
    } = useContractRead(
        contract,
        "getsCheckpoints"
    );
    
    return (
        <div>
            {!isLoadingContacts ? (
                checkpoints?.length > 0 ? (
                    checkpoints.map((checkpoint: any, index: number) => (
                        <CheckpointCard
                            key={index}
                            index={index}
                            latitude={ checkpoint.latitude*1}
                            longitude={checkpoint.longitude*1}
                            diameter={checkpoint.diameter*1}
                            timestamp={checkpoint.timestamp*1}
                        />
                    ))
                ) : (
                    <p>No checkpoint found.</p>
                )
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}