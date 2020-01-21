import { REQUESTING, SUCCESS, FAILURE } from "../types/trackChange";
import { REQUEST_API } from "../sagas";

export const request = (id) => {
  return {
    type: REQUEST_API,
    payload: {
      types: [
        REQUESTING,
        SUCCESS,
        FAILURE,
      ],
      path: `/changes/${id}`,
      method: 'get',
    },
  };
};
