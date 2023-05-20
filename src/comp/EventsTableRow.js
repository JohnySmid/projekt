import React from 'react';
import { useDispatch } from 'react-redux';
import { EventsSlicer } from '../reducers/EventsSlicer';


const EventsTableRow = ({data}) => {

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