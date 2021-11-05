import PropTypes from "prop-types";

const SelectBackgroundItem = ({ element }) => {
    return (
        <option value={element.scape}>{element.scape}</option>
    );
};

export default SelectBackgroundItem;