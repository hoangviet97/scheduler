import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubjectSettings from "./SubjectSettings";
import TeacherSettings from "./TeacherSettings";

const Settings = () => {
  const [value, setValue] = useState("subject");

  const getSettings = () => {
    switch (value) {
      case "subject":
        return <SubjectSettings />;
      case "teacher":
        return <TeacherSettings />;

      default:
        return <SubjectSettings />;
    }
  };

  return (
    <div className="flex justify-center w-[100%]">
      <div className="">
        <Link to="/">
          <button className="border-2 px-[10px] py-[8px] border-slate-500">Homepage</button>
        </Link>
      </div>
      <div className="w-[800px] mt-[100px] p-[20px]">
        <div className="flex gap-[20px] bg-slate-100 py-[20px] px-[20px] rounded-md mb-[20px]">
          <button onClick={() => setValue("subject")}>Subjects</button>
          <button onClick={() => setValue("teacher")}>Teachers</button>
        </div>
        <div>{getSettings()}</div>
      </div>
    </div>
  );
};

export default Settings;
