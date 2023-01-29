import { Subject, Teacher, ExtAttachedSubject, IAction } from "../interface/index";

export const addSubject = (subject: Subject): IAction => ({
  type: "ADD_SUBJECT",
  payload: subject
});

export const editSubject = (subject: Subject): IAction => ({
  type: "EDIT_SUBJECT",
  payload: subject
});

export const getSubject = (subject: ExtAttachedSubject): IAction => ({
  type: "GET_SUBJECT",
  payload: subject
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

export const openModal = (): IAction => ({
  type: "OPEN_MODAL"
});

export const closeModal = (): IAction => ({
  type: "CLOSE_MODAL"
});
