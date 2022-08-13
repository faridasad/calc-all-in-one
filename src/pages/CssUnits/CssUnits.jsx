import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./css_units.scss";

function CssUnits() {
  const [from, setFrom] = useState({
    fromInput: "",
    fromUnit: "REM",
  });
  const [to, setTo] = useState({
    toInput: "",
    toUnit: "PIXELS",
  });

  const handleReverse = () => {
    setFrom({ ...from, fromUnit: to.toUnit });
    setTo({ ...to, toUnit: from.fromUnit });
  };

  const handleInput = (e) => {
    setFrom({ ...from, fromInput: e.target.value });
  };

  useEffect(() => {
    from.fromUnit === "REM"
      ? setTo({ ...to, toInput: from.fromInput * 16 })
      : setTo({ ...to, toInput: from.fromInput / 16 });
  }, [from]);

  return (
    <div className="css-units">
      <Header />
      <h1 className="css-units-header">
        <b>{from.fromUnit}</b> TO <b>{to.toUnit}</b> CONVERTER
      </h1>
      <div className="wrapper">
        <div className="from">
          <span className={"selection"}>{from.fromUnit}</span>
          <input
            type="number"
            className="from-input"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="reverse-icon">
          <ion-icon name="repeat-outline" onClick={handleReverse}></ion-icon>
        </div>
        <div className="to">
          <span className={"selection"}>{to.toUnit}</span>
          <div className="to-input">{to.toInput !== 0 && to.toInput}</div>
        </div>
      </div>
    </div>
  );
}

export default CssUnits;
