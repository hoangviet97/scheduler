import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Select from "react-select";
import { deleteAttachedSubject, addAttachedSubject, closeModal, editSubject } from "../../actions/globalActions";
import { v4 as uuidv4 } from "uuid";

const SubjectDetail = () => {
  const {
    state: { singleSubject, teachers, subjects, position },
    dispatch
  } = useContext(GlobalContext);
  const [teacherData, setTeacherData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [subjectValues, setSubjectValues] = useState({ id: "", room: "", subjectID: "", teacherID: "", position: { weekday: position.weekday - 1, col: position.col - 1 } });

  useEffect(() => {
    const prom: any = teachers.map((item: any) => ({ value: item.id, label: `${item.firstname} ${item.lastname}` }));
    setTeacherData(prom);
    const prom2: any = subjects.map((item: any) => ({ value: item.id, label: `${item.name}` }));
    setSubjectData(prom2);
  }, []);

  useEffect(() => {
    if (singleSubject !== null) {
      setSubjectValues({ id: singleSubject!.id, room: singleSubject!.room, subjectID: singleSubject!.subjectID, teacherID: singleSubject!.teacherID, position: singleSubject!.position });
    }
  }, [singleSubject]);

  const addNewHandler = () => {
    setShowSelect(true);
  };

  const deleteHandler = () => {
    if (singleSubject !== null) {
      dispatch(deleteAttachedSubject({ id: singleSubject!.id, position: singleSubject!.position }));
      dispatch(closeModal());
    }
  };

  const saveNewHandler = () => {
    if (subjectValues.subjectID !== "" || subjectValues.teacherID !== "" || subjectValues.room !== "") {
      setSubjectValues({ ...subjectValues, id: uuidv4() });
      dispatch(addAttachedSubject(subjectValues));
      dispatch(closeModal());
    }
  };

  const editNewHandler = () => {
    if (subjectValues.subjectID !== "" || subjectValues.teacherID !== "" || subjectValues.room !== "") {
      dispatch(editSubject(subjectValues));
      dispatch(closeModal());
    }
  };

  return (
    <div className="flex flex-col items-center pt-[40px]">
      <div className="w-[280px] h-[280px] bg-slate-200 rounded-md p-[20px] relative mb-[15px]">
        {showSelect && (
          <div className="flex flex-col items-center">
            <div>Room</div>
            <input className="px-[10px] py-[5px] mt-[5px]" onChange={(e: any) => setSubjectValues({ ...subjectValues, room: e.target.value })} placeholder="Enter any room id" />
          </div>
        )}
        <div className="flex justify-end">{singleSubject?.room}</div>
        <div className="flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="text-[60px] text-bold">{singleSubject?.subjectDetail.slug}</div>
          <div>{singleSubject?.teacherDetail.lastname}</div>
        </div>
      </div>
      {showSelect && (
        <div className="w-[100%] flex flex-col items-center">
          <div className="w-[70%] mb-[5px]">
            <Select options={subjectData} placeholder="Select subject" name="subjectID" onChange={(val: any) => setSubjectValues({ ...subjectValues, subjectID: val.value })} />
          </div>
          <div className="w-[70%] mb-[5px]">
            <Select options={teacherData} placeholder="Select teacher" name="teacherID" onChange={(val: any) => setSubjectValues({ ...subjectValues, teacherID: val.value })} />
          </div>
        </div>
      )}
      {singleSubject !== null ? (
        <>
          {!edit ? (
            <div className="flex flex-col mt-[10px]">
              <button
                className="border-2 border-yellow-400 mb-[10px] px-[20px] py-[5px] hover:bg-yellow-400 hover:text-white"
                onClick={() => {
                  setEdit(true);
                  setShowSelect(true);
                }}
              >
                Upravit
              </button>
              <button className="bg-red-400 text-white hover:bg-red-500" onClick={() => deleteHandler()}>
                Smazat
              </button>
            </div>
          ) : (
            <button onClick={() => editNewHandler()}>Ulozit</button>
          )}
        </>
      ) : showSelect ? (
        <button onClick={() => saveNewHandler()} className="mt-[10px] border-2 border-sky-400 mb-[10px] px-[20px] py-[5px] bg-sky-400 text-white transition ease-in-out hover:shadow-md hover:-translate-y-[2px]">
          Save
        </button>
      ) : (
        <button onClick={() => addNewHandler()} className="mt-[10px] border-2 border-sky-400 mb-[10px] px-[20px] py-[5px] bg-sky-400 text-white transition ease-in-out hover:shadow-md hover:-translate-y-[2px]">
          Add
        </button>
      )}
    </div>
  );
};

export default SubjectDetail;
