import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PresenceInsertLoader } from "../actions/PresenceInsertLoader";

export const InviteUserButton = ({ eventId, userId }) => {
    const dispatch = useDispatch();

    return (
        <>
        <Button
            className="btn btn-secondary"
            onClick={() => {
            console.log("eventID: ", eventId, "userId: ", userId);
            dispatch(
                // Dispečer Redux akce s voláním PresenceInsertLoader
                PresenceInsertLoader({event_id: eventId, user_id: userId,
                presencetype_id: "46639812-a79c-11ed-b76e-0242ac110002",
                invitation_id: "e8713fce-a79c-11ed-b76e-0242ac110002",
                })
            );
            }}
        >
            Pozvat
        </Button>
        </>
    );
};