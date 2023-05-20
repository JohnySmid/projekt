import { useState } from 'react';
import {TableRow} from './TableRow';

export const EventsTable = ({events}) => {
    return (
        <table className="table table-hover table-light">
            <thead>
                <tr>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                {events.map((data) => <TableRow key={data.id} project={data}/>)}
            </tbody>
        </table>
    )
}