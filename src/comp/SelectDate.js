import {useState} from "react";

const SelectDate = () => {
  
  const options = [
    {value: '', text: '--Vyber rok--'},
    {value: '2021/2022', text: '2021/2022'},
    {value: '2022/2023', text: '2022/223'},
];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event) => {
    console.log(event.target.value);
   setSelectedOption(event.target.value);
  };


  return (
    <div>
      <h3>Rok</h3>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={selectedOption} onChange={handleChange}> 
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.text}</option>
          ))}
      </select>
    </div>
  );
};

export default SelectDate;