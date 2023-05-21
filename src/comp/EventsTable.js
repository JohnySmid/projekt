import {EventsTableRow} from './EventsTableRow';

export const EventsTable = ({dates}) => {
    return (
        <table className="table table-hover table-light">
            <thead>
                <tr>
                    <th scope="cola">#</th>
                </tr>
            </thead>
            <tbody>
          {dates.map((data) => (
            <tr key={data.id}>
              <td>{data.enddate}</td>
              <td>{data.name}</td>
              <td>{data.lastchange}</td>
              <td>
                  {data.presences.map((presence) => (
                    <tr key={presence.id}>
                      <td>{presence.presenceType.name}</td>
                      <td>{presence.invitationType.name}</td>
                      <td>{presence.user.email}</td>
                    </tr>
                ))}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
    )
}

