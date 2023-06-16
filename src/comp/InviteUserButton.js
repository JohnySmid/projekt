import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';


export const InviteUserButton = ({eventId, userId}) => {
        return (
            <>
                <Button className="btn btn-secondary" onClick=
                {() => {
                            console.log("eventID: ", eventId, "userId: ", userId);
                        }
                }>Pozvat</Button>
            </>
        );
};
