import React from "react";
import DayRow from "../dayRow/DayRow";

const ScheduleTable = () => {
  const weekdays = [
    {
      id: 1,
      name: "Pondělí",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    },
    {
      id: 2,
      name: "Úterý",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    },
    {
      id: 3,
      name: "Středa",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    },
    {
      id: 4,
      name: "Čtvrtek",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    },
    {
      id: 5,
      name: "Pátek",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    }
  ];

  const timeCols = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }];

  return (
    <div className="w-[90%] h-[80vh] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col">
      <div className="bg-slate-200 w-[100%]">
        <div className="h-[60px] w-[calc(100% - 49px)] ml-[49px] bg-slate-200 flex">
          {timeCols.map((col: any, index: number) => (
            <div key={index} className={`w-[10%] h-[100%] flex items-center justify-center ${index % 2 === 0 ? "bg-slate-300" : "bg-slate-600"}`}>
              {col.id}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] h-[100%]">
        {weekdays.map((item: any, index: number) => {
          return <DayRow key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ScheduleTable;
