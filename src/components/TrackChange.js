import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../redux/actions/trackChange';
import { request as refresh } from '../redux/actions/show';
import { CLEAR } from '../redux/types/trackChange';

export default ({ changeId, item }) => {
  const dispatch = useDispatch();

  const { result, progress, isRequesting, error } = useSelector(state => state.trackChange);

  useEffect(() => {
    const intervalId = setInterval(() => dispatch(request(changeId)), 1000);

    return () => clearInterval(intervalId);
  });

  if (result && result.status === 'Done') {
    dispatch({ type: CLEAR });
    dispatch(refresh(item.name));
  }

  if (error) {
    return <p className="text-xs text-gray-700">{error.message}</p>;
  }

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200">
        <div className="bg-blue-500 text-xs leading-none py-1 px-1 text-center text-white" style={{ width: progress + '%' }}>{Math.floor(progress)}%</div>
      </div>
    </div>
  );
};
