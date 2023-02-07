import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { IContextModel, IState } from "../interface/index";

interface Props {
  children: JSX.Element;
}

const initialState = {
  teachers: [
    {
      id: "1248y",
      firstname: "Kamila",
      lastname: "Černá"
    },
    {
      id: "34rt53",
      firstname: "Věra",
      lastname: "Koucná"
    },
    {
      id: "34rt51",
      firstname: "David",
      lastname: "Pešek"
    }
  ],
  subjects: [
    { id: "ek01", name: "Elektrotechnika", slug: "EK" },
    { id: "mat07", name: "Matematika", slug: "MAT" }
  ],
  attachedSubjects: [
    { id: "124", subjectID: "ek01", teacherID: "34rt53", position: { weekday: 2, col: 3 }, room: "NB101" },
    { id: "12fre8", subjectID: "ek01", teacherID: "34rt51", position: { weekday: 1, col: 1 }, room: "NB210" },
    { id: "12fre3", subjectID: "ek01", teacherID: "34rt51", position: { weekday: 1, col: 6 }, room: "NB210" }
  ],
  singleSubject: null,
  isModalOpen: false,
  position: { weekday: 0, col: 0 },
  weekdays: [
    {
      id: 1,
      name: "Pondělí",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    },
    {
      id: 2,
      name: "Úterý",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    },
    {
      id: 3,
      name: "Středa",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    },
    {
      id: 4,
      name: "Čtvrtek",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    },
    {
      id: 5,
      name: "Pátek",
      cols: [
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
        { id: 4, items: [] },
        { id: 5, items: [] },
        { id: 6, items: [] },
        { id: 7, items: [] },
        { id: 8, items: [] },
        { id: 9, items: [] },
        { id: 10, items: [] }
      ]
    }
  ]
} as IState;

export const GlobalContext = createContext({} as IContextModel);

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state: state,
        dispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
