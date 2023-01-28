import React from "react";
import ScheduleTable from "../../components/scheduleTable/ScheduleTable";
import Modal from "../../components/modal/Modal";
import SubjectDetail from "../../components/subjectDetail/SubjectDetail";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-[100%] h-[100%] p-[20px]">
      <div className="flex justify-center">
        <div>
          <Link to="/settings">
            <button className="border-2 px-[10px] py-[8px] border-slate-500">Nastavení</button>
          </Link>
        </div>
      </div>
      <ScheduleTable />
      <Modal>
        <SubjectDetail />
      </Modal>
    </div>
  );
};

export default Homepage;
