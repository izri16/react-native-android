const CHANGE_INPUT = 'CHANGE_INPUT';

const initState = {
  input: ''
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {input: action.data};
    default:
      return state;
  }
}

export default userReducer;
