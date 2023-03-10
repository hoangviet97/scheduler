import React, { useContext, useEffect } from "react";
import DayRow from "../dayRow/DayRow";
import { GlobalContext } from "../../context/GlobalState";
import { getAttachedSubject } from "../../actions/globalActions";
import { Weekday } from "../../interface/index";

const ScheduleTable = () => {
  const {
    state: { weekdays },
    dispatch
  } = useContext(GlobalContext);

  const timeCols = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }];

  useEffect(() => {
    dispatch(getAttachedSubject());
  }, []);

  return (
    <div className="w-[90%] h-[80vh] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col">
      <div className="bg-slate-200 w-[100%]">
        <div className="h-[60px] w-[calc(100% - 49px)] ml-[49px] bg-slate-200 flex">
          {timeCols.map((col: any, index: number) => (
            <div key={index} className={`w-[10%] h-[100%] flex items-center justify-center text-slate-200 border-r-[1px] border-b-[1px] border-slate-300 bg-slate-800`}>
              {col.id}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] h-[100%]">
        {weekdays.map((item: Weekday, index: number) => {
          return <DayRow key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ScheduleTable;
