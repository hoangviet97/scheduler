export default function appReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_SUBJECT":
      return {
        ...state,
        subjects: [...state.subject, action.payload]
      };

    case "EDIT_SUBJECT":
      return {
        ...state,
        subjects: [...state.subject, action.payload]
      };

    case "GET_SUBJECT":
      return {
        ...state,
        singleSubject: action.payload
      };

    case "ADD_ATTACHED_SUBJECT":
      const subject = state.subjects.find((x: any) => x.id === action.payload.subjectID);
      const teacher = state.teachers.find((x: any) => x.id === action.payload.teacherID);

      let newAttachedSubject = action.payload;
      newAttachedSubject = { ...newAttachedSubject, subjectDetail: subject, teacherDetail: teacher };

      state.weekdays[action.payload.position.weekday].cols[action.payload.position.col].items = [newAttachedSubject];

      return {
        ...state,
        attachedSubjects: [...state.attachedSubjects, action.payload]
      };

    case "GET_ATTACHED_SUBJECTS":
      for (let i = 0; i < state.attachedSubjects.length; i++) {
        const subject = state.subjects.find((x: any) => x.id === state.attachedSubjects[i].subjectID);
        const teacher = state.teachers.find((x: any) => x.id === state.attachedSubjects[i].teacherID);

        state.attachedSubjects[i].subjectDetail = subject;
        state.attachedSubjects[i].teacherDetail = teacher;

        state.weekdays[state.attachedSubjects[i].position.weekday].cols[state.attachedSubjects[i].position.col].items = [state.attachedSubjects[i]];
      }

      return {
        ...state,
        attachedSubjects: state.attachedSubjects
      };

    case "DELETE_ATTACHED_SUBJECT":
      const newArr = state.attachedSubjects.filter((x: any) => x.id !== action.payload.id);
      const index = state.attachedSubjects.findIndex((x: any) => x.id === action.payload.id);

      state.weekdays[state.attachedSubjects[index].position.weekday].cols[state.attachedSubjects[index].position.col].items = [];

      return {
        ...state,
        attachedSubjects: newArr,
        singleSubject: null
      };

    case "ADD_TEACHER":
      return {
        ...state,
        teachers: [...state.teacher, action.payload]
      };

    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        position: { weekday: action.payload.weekday, col: action.payload.col }
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        singleSubject: null
      };

    default:
      return state;
  }
}
