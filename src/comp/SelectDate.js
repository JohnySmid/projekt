
const SelectDate = (props) => {
    const date1 = props.date1;
    const date2 = props.date2;
    return (
    <div>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option disabled selected>Rok</option>
        <option value="1">{date1}</option>
        <option value="2">{date2}</option>
      </select>
    </div>
    );
};

export default SelectDate;