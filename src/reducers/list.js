// List Reducer

const listDefaultState = [];

export default (state = listDefaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        action.item
      ];
    case 'REMOVE':
      return state.filter((item) => item !== action.item);
    default:
      return state;
  }
};
