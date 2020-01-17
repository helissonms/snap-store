import { REQUESTING, SUCCESS, FAILURE } from '../types/show';

const initialState = {
  isRequesting: false,
  item: null,
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
        item: payload.result.length > 0 ? payload.result[0] : null,
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
