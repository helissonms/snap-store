import { REQUESTING, SUCCESS, FAILURE, CLEAR } from '../types/trackChange';

const initialState = {
  isRequesting: false,
  result: null,
  error: null,
  progress: 0,
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
      const total = payload.result.tasks.reduce((acc, current) => acc += current.progress.total, 0);
      const done = payload.result.tasks.reduce((acc, current) => acc += current.progress.done, 0);

      return {
        ...state,
        result: payload.result,
        progress: (done * 100) / total,
        isRequesting: false,
      };
    case FAILURE:
      return {
        ...state,
        error: payload.message,
        isRequesting: false,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
