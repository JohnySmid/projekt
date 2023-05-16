import {useState} from "react";

export const SelectDate = () => {
  
  const options = [ 
    {value: '2021/2022', text: '2021/2022'},
    {value: '2022/2023', text: '2022/2023'},
  ];

  // initialize a state variable selectedOption with the first option from the options array
  const [selectedOption, setSelectedOption] = useState(options[1].value);

  // handleChange function to update the selectedOption state variable whenever the select input value changes
  const handleChange = (event) => {
    console.log(event.target.value);
   setSelectedOption(event.target.value); // update the selectedOption state variable with the value of the selected option
  };



  return (
    <div className="container">
      <h2>Rok</h2>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={selectedOption} onChange={handleChange}>
      <option disabled selected>--Vyberte rok--</option> {/* default option displayed when the select input is first rendered */}
        {/* iterate over the options array and create an option element for each option */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.text}</option>
          ))}
      </select>
    </div>
  );
};