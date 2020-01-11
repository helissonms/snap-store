import React from 'react';
import useAPI from '../hooks/useAPI';
import { CircleLoader, ClipLoader } from 'react-spinners';

export default ({ item: { name } }) => {
  const [result, isRequesting, error, request] = useAPI('installSnap', name, false);

  if (isRequesting) {
    return (
      <button className="w-auto h-10 bg-gray-500 text-white py-2 px-4 rounded cursor-default" disabled={true} onClick={() => {}}>
        <ClipLoader size={15} color="white" /> Installing...
      </button>
    );
  }

  return (
    <button className="w-auto h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={request}>
      Install
    </button>
  );
};
