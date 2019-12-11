import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function enterprises(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enterprises/ADD_ENTERPRISES':
        draft.data = action.payload;
        break;

      default:
        return state;
    }
  });
}
