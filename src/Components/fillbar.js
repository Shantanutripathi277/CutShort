import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

function ProgressBarCustom() {
  const [progress, setProgress] = useState(75);
  return (
    <div>
      <ProgressBar percent={progress}>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}>Dispatched</div>
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}>Pick Up</div>
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}>Delivery</div>
            </>
          )}
        </Step>
      </ProgressBar>
      <div style={{ marginTop: "40px" }}>
        <button onClick={() => setProgress(progress + 5)}>5 +</button>
      </div>
      <div
        onClick={() => setProgress(progress - 5)}
        style={{ marginTop: "20px" }}
      >
        <button>- 5</button>
      </div>
    </div>
  );
}
export default ProgressBarCustom;
