import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="flex justify-center w-[100%] bg-slate-400">
      <div className="flex">
        <div>
          <Link to="/settings">
            <button className="border-2 px-[10px] py-[8px] border-slate-500">Nastavení</button>
          </Link>
        </div>
      </div>
      <div className="w-[800px] mt-[100px] bg-slate-100">
        <div className="bg-slate-200 flex">
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
