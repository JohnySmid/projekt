import {EventsTableRow} from './EventsTableRow';

export const EventsTable = ({events}) => {
    return (
        <table className="table table-hover table-light">
            <thead>
                <tr>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                {events.map((data) => <EventsTableRow key={data.id} data={data}/>)}
            </tbody>
        </table>
    )
}