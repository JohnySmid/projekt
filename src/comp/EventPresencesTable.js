import { UserPresenceModal } from '../comp/UserPresenceModal';

export const EventPresencesTable = ({ data }) => {

    return (
        <>
        <table className="table table-hover table-light">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Invatation</th>
                    <th>Presence</th>
                    <th>Info</th>
                </tr>
            </thead>
            <tbody>
                {data.map((presence) => ( <EventPresenceRow key={presence.id} presence={presence}/>))}
            </tbody>
        </table>
        </>
      );
};

const EventPresenceRow = ({presence}) => { 
    return (
            <tr>
                <td>*</td>
                <td>{presence.user.email}</td>
                <td>{presence.invitationType.name}</td>
                <td>{presence.presenceType.name}</td>
                <td><UserPresenceModal /></td>
            </tr>
        );
}