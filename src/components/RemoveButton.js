import React from 'react';
import { ClipLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import { request } from '../redux/actions/remove';

export default ({ item }) => {
  const dispatch = useDispatch();

  const { result, isRequesting, error } = useSelector(state => state.removing);

  const install = () => dispatch(request(item));

  if (isRequesting) {
    return (
      <button className="w-auto h-10 bg-gray-500 text-white py-2 px-4 rounded cursor-default" disabled={true} onClick={() => {}}>
        <ClipLoader size={15} color="white" /> Removing...
      </button>
    );
  }

  if (error) {
    return <p className="text-red-700">{error}</p>
  }

  return (
    <button className="w-auto h-10 bg-white border border-red-700 text-red-700 font-bold py-2 px-4 rounded hover:bg-red-700 hover:border-none hover:text-white" onClick={install}>
      Remove
    </button>
  );
};
