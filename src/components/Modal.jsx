import React, { useRef } from "react";

function Modal({ value, setValue }) {
  const workerTypeRef = useRef();
  const workHighRef = useRef();
  const workerCountRef = useRef();
  const workAreaRef = useRef();
  const monthSalaryRef = useRef();
  const koef1 = 1.5;
  const koef2 = 1.53;
  const workType = [
    "Mavjud triangulatsiya punktlarini tekshirish",
    "Nivelir belgilarini texnik xatosini topish",
    "Teodolit yo'li",
    "Nivelir yo'li",
    "Taxeometrda syomka qilish",
    "Dala ishlari",
    "Kameral ishlari",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const workerType = workerTypeRef.current.value;
    const workerCount = workerCountRef.current.value;
    const workArea = workAreaRef.current.value;
    const workHigh = workHighRef.current.value;
    const monthSalary = monthSalaryRef.current.value;
    const newValue = {
      workName: workerType,
      workComplexity: workHigh,
      koef1: koef1,
      koef2: koef2,
      workMeasurement: "punkt",
      workArea,
      workerCount,
      resourceForWork: koef1 * koef2 * workArea * workerCount,
      monthSalary: monthSalary,
      dailySalary: monthSalary / 156,
      doneWorkSalary:
        koef1 * koef2 * workArea * workerCount * (monthSalary / 156),
      doneWork35Percent:
        koef1 * koef2 * workArea * workerCount * (monthSalary / 156) * 0.35,
      transport11Percent:
        koef1 * koef2 * workArea * workerCount * (monthSalary / 156) * 0.11,
      salaryForInstrument:
        koef1 * koef2 * workArea * workerCount * (monthSalary / 156) * 0.05,
    }
    setValue([
      ...value,
      newValue
    ]);
    localStorage.setItem("value", JSON.stringify([...value, newValue]));
  };
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-xl text-center">Enter the information</h3>
        <form className="mt-4 flex flex-col gap-y-4">
          <select ref={workerTypeRef} className="select select-info w-full">
            <option disabled selected>
              Select work type
            </option>
            {workType.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <input
            ref={workHighRef}
            type="text"
            placeholder="Work complexity"
            className="input input-bordered input-primary w-full "
          />
          <input
            ref={workerCountRef}
            type="number"
            placeholder="Worker count"
            className="input input-bordered input-primary w-full "
          />
          <input
            ref={workAreaRef}
            type="number"
            placeholder="Work area"
            className="input input-bordered input-primary w-full "
          />
          <input
            ref={monthSalaryRef}
            type="number"
            placeholder="Month salary for last year"
            className="input input-bordered input-primary w-full "
          />
          <button onClick={(e) => handleSubmit(e)} className="btn glass">
            Submit
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
