import React, { useState, useEffect, useRef } from "react";
import InputMask from "react-input-mask";
import "./bmi.scss";

function Bmi() {
  const output = useRef();
  const [userInfo, setUserInfo] = useState({
    weight: 0,
    height: 0,
  });
  // const [error, setError] = useState(false);

  useEffect(() => {
    let result = (
      Math.round(
        (userInfo.weight / (userInfo.height * userInfo.height)) * 100
      ) / 100
    ).toFixed(2);

    isNaN(result) || !isFinite(result)
      ? (output.current.textContent = "")
      : (output.current.textContent = result);
  }, [userInfo.height, userInfo.weight]);

  return (
    <div className="bmi">
      <h1>BODY MASS INDEX</h1>
      <div className="wrapper">
        <div className="weight">
          <label htmlFor="weightInput">Weight</label>
          <div className="input-con">
            <label htmlFor="weightInput">Kilogram</label>
            <InputMask
              value={userInfo.weight === 0 ? "" : userInfo.weight}
              mask="999"
              maskPlaceholder=""
              id="weightInput"
              onChange={(e) =>
                setUserInfo({ ...userInfo, weight: e.target.value })
              }
            />
          </div>
        </div>
        <div className="height">
          <label htmlFor="heightInput">Height</label>
          <div className="input-con">
            <label htmlFor="heightInput">Meter</label>
            <InputMask
              value={userInfo.height === 0 ? "" : userInfo.height}
              mask="9.99"
              maskPlaceholder=""
              id="heightInput"
              onChange={(e) =>
                setUserInfo({ ...userInfo, height: e.target.value })
              }
            />
          </div>
        </div>
        <div className="result">
          <div className="p">Your BMI</div>
          <div className="output-con">
            <div className="output" ref={output}></div>
            <button
              className="button-reset"
              onClick={() => setUserInfo({ weight: 0, height: 0 })}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
