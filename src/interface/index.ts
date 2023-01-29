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
  id: string;
  subjectID: string;
  teacherID: string;
  position: { weekday: number; col: number };
  room: string;
};

export type ExtAttachedSubject = {
  id: string;
  subjectID: string;
  teacherID: string;
  position: { weekday: number; col: number };
  room: string;
  subjectDetail: Subject;
  teacherDetail: Teacher;
};

export interface IState {
  teachers: Teacher[];
  subjects: Subject[];
  attachedSubjects: AttachedSubject[];
  singleSubject: ExtAttachedSubject | null;
  isModalOpen: boolean;
  weekdays: Weekday[];
}

export type IAction = { type: "ADD_SUBJECT"; payload: Subject } | { type: "EDIT_SUBJECT"; payload: Subject } | { type: "GET_SUBJECT"; payload: ExtAttachedSubject } | { type: "GET_ATTACHED_SUBJECTS" } | { type: "DELETE_ATTACHED_SUBJECT"; payload: any } | { type: "ADD_TEACHER"; payload: Teacher } | { type: "OPEN_MODAL" } | { type: "CLOSE_MODAL" };

export interface IContextModel {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
