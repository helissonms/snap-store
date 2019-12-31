import { useState, useEffect } from "react";
import snapd from '../services/snapd';

export default (method, params = {}) => {
  const [data, setData] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [error, setError] = useState(null);

  const request = async () => {
    setError(null);

    try {
      setIsRequesting(true);

      setData(await snapd[method](params));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsRequesting(false);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return [data, isRequesting, error, request];
};
