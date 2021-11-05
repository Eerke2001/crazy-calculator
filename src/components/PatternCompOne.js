import { useState } from "react";
import Balone from "./Balone.js";

import Figure from "./Figure.js";

import styles from "./patterncompone.module.css";

const PatternCompOne = ({ patternValue, AmountOfPatternsArray, rotation, newColor, newColorTwo, margin, margina, angleOne, angleTwo }) => {

    console.log(patternValue)

    let compListRow = AmountOfPatternsArray.map(item => {
        return (
            <>
                <div className={styles.grid}>
                    <div className={`flex-div ${styles.rotate}`} style={rotation}>
                        {
                            patternValue === '1' &&
                            <>
                                <Figure newColor={newColor} number={1} margin={margin} margina={margina} angleOne={angleOne} />
                                <Figure newColorTwo={newColorTwo} number={2} margina={margina} angleTwo={angleTwo} />
                            </>
                        }
                        {
                            patternValue === '2' &&
                            <>
                                <Figure newColor={newColor} number={3} margin={margin} margina={margina} angleOne={angleOne} />
                                <Figure newColorTwo={newColorTwo} number={4} margina={margina} angleTwo={angleTwo} />
                            </>
                        }
                        {
                            patternValue === '3' &&
                            <>
                                <Figure newColor={newColor} number={5} margin={margin} margina={margina} angleOne={angleOne} />
                                <Figure newColorTwo={newColorTwo} number={4} margina={margina} angleTwo={angleTwo} />
                            </>
                        }
                        {
                            patternValue === '4' &&
                            <>
                                <Figure newColor={newColor} number={7} margin={margin} margina={margina} angleOne={angleOne} />
                                <Figure newColorTwo={newColorTwo} number={8} margina={margina} angleTwo={angleTwo} />
                            </>
                        }
                    </div>
                    <Balone />
                </div>
            </>
        )
    });

    return (
        compListRow
    )
};

export default PatternCompOne;