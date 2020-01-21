import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import { request } from '../redux/actions/install';
import TrackChange from './TrackChange';
import { CLEAR } from '../redux/types/install';

export default ({ item }) => {
  const dispatch = useDispatch();
  const [changeId, setChangeId] = useState(null);

  const { result, isRequesting, error } = useSelector(state => state.installing);

  const install = () => dispatch(request(item));

  if (result && !isRequesting) {
    dispatch({ type: CLEAR });
    setChangeId(result.change);
  }

  if (isRequesting) {
    return (
      <button className="w-auto h-10 bg-gray-500 text-white py-2 px-4 rounded cursor-default" disabled={true} onClick={() => {}}>
        <ClipLoader size={15} color="white" /> Installing...
      </button>
    );
  }

  if (error) {
    return <p className="text-red-700">{error}</p>
  }

  if (changeId) {
    return <TrackChange changeId={changeId} item={item} />
  }

  return (
    <button className="w-auto h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={install}>
      Install
    </button>
  );
};
