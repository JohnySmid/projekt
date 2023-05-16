import React from 'react';
import { LogButton } from './Button';

export const TableRow = ({ student }) => {
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.surname}</td>
      <td>{student.email}</td>
      <td><LogButton onClick={() => console.log(`student s ID ${student.id}`)} typeofclick={'Vypis'} /></td>
    </tr>
  );
};