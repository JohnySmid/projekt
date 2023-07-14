import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PresenceInsertLoader } from "../actions/PresenceInsertLoader";

/**
 * A component that displays a button to invite a user to an event.
 * @function
 * @param {Object} props - The component props.
 * @param {string} props.eventId - The ID of the event.
 * @param {string} props.userId - The ID of the user.
 * @returns {JSX.Element} - The rendered button component.
 */


// uvest hpdnoty jako param
export const InviteUserButton = ({ eventId, userId }) => {
    const dispatch = useDispatch();

    return (
        <>
        <Button
            className="btn btn-secondary"
            onClick={() => {
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