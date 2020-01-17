import { REQUESTING, SUCCESS, FAILURE } from "../types/show";
import { REQUEST_API } from "../sagas";

export const request = (name) => {
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
          name,
        }
      },
    },
  };
};
