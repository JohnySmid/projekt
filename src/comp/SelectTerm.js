
const SelectTerm = (props) => {
    const zima = props.term1;
    const leto = props.term2;
    //const {zima, leto} = props;
    return (
        <div>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option disabled selected>Obdobi</option>
                <option value="1">{zima}</option>
                <option value="2">{leto}</option>
            </select>
        </div>
    );
};

export default SelectTerm;