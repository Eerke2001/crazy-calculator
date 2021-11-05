import { useState } from "react";

import SelectBackground from "../components/SelectBackground.js";
import SelectPatternType from "../components/SelectPatternType.js";
import PatternCompOne from "../components/PatternCompOne.js";
import SliderAll from "../components/SliderAll.js";
import ColorInput from "../components/ColorInput.js";

import Figure from "../components/Figure.js";


const Home = ({ color, setColor, newColor, setNewColor, newColorTwo, setNewColorTwo, angle, setAngle, angleOne, setAngleOne, angleTwo, setAngleTwo, margin, setMargin, margina, setMargina, amount, setAmount, backgroundValue, setBackgroundValue, background, setBackground, patternType, setPatternType }) => {


  // const setChannel = (channel, value) => {
  //   //color[channel] = value;

  //   const colorCopy = { ...color };
  //   colorCopy[channel] = value;
  //   setColor(colorCopy);

  // }

  const AmountOfPatterns = 7;
  const AmountOfPatternsArray = [];

  const setNewBackground = (value) => {
    //color[channel] = value;
    console.log(value);

    const bgCopy = [...background];
    console.log(bgCopy);
    bgCopy.findIndex((element) => element.scape === value);
    setBackground(bgCopy);
    setBackgroundValue(value);
    //backgroundValue = value;
    const indexArr = bgCopy.findIndex((element) => element.scape === value);
    console.log(bgCopy[indexArr]);

  }

  for (let i = 0; i < amount; i++) {
    AmountOfPatternsArray.push(i);
  }

  const rotation = {
    transform: `rotate(${angle}deg)`
  };

  let compListPattern = AmountOfPatternsArray.map(item => {
    //console.log(AmountOfPatternsArray.indexOf(item))
    return (
      <>
        {AmountOfPatternsArray.indexOf(item) % 2
          ? <div className="grid-pattern-layout">
            <div>
              <PatternCompOne patternValue={patternType} AmountOfPatternsArray={AmountOfPatternsArray} rotation={rotation} newColor={newColor} newColorTwo={newColorTwo} margin={margin} margina={margina} angleOne={angleOne} angleTwo={angleTwo} />
              {/* {compListRow} */}
            </div>
          </div>
          : <div className="grid-pattern-layout extra-mar">
            <div>
              <PatternCompOne patternValue={patternType} AmountOfPatternsArray={AmountOfPatternsArray} rotation={rotation} newColor={newColor} newColorTwo={newColorTwo} margin={margin} margina={margina} angleOne={angleOne} angleTwo={angleTwo} />
              {/* {compListRow} */}
            </div>
          </div>
        }
      </>
    )
  });

  return (
    <>
      <div className={`achtergrond-${backgroundValue} ghost-bg`}></div>
      {console.log(backgroundValue)}
      <div className="value-changer">
        <div className="section-ind">
          <p className="info-p">Change color:</p>
          <ColorInput value={newColor} onValueChange={value => setNewColor(value)} beforeInfo="fig. 1" afterInfo={newColor} />
          <ColorInput value={newColorTwo} onValueChange={value => setNewColorTwo(value)} beforeInfo="fig. 2" afterInfo={newColorTwo} />
        </div>
        <div className="section-ind">
          <p className="info-p">Rotate pattern:</p>
          <SliderAll value={angleOne} onValueChange={value => setAngleOne(value)} beforeInfo="fig. 1" afterInfo={`${angleOne}°`} max={360} />
          <SliderAll value={angleTwo} onValueChange={value => setAngleTwo(value)} beforeInfo="fig. 2" afterInfo={`${angleTwo}°`} max={360} />
          <SliderAll value={angle} onValueChange={value => setAngle(value)} beforeInfo="All" afterInfo={`${angle}°`} max={360} />
        </div>
        <div className="section-ind">
          <p className="info-p">Extra space:</p>
          <SliderAll value={margin} onValueChange={value => setMargin(value)} beforeInfo="" afterInfo={`${margin} px`} max={50} displayBefore="hidden" />
        </div>
        <div className="section-ind">
          <p className="info-p">Offset:</p>
          <SliderAll value={margina} onValueChange={value => setMargina(value)} beforeInfo="" afterInfo={`${margina} px`} max={50} displayBefore="hidden" />
        </div>
        <div className="section-ind">
          <p className="info-p">Amount:</p>
          <SliderAll value={amount} onValueChange={value => setAmount(value)} beforeInfo="" afterInfo={`${amount} x ${amount}`} max={20} displayBefore="hidden" />
        </div>
      </div>

      <div className="chaos-changer">
        <div className="section-ind">
          <p className="info-p">Pattern Type:</p>
          <SelectPatternType value={patternType} onValueChange={value => setPatternType(value)} />
        </div>
        <div className="section-ind">
          <p className="info-p">Background:</p>
          <SelectBackground newSection={background.filter((bg) => bg.scape === backgroundValue)} value={backgroundValue} array={background} onValueChange={value => setNewBackground(value)} />
        </div>
      </div>

      <div className="grid-single">
        <div className="set-layout">
          <div className="flex-div">

            {compListPattern}

          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
