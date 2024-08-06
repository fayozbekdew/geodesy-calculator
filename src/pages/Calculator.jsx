import React, { useEffect } from "react";
import Card from "../components/Card";
import EmptyCard from "../components/EmptyCard";
import Modal from "../components/Modal";

function Calculator() {
  const [value, setValue] = React.useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("value"))) {
      if (JSON.parse(localStorage.getItem("value")).length > 10) {
        setValue(JSON.parse(localStorage.getItem("value")).slice(0, 10));
        localStorage.setItem(
          "value",
          JSON.stringify(JSON.parse(localStorage.getItem("value")).slice(0, 10))
        );
      } else {
        setValue(JSON.parse(localStorage.getItem("value")));
      }
    } else {
      setValue([]);
    }
  }, []);
  return (
    <div>
      <div className="flex justify-between mt-4">
        <button
          className="btn border-2 border-sky-500"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Start Calculator
        </button>
        <button
          className="btn border-2 border-sky-500"
          onClick={() => {
            localStorage.removeItem("value");
            setValue([]);
          }}
        >
          Clear History
        </button>
      </div>
      <Modal value={value} setValue={setValue} />
      {value.length > 0 ? <Card value={value} /> : <EmptyCard/>}
    </div>
  );
}

export default Calculator;
