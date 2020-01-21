import { REQUESTING, SUCCESS, FAILURE } from "../types/remove";
import { REQUEST_API } from "../sagas";

export const request = (item) => {
  return {
    type: REQUEST_API,
    payload: {
      types: [
        REQUESTING,
        SUCCESS,
        FAILURE,
      ],
      path: `/snaps/${item.name}`,
      method: 'post',
      config: {
        headers: {
          'Content-Type': 'application/json',
        },
      },
      data: {
        action: 'remove',
      },
    },
  };
};
