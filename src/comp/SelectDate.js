import {useState} from "react";

const SelectDate = () => {
  
  const options = [
    {value: '2021/2022', text: '2021/2022'},
    {value: '2022/2023', text: '2022/2023'},
  ];

  const [selectedOption, setSelectedOption] = useState(options[1].value);

  const handleChange = (event) => {
    console.log(event.target.value);
   setSelectedOption(event.target.value);
  };



  return (
    <div className="container">
      <h2>Rok</h2>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={selectedOption} onChange={handleChange}>
      <option disabled selected>--Vyberte rok--</option> 
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.text}</option>
          ))}
      </select>
    </div>
  );
};

export default SelectDate;