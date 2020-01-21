import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../redux/actions/trackChange';
import { request as refresh } from '../redux/actions/show';
import { CLEAR } from '../redux/types/trackChange';

export default ({ changeId, item }) => {
  const dispatch = useDispatch();

  const { result, isRequesting, error } = useSelector(state => state.trackChange);

  useEffect(() => {
    const intervalId = setInterval(() => dispatch(request(changeId)), 1000);

    return () => clearInterval(intervalId);
  });

  const currentTask = () => {
    if (!result) {
      return '';
    }

    const doing = result.tasks.find(task => task.status === 'Doing');

    if (doing) {
      return doing.summary;
    }
  }

  if (result && result.status === 'Done') {
    dispatch({ type: CLEAR });
    dispatch(refresh(item.name));
  }

  if (error) {
    return <p className="text-xs text-gray-700">{error.message}</p>
  }

  return <p className="text-xs text-gray-700">{currentTask()}</p>
};
