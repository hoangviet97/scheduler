import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { openModal } from "../../actions/globalActions";
import SubjectCard from "../subjectCard/SubjectCard";
import SubjectCardBox from "../subjectCardBox/SubjectCardBox";

interface Props {
  id: number;
  data: any;
}

// data.id - col

const DayCell = ({ id, data }: Props) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <div
      onClick={() => {
        dispatch(openModal({ weekday: id, col: data.id }));
      }}
      className={`bg-slate-300 w-[10%] flex border-r-[1px] border-b-[1px] border-slate-400 items-center justify-center ${id % 2 === 0 ? "bg-slate-200" : "bg-slate-300"} hover:bg-sky-300 cursor-pointer`}
    >
      {data.items.length > 0 && (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
          {data.items.map((item: any, index: number) => {
            const lastName = item.teacherDetail.lastname.substring(0, 3);
            return <SubjectCard key={index} lastName={lastName} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default DayCell;
