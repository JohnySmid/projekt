 import { UserPresenceModal } from './UserPresenceModal';


/**
 * A component that displays a table of presences for an event.
 * @param {Array} data - The data containing presences information.
 * @returns {JSX.Element} - The rendered table component.
 */

// Komponenta pro zobrazení tabulky přítomností na události
export const EventPresencesTable = ({ data }) => {
    return (
        <>
        {/* Tabulka */}
        <table className="table table-hover table-light table-bordered">
            {/* Hlavička tabulky */}
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Invitation</th>
                    <th>Presence</th>
                    <th>Info</th>
                </tr>
            </thead>
            {/* Tělo tabulky */}
            <tbody>
                {/* Pro každou přítomnost v 'data' se vytvoří 'EventPresenceRow' */}
                {data.map((presence) => (
                    <EventPresenceRow key={presence.id} presence={presence} />
                ))}
            </tbody>
        </table>
        </>
    );
};

/**
 * A component that represents a row in the event presences table.
 * @param {Object} presence - The presence object containing user information.
 * @returns {JSX.Element} - The rendered table row component.
 */

// Komponenta pro řádek v tabulce přítomností na události
const EventPresenceRow = ({ presence }) => { 
    return (
        <tr>
            {/* Zobrazení informací o uživateli v jednotlivých sloupcích */}
            <td>{presence.user.name}</td>
            <td>{presence.user.surname}</td>
            <td>{presence.user.email}</td>
            {/* Zobrazení typu pozvání */}
            <td>{presence.invitationType.name}</td>
            {/* Zobrazení typu přítomnosti */}
            <td>{presence.presenceType.name}</td>
            {/* Zobrazení modálního okna s informacemi o přítomnosti uživatele */}
            <td>
                <UserPresenceModal data={presence} />
            </td>
        </tr>
    );
};