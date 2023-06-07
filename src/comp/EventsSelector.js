import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {changeEvent} from "../reducers/EventSlice"

export const EventsSelector = () => {
    const data = useSelector((state) => state.events)
    const dispatch = useDispatch()

    if (data)
    {
        return (
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue={"--Select Event--"} onChange={(e) => {dispatch(changeEvent(e.target.value))}}>
            <option disabled>--Select Event--</option>
                {data.map((e) => (
                        <option key={e.id} value={e.id}>{e.name}</option>
                ))};
            </select>
        );
    }
};
