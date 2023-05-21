import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';
import { EventsTable } from "./EventsTable";

/**
 * A page component that renders the ProjectsTable and ShowAddProjectFormButton components.
 * 
 * @returns {JSX.Element} The JSX element that represents the ProjectsPage component.
 */

export const EventsGroupCard = () => {
    // Extract the projects state from Redux store using the useSelector hook

    return(
        <div className='container my-2'>
      
            <Card>
                <Card.Title className='p-3 text-start'>Zkouska</Card.Title>
                <Card.Body>
                    <EventsTable />
                </Card.Body>
            </Card>
        </div>
    )
}