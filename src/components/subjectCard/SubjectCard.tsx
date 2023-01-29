import React, { useContext } from "react";
import { getSubject } from "../../actions/globalActions";
import { GlobalContext } from "../../context/GlobalState";

interface Props {
  lastName: string;
  data: any;
}

const SubjectCard = ({ lastName, data }: Props) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <div className="w-[85%] h-[85%] p-[5px] bg-slate-100 shadow-lg hover:bg-slate-100" onClick={() => dispatch(getSubject(data))}>
      <div className="flex justify-end text-[10px]">{data.room}</div>
      <div className="flex flex-col items-center">
        <div className="text-[25px] text-bold">{data.subjectDetail.slug}</div>
        <div className="text-[12px]">{lastName}</div>
      </div>
    </div>
  );
};

export default SubjectCard;
