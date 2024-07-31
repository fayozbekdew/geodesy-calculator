import React from "react";
import Modal from "../components/Modal";

function Calculator() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quasi.
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button>
      <Modal />
    </div>
  );
}

export default Calculator;
