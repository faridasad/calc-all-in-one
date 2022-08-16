import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import "./bmi.scss";

function Bmi() {
  const [userInfo, setUserInfo] = useState({
    weight: 0,
    height: 0,
    result: 0,
  });
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let outputText = (
      Math.round(
        (userInfo.weight / (userInfo.height * userInfo.height)) * 100
      ) / 100
    ).toFixed(2);

    isNaN(outputText) || !isFinite(outputText)
      ? setUserInfo({ ...userInfo, result: "" })
      : setUserInfo({ ...userInfo, result: outputText });
  }, [userInfo.height, userInfo.weight]);

  const copyText = () => {
    navigator.clipboard.writeText(userInfo.result);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  };

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
          <div className="output-con" onClick={() => copyText()}>
            <p className="output">{userInfo.result}</p>
            {userInfo.result && <span className="copy-text-badge">
                {isCopied ? "Copied!" : "Click to copy"}
              </span>}
            <button
              className="button-reset"
              onClick={() => setUserInfo({ weight: 0, height: 0 })}
            >
              Reset
            </button>
          </div>
          <a href="https://en.wikipedia.org/wiki/Body_mass_index" target="_blank"><i>Learn more about Body Mass Index from here &#8594;</i></a>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
