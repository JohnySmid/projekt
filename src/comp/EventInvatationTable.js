import { InviteUserButton } from "./InviteUserButton";
import { useSelector } from "react-redux";


export const EventInvitationTable = ({ data }) => {
    const eventId = useSelector((state) => state.event);
    return (
        <>
        <table className="table table-hover table-light table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Invate</th>
                </tr>
            </thead>
            <tbody>
                {data.map((presence) => ( <EventInvitationRow key={presence.id} presence={presence} eventId={eventId}/>))}
            </tbody>
        </table>
        </>
      );
};

const EventInvitationRow = ({presence, eventId}) => { 
    return (
            <tr>
                <td>{presence.user.name}</td>
                <td>{presence.user.surname}</td>
                <td>{presence.user.email}</td>
                <td><InviteUserButton eventId={eventId} userId={presence.user.id} /></td>
            </tr>
        );
}