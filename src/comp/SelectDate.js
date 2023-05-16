import {useState} from "react";
import {GroupCard} from "./GroupCard";

// define a functional component named SelectDate
export const SelectDate = () => {
  // an array of options to be displayed in the select input
  const options = [ 
    {value: '2021/2022', text: '2021/2022'},
    {value: '2022/2023', text: '2022/2023'},
  ];

  // initialize a state variable selectedOption with the second option from the options array
  const [selectedOption, setSelectedOption] = useState(options[1].value);
  const [selectedGroup, setSelectedGroup] = useState('')

  // handleChange function to update the selectedOption state variable whenever the select input value changes
  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //  setSelectedOption(event.target.value); // update the selectedOption state variable with the value of the selected option
  // };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <h2>Rok</h2>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={selectedOption} onChange={handleGroupChange}>
      <option disabled selected>--Vyberte rok--</option> {/* default option displayed when the select input is first rendered */}
        {/* iterate over the options array and create an option element for each option */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.text}</option>
          ))}
      </select>
      {selectedGroup && (
        <GroupCard
          title={selectedGroup}
          description={`Description for ${selectedGroup}`}
        />
      )}
    </div>
  );
};
