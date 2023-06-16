import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {changeEvent} from "../reducers/EventSlice"

export const EventsSelector = () => {
    const data = useSelector((state) => state.events)
    const dispatch = useDispatch()

    const [selectedOption, setSelectedOption] = useState('choose event')
    const handleOptionChange = (e) => {
        setSelectedOption(e);
      }

    if (data)
    {
        return (
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" 
            value={selectedOption} onChange={(e) => 
                {dispatch(changeEvent(e.target.value));
                    handleOptionChange(e.target.value);
                }
            }>
                <option>Choose event</option>
                {data.map((e) => (
                        <option key={e.id} value={e.id}>{e.name}</option>
                ))};
            </select>
        );
    }
};
