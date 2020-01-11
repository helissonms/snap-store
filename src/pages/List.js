import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAPI from '../hooks/useAPI';
import ListItem from '../components/ListItem';
import { GridLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default () => {
  const { section } = useParams();

  const [list, isRequesting, error, retry] = useAPI('getSnaps', {
    section,
  });

  useEffect(() => {
    retry();
  }, [section]);

  if (isRequesting) {
    return (
      <div className="flex items-center justify-center h-full">
        <GridLoader size={30} color="#2B6CB0" />
      </div>
    );
  }

  if (list) {
    return (
      <div className="flex flex-wrap content-start justify-center">
        {
          list.map(item => (
              <Link key={item.id} to={`/show/${item.name}`}>
                <ListItem item={item} />
              </Link>
            )
          )
        }
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="text-xl text-red-700">
          <FontAwesomeIcon icon={faExclamationCircle} /> {error}
        </span>
      </div>
    );
  }

  return <></>;
};
