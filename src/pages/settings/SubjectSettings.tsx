import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { addSubject } from "../../actions/globalActions";
import { Subject } from "../../interface/index";

const SubjectSettings = () => {
  const {
    state: { subjects },
    dispatch
  } = useContext(GlobalContext);

  const [newSubject, setNewSubject] = useState({ id: "mko", name: "", slug: "" });

  const submitHandler = () => {
    dispatch(addSubject(newSubject));
  };

  return (
    <div className="flex justify-between gap-[20px] w-[100%] h-[60vh]">
      <div className="overflow-scroll max-h-[500px] bg-slate-400 p-[20px] w-[50%] rounded-md">
        {subjects.map((item: Subject, index: number) => (
          <div className="flex justify-between">
            <div>
              {item.name} ({item.slug})
            </div>
            <div>Delete</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[5px] w-[50%] bg-slate-300 p-[20px] rounded-md">
        <input className="px-[10px] py-[7px] rounded-md" onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })} placeholder="Enter subject name" />
        <input className="px-[10px] py-[7px] rounded-md" onChange={(e) => setNewSubject({ ...newSubject, slug: e.target.value })} placeholder="Enter subject slug" />
        <button onClick={() => submitHandler()} className="bg-sky-400">
          Ulozit
        </button>
      </div>
    </div>
  );
};

export default SubjectSettings;
