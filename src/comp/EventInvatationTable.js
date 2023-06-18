import { InviteUserButton } from "./InviteUserButton";
import { useSelector } from "react-redux";

// Komponenta pro zobrazení tabulky pozvánek na událost
export const EventInvitationTable = ({ data }) => {
    // Získání hodnoty 'eventId' ze stavu Redux pomocí hooku 'useSelector'
    const eventId = useSelector((state) => state.event);
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
                    <th>Invite</th>
                </tr>
            </thead>
            {/* Tělo tabulky */}
            <tbody>
                {/* Pro každou přítomnost v 'data' se vytvoří 'EventInvitationRow' */}
                {data.map((presence) => (
                    <EventInvitationRow key={presence.id} presence={presence} eventId={eventId} />
                ))}
            </tbody>
        </table>
        </>
    );
};

// Komponenta pro řádek v tabulce pozvánek na událost
const EventInvitationRow = ({ presence, eventId }) => { 
    return (
        <tr>
            {/* Zobrazení informací o uživateli v jednotlivých sloupcích */}
            <td>{presence.user.name}</td>
            <td>{presence.user.surname}</td>
            <td>{presence.user.email}</td>
            {/* Zobrazení tlačítka pro pozvání uživatele */}
            <td>
                <InviteUserButton eventId={eventId} userId={presence.user.id} />
            </td>
        </tr>
    );
};
