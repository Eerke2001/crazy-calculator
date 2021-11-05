import { useState } from "react";

import fig1 from "./fig1.module.css";
import fig2 from "./fig2.module.css";
import fig3 from "./fig3.module.css";
import fig4 from "./fig4.module.css";
import fig5 from "./fig5.module.css";
import fig6 from "./fig6.module.css";
import fig7 from "./fig7.module.css";
import fig8 from "./fig8.module.css";

const Figure = ({ number, newColor, newColorTwo, margin, margina, angleOne, angleTwo }) => {

    return (
        <>
            {
                number === 1 &&
                <>
                    <div className="fig-margin" style={{ margin: `${margin}px`, transform: `rotate(${angleOne}deg)` }}>
                        <div className={fig1.one} style={{ backgroundColor: `${newColor}`, margin: `${margina}px` }} ></div>
                        <div className={fig1.two} style={{ backgroundColor: `${newColor}` }} ></div>
                    </div>
                </>
            }
            {
                number === 2 &&
                <>
                    <div className="flex-div fig-margin" style={{ transform: `rotate(${angleTwo}deg)` }}>
                        <div className={fig2.one} style={{ backgroundColor: `${newColorTwo}`, margin: `${margina}px` }}></div>
                        <div className={fig2.two} style={{ backgroundColor: `${newColorTwo}` }}></div>
                    </div>
                </>
            }
            {
                number === 3 &&
                <>
                    <div className="flex-div fig-margin" style={{ margin: `${margin}px`, transform: `rotate(${angleOne}deg)` }}>
                        <div className={fig3.one} style={{
                            borderTop: `0.3rem solid ${newColor}`, borderLeft: `0.3rem solid ${newColor}`, borderBottom: `0.3rem solid ${newColor}`, margin: `${margina}px`
                        }}></div>
                        <div className={fig3.two} style={{
                            borderRight: `0.3rem solid ${newColor}`, borderLeft: `0.3rem solid ${newColor}`, borderBottom: `0.3rem solid ${newColor}`
                        }}></div>
                    </div>
                </>
            }
            {
                number === 4 &&
                <>
                    <div className="fig-margin" style={{ transform: `rotate(${angleTwo}deg)` }}>
                        <div className={fig4.one} style={{ backgroundColor: `${newColorTwo}`, margin: `${margina}px` }}></div>
                        <div className={fig4.two}></div>
                    </div>
                </>
            }
            {
                number === 5 &&
                <>
                    <div className={`fig-margin ${fig5.rotate}`} style={{ margin: `${margin}px`, transform: `rotate(${angleOne}deg)` }}>
                        <div className={fig5.one} style={{ border: `0.3rem solid ${newColor}`, margin: `${margina}px` }} ></div>
                        <div className={fig5.two}></div>
                    </div>
                </>
            }
            {
                number === 7 &&
                <>
                    <div className={`fig-margin ${fig7.rotate}`} style={{ margin: `${margin}px`, transform: `rotate(${angleOne}deg)` }}>
                        <div className={fig7.one} style={{ border: `0.3rem solid ${newColor}`, margin: `${margina}px` }} ></div>
                        <div className={fig7.two}></div>
                    </div>
                </>
            }
            {
                number === 8 &&
                <>
                    <div className="fig-margin" style={{ margin: `${margin}px`, transform: `rotate(${angleTwo}deg)`, display: `flex` }}>
                        <div className={fig8.one} style={{ borderTop: `0.3rem solid ${newColorTwo}`, borderLeft: `0.3rem solid ${newColorTwo}`, borderRight: `0.3rem solid ${newColorTwo}`, borderBottom: `none`, margin: `${margina}px` }} >
                            <div className={fig8.inner}></div>
                        </div>
                        <div>
                            <div className={fig8.two}></div>
                            <div className={fig8.three}></div>
                        </div>
                    </div>
                </>
            }

        </>
    );
};

export default Figure;