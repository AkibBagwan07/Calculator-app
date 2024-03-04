import React from 'react'
import styles from "./calculator.module.css"
import "../App.css"
import { useState } from "react";
// import "./styles.css";
export default function Calculator() {
  const [value, setValue] = useState("");
  const [ans, setAns] = useState(0);
  // const [btnClicked, setBtnClicked] = useState(false);
  // console.log(value);
  const reset = () => {
    setValue("");
    // setBtnClicked(false);
    setAns(0);
  };
  const calculate = () => {
    //  setBtnClicked(true);
    setAns(eval(value));
    // console.log(ans);
  };
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input value={value} type="text" />
      {/* {value === "" && btnClicked === false ? <p>Error</p>} */}
      {ans !== 0 && <p>{ans}</p>}
      <br />
      <div className={styles.btnParent}>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("7"))}>7</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("8"))}>8</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("9"))}>9</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("+"))}>+</button>
      <br />
      <button className={styles.btn} onClick={() => setValue(() => value.concat("4"))}>4</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("5"))}>5</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("6"))}>6</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("-"))}>-</button>
      <br />
      <button className={styles.btn}  onClick={() => setValue(() => value.concat("1"))}>1</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("2"))}>2</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("3"))}>3</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("*"))}>*</button>
      <br />
      <button className={styles.btn} onClick={reset}>C</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("0"))}>0</button>
      <button className={styles.btn} onClick={calculate}>=</button>
      <button className={styles.btn} onClick={() => setValue(() => value.concat("/"))}>/</button>
    </div>
    </div>
  );
}
