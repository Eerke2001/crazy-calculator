const SliderAll = ({ value, onValueChange, beforeInfo, afterInfo, max, displayBefore }) => {

    //console.log(value);

    return (
        <div className="input-text">
            <div className={`rotate-indicator ${displayBefore}`}>
                {beforeInfo}
            </div>
            <input type="range" min="0" max={max} onChange={(e) => onValueChange(e.target.value)} value={value} />
            <div className="deg-indicator">
                {afterInfo}
            </div>
        </div>
    );
};

export default SliderAll;