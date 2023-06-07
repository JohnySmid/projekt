

export const EventPresencesTable = ({ data }) => {
    console.log("aaaa", data)
    // musim si to namapovat, abych mohl k datum a nwm jak k nim
    
    return (
        <>
        <table className="table table-hover table-light">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Invatation</th>
                    <th>Presence</th>
                </tr>
            </thead>
            <tbody>
                {/* Render a ProjectRow component for each project object in the projects array */}
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
            </tr>
        );
}