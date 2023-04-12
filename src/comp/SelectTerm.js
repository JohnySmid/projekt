
import {useState} from "react";

const SelectTerm = () => {
    const options = [
        {value: 'zima', text: 'zima'},
        {value: 'leto', text: 'leto'},
    ];
    
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleChange = (event) => {
        console.log(event.target.value);
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleChange}> 
                    <option disabled selected>Období</option> 
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                    ))}
            </select>
        </div>
    );
};

export default SelectTerm;