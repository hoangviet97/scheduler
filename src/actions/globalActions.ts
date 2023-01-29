import { Subject, Teacher, ExtAttachedSubject, IAction } from "../interface/index";

export const addSubject = (subject: Subject): IAction => ({
  type: "ADD_SUBJECT",
  payload: subject
});

export const editSubject = (subject: any): IAction => ({
  type: "EDIT_SUBJECT",
  payload: subject
});

export const getSubject = (subject: ExtAttachedSubject): IAction => ({
  type: "GET_SUBJECT",
  payload: subject
});

export const addAttachedSubject = (object: any): IAction => ({
  type: "ADD_ATTACHED_SUBJECT",
  payload: object
});

export const getAttachedSubject = (): IAction => ({
  type: "GET_ATTACHED_SUBJECTS"
});

export const deleteAttachedSubject = ({ id, position }: { id: any; position: any }): IAction => ({
  type: "DELETE_ATTACHED_SUBJECT",
  payload: { id, position }
});

export const addTeacher = (teacher: Teacher): IAction => ({
  type: "ADD_TEACHER",
  payload: teacher
});

export const openModal = ({ weekday, col }: { weekday: any; col: any }): IAction => ({
  type: "OPEN_MODAL",
  payload: { weekday, col }
});

export const closeModal = (): IAction => ({
  type: "CLOSE_MODAL"
});
