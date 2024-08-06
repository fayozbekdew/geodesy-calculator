import React from "react";

function Card({ value }) {
  return (
    <div>
      {value.map((item, index) => (
        <div
          key={crypto.randomUUID()}
          className="card bg-primary text-primary-content w-full mt-6"
        >
          <div className="card-body ">
            <div className="flex justify-around">
              <span className="">
                <span className="flex justify-between">
                  <p className="w-[250px]">Ish nomi:</p>
                  <p>{item.workName}</p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Ish murakabligi:</p>
                  <p>{item.workComplexity}</p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">O'lchov birligi:</p>
                  <p>{item.workMeasurement}</p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Ish hajmi:</p>
                  <p>{item.workArea}</p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Odam soni:</p>
                  <p>{item.workerCount}</p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Ish uchun sarflangan kun/soat:</p>
                  <p>{item.resourceForWork}</p>
                </span>
              </span>
              <span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Bir oylik ish xaqi:</p>
                  <p>
                    {new Intl.NumberFormat("uz-UZ", {
                      style: "currency",
                      currency: "UZS",
                    }).format(item.monthSalary)}
                  </p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Bir kishi ish xaqi:</p>
                  <p>{item.dailySalary.toFixed(2)}</p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Ish uchun to'langan pul:</p>
                  <p>{item.doneWorkSalary.toFixed(2)}</p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Ish uchun to'langan pulni 35%:</p>
                  <p>{item.doneWork35Percent.toFixed(2)}</p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Transport uchun pul:</p>
                  <p>{item.transport11Percent.toFixed(2)}</p>
                </span>
                <span className="flex gap-x-2">
                  <p className="w-[250px]">Asbob bilan taminlanganligi:</p>
                  <p>{item.salaryForInstrument.toFixed(2)}</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
