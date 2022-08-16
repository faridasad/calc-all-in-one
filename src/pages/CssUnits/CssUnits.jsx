import { useEffect, useState } from "react";
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
  const [isCopied, setIsCopied] = useState(false)

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

  const copyText = () => {
    navigator.clipboard.writeText(to.toInput)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="css-units">
      <h1 className="css-units-header">
        <b>{from.fromUnit}</b> TO <b>{to.toUnit}</b> CONVERTER
      </h1>
      <div className="wrapper">
        <div className="from">
          <label htmlFor="from-input" className={"selection"}>
            {from.fromUnit}
          </label>
          <div className="from-input">
            <input
              type="number"
              id="from-input"
              onChange={(e) => handleInput(e)}
            />
            <label htmlFor="from-input" className="span-unit">{from.fromUnit}</label>
          </div>
        </div>
        <div className="reverse-icon">
          <ion-icon name="repeat-outline" onClick={handleReverse}></ion-icon>
        </div>
        <div className="to">
          <span className={"selection"}>{to.toUnit}</span>
          <div className="to-input">
            <div onClick={() => copyText()}>
              <p>{to.toInput !== 0 && to.toInput}</p>
              <span>{isCopied ? "Copied!" : "Click to copy"}</span>
            </div>
            <span className="span-unit">{to.toUnit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssUnits;
