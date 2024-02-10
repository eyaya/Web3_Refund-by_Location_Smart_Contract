import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../constants/address";
import CheckpointCard from "./checkpointCard";

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
                            latitude={checkpoint.latitude}
                            longitude={checkpoint.longitude}
                            diameter={checkpoint.diameter}
                            timestamp={checkpoint.timestamp}
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