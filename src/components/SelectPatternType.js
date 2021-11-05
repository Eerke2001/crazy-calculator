const SelectPatternType = ({ value, onValueChange }) => {

    console.log(value);

    return (
        <select className="select-menu" value={value} onChange={(e) => onValueChange(e.target.value)}>
            <option value="1">Static 1</option>
            <option value="2">Static 2</option>
            <option value="3">Moving 1</option>
            <option value="4">Moving 2</option>
        </select>
    );
};

export default SelectPatternType;