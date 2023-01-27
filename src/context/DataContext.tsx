import React from "react";

interface Props {
  children: JSX.Element;
}

type day = {
  id: number;
  name: string;
  cols: any[];
};

interface weekdaysType {
  weekdays: day[];
}

export const DataContext = React.createContext<weekdaysType | null>(null);

const DataProvider = ({ children }: Props) => {
  const [weekdays, setWeekdays] = React.useState([
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
  ]);

  return <DataContext.Provider value={{ weekdays }}>{children}</DataContext.Provider>;
};

export default DataProvider;
