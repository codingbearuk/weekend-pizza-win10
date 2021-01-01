import { Reducer } from 'app-store';

interface State {
  isOpen: boolean;
}

const initial: State = {
  isOpen: true,
};

const reducer: Reducer = (state: State = initial, action) => {
  switch (action.type) {
    case 'open-sidebar':
      state = { ...state, isOpen: true };
      return state;
    case 'close-sidebar':
      state = { ...state, isOpen: false };
      return state;
    default:
      return state;
  }
};

export default reducer;
