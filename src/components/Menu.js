import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faEdit,
  faMusic,
  faPhotoVideo
} from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  return (
    <ul className="list-reset">
      <li >
        <a href="#" className="block py-2 px-3 text-blue-700 font-bold border-blue-500 bg-blue-100 border-r-4">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Featured
        </a>
      </li>
      <li >
        <a href="#" className="block py-2 px-3 text-blue-700 hover:font-bold hover:border-blue-400 hover:bg-blue-100 border-r-4">
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Productivity
        </a>
      </li>
      <li >
        <a href="#" className="block py-2 px-3 text-blue-700 hover:font-bold hover:border-blue-400 hover:bg-blue-100 border-r-4">
          <FontAwesomeIcon icon={faMusic} className="mr-2" />
          Music and Audio
        </a>
      </li>
      <li >
        <a href="#" className="block py-2 px-3 text-blue-700 hover:font-bold hover:border-blue-400 hover:bg-blue-100 border-r-4">
          <FontAwesomeIcon icon={faPhotoVideo} className="mr-2" />
          Photo and Video
        </a>
      </li>
    </ul>
  );
}
