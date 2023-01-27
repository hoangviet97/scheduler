import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
interface Props {
  id: number;
  data: any;
}

const DayCell = ({ id, data }: Props) => {
  const modalState = useContext(ModalContext);
  return <div onClick={() => modalState?.setOpen(true)} className={`bg-slate-300 w-[10%] flex border-r-[1px] border-b-[1px] border-slate-300 items-center justify-center ${id % 2 === 0 ? "bg-slate-100" : "bg-slate-200"} hover:bg-sky-300 cursor-pointer`}></div>;
};

export default DayCell;
