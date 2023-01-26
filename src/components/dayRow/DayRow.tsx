import React from "react";

interface Props {
  data: any;
}

const DayRow = ({ data: { id, name, cols } }: Props) => {
  const subName = name.substring(0, 2);
  return (
    <div className="flex w-[100%] h-[20%]">
      <div className="p-[10px] h-[100%%] w-[50px] flex items-center justify-center bg-slate-800">
        <span style={{ writingMode: "vertical-rl" }} className="transform rotate-180 text-slate-300">
          {subName}
        </span>
      </div>
      <div className="flex jusitfy-between w-[100%]">
        {cols.map((item: any, index: number) => (
          <div key={index} className={`bg-slate-300 w-[10%] flex border-r-[1px] border-b-[1px] border-slate-300 items-center justify-center ${id % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}`}>
            {item.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayRow;
