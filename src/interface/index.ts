export type Teacher = {
  id: string;
  firstname: string;
  lastname: string;
};

export type Weekday = {
  id: number;
  name: string;
  cols: any[];
};

export type Subject = {
  id: string;
  name: string;
  slug: string;
};

export type AttachedSubject = {
  subjectID: string;
  teacherID: string;
  position: { weekday: number; col: number };
  room: string;
};

export interface IState {
  teachers: Teacher[];
  subjects: Subject[];
  attachedSubjects: AttachedSubject[];
  subjectDetail: Subject | null;
  isModalOpen: boolean;
  weekdays: Weekday[];
}

export type IAction = { type: "ADD_SUBJECT"; payload: Subject } | { type: "EDIT_SUBJECT"; payload: Subject } | { type: "GET_ATTACHED_SUBJECTS" } | { type: "ADD_TEACHER"; payload: Teacher } | { type: "OPEN_MODAL" } | { type: "CLOSE_MODAL" };

export interface IContextModel {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
