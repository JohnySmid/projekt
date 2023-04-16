
import SelectDate from "./SelectDate";
import SelectTerm from "./SelectTerm";
import SelectSubject from "./SelectSubject";



const AllSelect = () => {

    // render the SelectDate, SelectTerm, and SelectSubject components within a div container
    return (
        <div>
            <SelectDate/>
            <SelectTerm/>
            <SelectSubject/>
        </div>
    )
};

export default AllSelect;
