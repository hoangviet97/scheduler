import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Select from "react-select";
import { deleteAttachedSubject } from "../../actions/globalActions";
const SubjectDetail = () => {
  const {
    state: { singleSubject, teachers, subjects },
    dispatch
  } = useContext(GlobalContext);
  const [teacherData, setTeacherData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [edit, setEdit] = useState(false);

  console.log(singleSubject);

  useEffect(() => {
    const prom: any = teachers.map((item: any) => ({ value: item.id, label: `${item.firstname} ${item.lastname}` }));
    setTeacherData(prom);

    const prom2: any = subjects.map((item: any) => ({ value: item.id, label: `${item.name}` }));
    setSubjectData(prom2);
  }, []);

  return (
    <div className="flex flex-col items-center pt-[40px]">
      <div className="w-[280px] h-[280px] bg-slate-200 rounded-md p-[20px] relative mb-[15px]">
        <div className="flex justify-end">{singleSubject?.room}</div>
        <div className="flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="text-[60px] text-bold">{singleSubject?.subjectDetail.slug}</div>
          <div>{singleSubject?.teacherDetail.lastname}</div>
        </div>
      </div>
      {edit && (
        <div className="w-[100%]">
          <div className="w-[70%]">
            <Select options={subjectData} onChange={(val) => console.log(val)} />
          </div>
          <div className="w-[70%]">
            <Select options={teacherData} onChange={(val) => console.log(val)} />
          </div>
        </div>
      )}
      {!edit ? (
        <div>
          <button onClick={() => setEdit(true)}>Upravit</button>
          <button onClick={() => singleSubject !== null && dispatch(deleteAttachedSubject({ id: singleSubject.id, position: singleSubject.position }))}>Smazat</button>
        </div>
      ) : (
        <button onClick={() => setEdit(false)}>Ulozit</button>
      )}
    </div>
  );
};

export default SubjectDetail;
