import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogButton } from './Button';
import { EventsSlicer } from '../reducers/EventsSlicer';

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

/*
const TableRow = ({data}) => {

  //const [ editState, setEditState ] = useState(false)
  const dispatch = useDispatch()

  const onUpdateProjectClick = () => {
      const updatedProject = {
          id: data.id
      }

      dispatch(EventsSlicer(updatedProject))
  }

      return (
          // A table row element that displays the project data and sets the text color based on the submission date.
          <tr>
              <td>{data.id}</td>
              <td><button className="btn btn-sm btn-success mx-1" onClick={() => {onUpdateProjectClick()}}> Update </button></td>
          </tr>
      )
}

*/