import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';


export const InviteGroupButton = ({eventId, groupId}) => {
        return (
            <>
                <br />
                <Button className="btn btn-secondary" onClick=
                {() => {
                            console.log("eventID: ", eventId, "groupId: ", groupId);
                        }
                }>Pozvat</Button>
            </>
        );
};
