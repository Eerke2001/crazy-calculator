import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { ROUTES } from "./consts/index.js";
import Nav from "./components/Nav";
import Gallery from "./pages/Gallery";

import { useState } from "react";


function App() {

    const [color, setColor] = useState({ r: 255, g: 62, b: 118 });
    const [newColor, setNewColor] = useState(`#ff3e76`);
    const [newColorTwo, setNewColorTwo] = useState(`#2a6eff`);
    const [angle, setAngle] = useState(0);
    const [angleOne, setAngleOne] = useState(0);
    const [angleTwo, setAngleTwo] = useState(0);
    const [margin, setMargin] = useState(5);
    const [margina, setMargina] = useState(0);
    const [amount, setAmount] = useState(6);
    const [backgroundValue, setBackgroundValue] = useState(`standard`);

    const [background, setBackground] = useState([
        { url: `none`, backgroundColor: `#333333`, scape: `standard` },
        { url: `url("assets/img/desert.jpg")`, backgroundColor: `none`, scape: `desert` },
        { url: `url("assets/img/space.jpg")`, backgroundColor: `none`, scape: `space` },
        { url: `url("assets/img/jungle.jpg")`, backgroundColor: `none`, scape: `jungle` },
        { url: `url("assets/img/art.jpg")`, backgroundColor: `none`, scape: `art` },
        { url: `url("assets/img/glitter.jpg")`, backgroundColor: `none`, scape: `glitter` }
    ]);

    const [patternType, setPatternType] = useState('1');

    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route path={ROUTES.GALLERY}>
                    <Gallery />
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home
                        color={color} setColor={setColor}
                        newColor={newColor} setNewColor={setNewColor}
                        newColorTwo={newColorTwo} setNewColorTwo={setNewColorTwo}
                        angle={angle} setAngle={setAngle}
                        angleOne={angleOne} setAngleOne={setAngleOne}
                        angleTwo={angleTwo} setAngleTwo={setAngleTwo}
                        margin={margin} setMargin={setMargin}
                        margina={margina} setMargina={setMargina}
                        amount={amount} setAmount={setAmount}
                        backgroundValue={backgroundValue} setBackgroundValue={setBackgroundValue}
                        background={background} setBackground={setBackground}
                        patternType={patternType} setPatternType={setPatternType}
                    />
                </Route>
            </Switch>
        </div>
    );
}

export default App;