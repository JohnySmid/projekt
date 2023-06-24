import React from "react";
import { Button } from "react-bootstrap";
import { PresenceMutationLoader } from '../actions/PresenceUpdateLoader';
import { useDispatch } from 'react-redux';


export const PresenceButton = ({btnname, presenceId, lastchange, presenceTypeId, invitationTypeId}) => {
        const dispatch = useDispatch();

        // button colors :)
        let buttonClassName = "btn btn-secondary";
        if (btnname === "Přítomen") {
            buttonClassName = "btn btn-success";
        } else if (btnname === "Neomluven") {
            buttonClassName = "btn btn-danger";
        } else if (btnname === "Dovolená") {
            buttonClassName = "btn btn-warning";
        }

            return (
                <Button className={buttonClassName} onClick=
                {() => {
                            dispatch(PresenceMutationLoader(presenceId, lastchange, presenceTypeId, invitationTypeId));
                        }
                }>{btnname}</Button>
            );
};
