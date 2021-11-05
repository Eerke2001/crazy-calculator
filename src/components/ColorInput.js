const ColorInput = ({ value, onValueChange, beforeInfo, afterInfo, max, displayBefore }) => {

    //console.log(value);

    return (
        <div className="input-text" style={{ marginTop: `1rem` }}>
            <div className={`rotate-indicator ${displayBefore}`}>
                {beforeInfo}
            </div>
            {/* <input type="range" min="1" max={max} onChange={(e) => onValueChange(e.target.value)} value={value} /> */}
            <input className="color-input" type="color" id="favcolor" name="favcolor" onChange={(e) => onValueChange(e.target.value)} value={value} />
            <div className="deg-indicator">
                {afterInfo}
            </div>
        </div>
    );
};

export default ColorInput;