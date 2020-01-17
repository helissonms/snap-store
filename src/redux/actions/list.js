import { REQUESTING, SUCCESS, FAILURE } from "../types/list";
import { REQUEST_API } from "../sagas";

export const request = (section = 'featured') => {
  return {
    type: REQUEST_API,
    payload: {
      types: [
        REQUESTING,
        SUCCESS,
        FAILURE,
      ],
      path: '/find',
      method: 'get',
      config: {
        params: {
          section,
        }
      },
    },
  };
};
