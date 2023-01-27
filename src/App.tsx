import React from "react";
import { FunctionComponent } from "react";
import ScheduleTable from "./components/scheduleTable/ScheduleTable";
import Modal from "./components/modal/Modal";
import DataProvider from "./context/DataContext";
import ModalProvider from "./context/ModalContext";

const App: FunctionComponent = () => {
  return (
    <DataProvider>
      <ModalProvider>
        <div className="w-[100%] h-[100%]">
          <ScheduleTable />
          <Modal>
            <div>ff</div>
          </Modal>
        </div>
      </ModalProvider>
    </DataProvider>
  );
};

export default App;
