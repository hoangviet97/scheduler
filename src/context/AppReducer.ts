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

    case "GET_ATTACHED_SUBJECTS":
      for (let i = 0; i < state.attachedSubjects.length; i++) {
        const subject = state.subjects.find((x: any) => x.id === state.attachedSubjects[i].subjectID);
        const teacher = state.teachers.find((x: any) => x.id === state.attachedSubjects[i].teacherID);

        state.attachedSubjects[i].subjectDetail = subject;
        state.attachedSubjects[i].teacherDetail = teacher;

        state.weekdays[state.attachedSubjects[i].position.weekday].cols[state.attachedSubjects[i].position.col].items = [state.attachedSubjects[i]];

        console.log(state.weekdays[state.attachedSubjects[i].position.weekday].cols[state.attachedSubjects[i].position.col].items);
      }

      return {
        ...state,
        attachedSubjects: state.attachedSubjects
      };

    case "DELETE_ATTACHED_SUBJECT":
      const newArr = state.attachedSubjects.filter((x: any) => x.id !== action.payload.id);
      const index = state.attachedSubjects.findIndex((x: any) => x.id === action.payload.id);

      state.weekdays[state.attachedSubjects[index].position.weekday].cols[state.attachedSubjects[index].position.col].items = [];

      console.log(index);
      return {
        ...state,
        attachedSubjects: newArr
      };

    case "ADD_TEACHER":
      return {
        ...state,
        teachers: [...state.teacher, action.payload]
      };

    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false
      };

    default:
      return state;
  }
}
