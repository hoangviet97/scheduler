import React from "react";
import DayCell from "../dayCell/DayCell";

interface Props {
  data: any;
}

const DayRow = ({ data, data: { id, name, cols } }: Props) => {
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
          <DayCell key={index} id={id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default DayRow;
