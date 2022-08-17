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
  const [isCopied, setIsCopied] = useState(false);

  const handleReverse = () => {
    setFrom({ ...from, fromUnit: to.toUnit });
    setTo({ ...to, toUnit: from.fromUnit });
  };

  const handleInput = (e) => {
    setFrom({ ...from, fromInput: e.target.value });
  };

  useEffect(() => {
    from.fromUnit === "REM" || from.fromUnit === "EM"
      ? setTo({ ...to, toInput: from.fromInput * 16 })
      : setTo({ ...to, toInput: from.fromInput / 16 });
  }, [from]);

  const copyText = () => {
    navigator.clipboard.writeText(to.toInput);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const selectUnit = (e) => {
    from.fromUnit === "PIXELS" && handleReverse();
    setFrom({ ...from, fromUnit: e.target.dataset.value });
  };

  return (
    <div className="css-units">
      <h1 className="css-units-header">
        <b>{from.fromUnit}</b> TO <b>{to.toUnit}</b> CONVERTER
      </h1>
      <div className="wrapper">
        <div className="from">
          <div className="selections">
            <label
              htmlFor="from-input"
              data-value="REM"
              className={
                "selection " +
                (from.fromUnit === "REM" || to.toUnit === "REM" ? "active" : "")
              }
              onClick={(e) => {
                selectUnit(e);
              }}
            >
              {to.toUnit === "REM" ? "PIXELS" : "REM"}
            </label>
            <label
              htmlFor="from-input"
              data-value="EM"
              className={
                "selection " +
                (from.fromUnit === "EM" || to.toUnit === "EM" ? "active" : "")
              }
              onClick={(e) => {
                selectUnit(e);
              }}
            >
              {to.toUnit === "EM" ? "PIXELS" : "EM"}
            </label>
          </div>
          <div className="from-input">
            <input
              type="number"
              id="from-input"
              onChange={(e) => handleInput(e)}
            />
            <label htmlFor="from-input" className="span-unit">
              {from.fromUnit}
            </label>
          </div>
        </div>
        <div className="reverse-icon">
          <ion-icon name="repeat-outline" onClick={handleReverse}></ion-icon>
        </div>
        <div className="to">
          <div className="selections">
            <span className="selection active">{to.toUnit}</span>
          </div>
          <div className="to-input">
            <div onClick={() => copyText()}>
              <p>{to.toInput !== 0 && to.toInput}</p>
              {to.toInput !== 0 && (
                <span>{isCopied ? "Copied!" : "Click to copy"}</span>
              )}
            </div>
            <span className="span-unit">{to.toUnit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssUnits;
