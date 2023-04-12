const SelectSubject = (props) => {
    const sub = props.predmet;
    return (
        <div>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option disabled selected>Předmět</option>
                <option value="1">{sub}</option>
            </select>
        </div>
    );
};

export default SelectSubject;