import { REQUESTING, SUCCESS, FAILURE, CLEAR } from '../types/install';

const initialState = {
  isRequesting: false,
  result: null,
  error: null,
};

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case REQUESTING:
      return {
        ...state,
        isRequesting: true,
        error: null,
      };
    case SUCCESS:
      return {
        ...state,
        result: payload,
        isRequesting: false,
      };
    case FAILURE:
      return {
        ...state,
        error: payload.message,
        isRequesting: false,
      };
    case CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
