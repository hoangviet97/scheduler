import React from "react";
import { FunctionComponent } from "react";
import ScheduleTable from "./components/scheduleTable/ScheduleTable";

const App: FunctionComponent = () => {
  return (
    <div className="w-[100%] h-[100%]">
      <ScheduleTable />
    </div>
  );
};

export default App;
