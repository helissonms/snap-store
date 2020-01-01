import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { GridLoader } from 'react-spinners';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useAPI from '../hooks/useAPI';

export default () => {
  const { name } = useParams();

  const [item, isRequesting, error, retry] = useAPI('findSnap', name);

  const renderMedia = () => {
    return item.media.filter(media => media.type === 'screenshot' || media.type === 'video').map((media, index) => {
      if (media.type === 'screenshot') {
        return (
          <div key={index}>
            <img src={media.url} />
          </div>
        );
      }

      return (
        <div key={index}>
          <iframe width="768" height="465" src={media.url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')} />
        </div>
      );
    });
  };

  if (isRequesting) {
    return (
      <div className="flex items-center justify-center h-full">
        <GridLoader size={30} color="#2B6CB0" />
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

  if (!item) {
    return (<></>);
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-6xl h-full">
        <div className="flex">
          <div className="w-1/12">
            {item.icon
              ? <img className="w-full h-auto block" src={item.icon} alt={item.title} />
              : <div className="w-full h-20 block"></div>
            }
          </div>
          <div className="w-9/12 px-3">
            <p className="text-gray-900 text-2xl font-bold">{item.title}</p>
            <p className="text-gray-700">{item.summary}</p>
            <p className="text-gray-800 flex flex-row">
              {item.publisher['display-name']}
              {item.publisher.validation === 'verified' &&
                <span className="w-8 flex justify-center items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                </span>
              }
            </p>
          </div>
          <div className="w-2/12 flex flex-col justify-center items-center">
            <button className="w-20 h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Install
            </button>
            <p className="text-sm text-gray-700">{item.channel}/{item.version}</p>
          </div>
        </div>
        {item.media && <div className="w-full h-auto flex justify-center mt-3">
          <div className="max-w-3xl h-auto">
            <Carousel autoPlay infiniteLoop emulateTouch useKeyboardArrows interval={1500}>
              {renderMedia()}
            </Carousel>
          </div>
        </div>}
        <div className="w-full h-auto mt-3">
          <p className="font-bold text-gray-800">Description</p>
          {item.description.split('\n').map((text, index) => (
            <p className="text-gray-800" key={index}>{text}</p>
          ))}
        </div>
      </div>

    </div>
  );
};
