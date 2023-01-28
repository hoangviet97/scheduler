import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { openModal } from "../../actions/globalActions";

interface Props {
  id: number;
  data: any;
}

const DayCell = ({ id, data }: Props) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <div onClick={() => dispatch(openModal())} className={`bg-slate-300 w-[10%] flex border-r-[1px] border-b-[1px] border-slate-300 items-center justify-center ${id % 2 === 0 ? "bg-slate-100" : "bg-slate-200"} hover:bg-sky-300 cursor-pointer`}>
      <div className="w-[100%] h-[100%] flex justify-center">
        {data.items.map((item: any) => (
          <div className="w-[90%] h-[90%] bg-slate-500">{item.room}</div>
        ))}
      </div>
    </div>
  );
};

export default DayCell;
