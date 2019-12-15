import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faEdit,
  faMusic,
  faPhotoVideo,
  faCheckCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import './app.scss';

const mock = [
  {
    "id": "EaXqgt1lyCaxKaQCU349mlodBkDCXRcg",
    "title": "MicroK8s",
    "summary": "Kubernetes for workstations and appliances",
    "icon": "https://dashboard.snapcraft.io/site_media/appmedia/2018/11/b8a85a31-MicroK8s_SnapStore_icon.png",
    "publisher": {
      "display-name": "Canonical",
      "validation": "verified"
    },
  },
  {
    "id": "TWwObnuGiM3Urabc9hR2Xg2bJs6J8f2Y",
    "title": "Journey - Diary, Journal",
    "summary": "Your private diary, journal & companion.",
    "icon": "https://dashboard.snapcraft.io/site_media/appmedia/2018/11/icon.png",
    "publisher": {
      "display-name": "Two App Studio Pte. Ltd.",
      "validation": "verified"
    },
  },
  {
    "id": "XC73ux8XOHjoahd9keAyvM3LVkPBLTzy",
    "title": "remmina",
    "summary": "Remote Desktop Client",
    "icon": "https://dashboard.snapcraft.io/site_media/appmedia/2018/11/org.remmina.Remmina.png",

    "publisher": {
      "display-name": "Remmina Upstream Developers",
      "validation": "unproven"
    },
  },
];

function App() {
  const [list, setList] = useState(mock);

  const renderItems = () => {
    return list.map(item => (
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
            {item.publisher.validation === 'unproven' &&
              <span className="w-8 flex justify-center items-center">
                <FontAwesomeIcon icon={faExclamationCircle} className="text-gray-500" />
              </span>
            }
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div id="wrapper" className="h-full">
      <div id="left" className="h-screen bg-white shadow-md shadown-blue">
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
      </div>
      <div id="right" className="h-screen bg-blue-100 p-3 flex flex-wrap content-start justify-center">
        {renderItems()}
      </div>
    </div>
  );
}

export default App;
