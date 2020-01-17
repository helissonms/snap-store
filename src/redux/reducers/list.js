import { REQUESTING, SUCCESS, FAILURE } from '../types/list';

const initialState = {
  isRequesting: false,
  list: [],
  error: null,
};

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case REQUESTING:
      return {
        ...state,
        isRequesting: true,
      };
    case SUCCESS:
      return {
        ...state,
        list: payload.result,
        isRequesting: false,
      };
    case FAILURE:
      return {
        ...state,
        error: payload.message,
        isRequesting: false,
      };
    default:
      return state;
  }
};
