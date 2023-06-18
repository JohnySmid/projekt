// import {useState} from "react";

// export const SelectSubject = () => {
    
//     const options = [ 
//         {value: 'Matematika', text: 'Matematika'},
//         {value: 'Informatika', text: 'Informatika'},
//     ];

//     // initialize a state variable selectedOption with the first option from the options array
//       const [selectedOption, setSelectedOption] = useState(options[0].value);

//       // handleChange function to update the selectedOption state variable whenever the select input value changes
//       const handleChange = (event) => {
//         console.log(event.target.value);
//        setSelectedOption(event.target.value); // update the selectedOption state variable with the value of the selected option
//       };
    
    
//       return (
//         <div className="container">
//           <h2>Předmět</h2>
//           <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"onChange={handleChange}> 
//             <option disabled selected>Předmět</option> {/* default option displayed when the select input is first rendered */}
//             {/* iterate over the options array and create an option element for each option */}
//             {options.map((option) => (
//               <option key={option.value} value={option.value}>{option.text}</option>
//               ))}
//           </select>
//         </div>
//       );
// };