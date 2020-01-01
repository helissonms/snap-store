import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function ListItem({ item }) {
  return (
    <div className="w-40 h-auto m-2 p-2 overflow-hidden shadow cursor-pointer bg-white hover:bg-gray-200" key={item.id}>
      <div className="w-full h-auto flex justify-center">
        {item.icon
          ? <img className="w-20 h-auto block" src={item.icon} alt={item.title} />
          : <div className="w-20 h-20 block"></div>
        }
      </div>
      <div className="flex flex-col justify-start items-start w-100 h-auto mt-2">
        <p className="w-full text-gray-800 truncate">{item.title}</p>
        <p className="w-full text-sm text-gray-600 truncate">{item.summary}</p>
        <div className="w-full flex justify-between">
          <span className="text-sm text-gray-700 w-auto truncate">{item.publisher['display-name']}</span>
          {item.publisher.validation === 'verified' &&
            <span className="w-8 flex justify-center items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
            </span>
          }
        </div>
      </div>
    </div>
  );
}
