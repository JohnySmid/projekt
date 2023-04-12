
import SelectDate from "./SelectDate";
import SelectTerm from "./SelectTerm";
import SelectSubject from "./SelectSubject";


const AllSelect = () => {
  
    return (
        <div>
            <SelectDate date1="2021/2022" date2="2022/2023"/>
            <SelectTerm term1="zima" term2="léto"/>
            <SelectSubject predmet="subject"/>
        </div>
    )
};

export default AllSelect;
