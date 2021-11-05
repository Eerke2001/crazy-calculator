import SelectBackgroundItem from "./SelectBackgroundItem.js";

const SelectBackground = ({ newSection, value, array, onValueChange }) => {

    console.log(`${array} this check`);
    console.log(array);
    console.log(newSection[0].scape);

    return (
        <select className="select-menu" value={newSection[0].scape} onChange={(e) => onValueChange(e.target.value)}>
            {
                array.map((element) => (
                    <SelectBackgroundItem element={element} />
                ))
            }
        </select>
    );
};

export default SelectBackground;