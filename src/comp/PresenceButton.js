import React from "react";
import { Button } from "react-bootstrap";
import { PresenceMutationLoader } from '../actions/PresenceUpdateLoader';
import { useDispatch } from 'react-redux';

/**
 * A component that displays a presence button.
 * @param {Object} props - The component props.
 * @param {string} props.btnname - The name of the button.
 * @param {string} props.presenceId - The presence ID.
 * @param {string} props.lastchange - The last change timestamp.
 * @param {string} props.presenceTypeId - The presence type ID.
 * @param {string} props.invitationTypeId - The invitation type ID.
 * @returns {JSX.Element} - The rendered button component.
 */

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
