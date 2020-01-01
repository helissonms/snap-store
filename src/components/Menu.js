import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faMusic,
  faPhotoVideo,
  faGamepad,
  faHandHoldingUsd,
  faUserClock,
  faTools,
  faNewspaper,
  faMicroscope,
  faHeartbeat,
  faUniversity,
  faUserCog,
  faWifi,
  faBook,
  faShieldAlt,
  faUserFriends,
  faCloud,
  faCode,
  faDice,
  faPalette
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const sections = {
    featured: {
      label: 'Featured',
      icon: faStar,
    },
    games: {
      label: 'Games',
      icon: faGamepad,
    },
    finance: {
      label: 'Finance',
      icon: faHandHoldingUsd,
    },
    productivity: {
      label: 'Productivity',
      icon: faUserClock,
    },
    utilities: {
      label: 'Utilities',
      icon: faTools,
    },
    'news-and-weather': {
      label: 'News and Weather',
      icon: faNewspaper,
    },
    science: {
      label: 'Science',
      icon: faMicroscope,
    },
    'health-and-fitness': {
      label: 'Health and Fitness',
      icon: faHeartbeat,
    },
    education: {
      label: 'Education',
      icon: faUniversity,
    },
    personalisation: {
      label: 'Personalisation',
      icon: faUserCog,
    },
    'devices-and-iot': {
      label: 'Devices and IoT',
      icon: faWifi,
    },
    'books-and-reference': {
      label: 'Books and Reference',
      icon: faBook,
    },
    security: {
      label: 'Security',
      icon: faShieldAlt,
    },
    'music-and-audio': {
      label: 'Music and Audio',
      icon: faMusic,
    },
    social: {
      label: 'Social',
      icon: faUserFriends,
    },
    'server-and-cloud': {
      label: 'Server and Cloud',
      icon: faCloud,
    },
    development: {
      label: 'Development',
      icon: faCode,
    },
    entertainment: {
      label: 'Entertainment',
      icon: faDice,
    },
    'photo-and-video': {
      label: 'Photo and Video',
      icon: faPhotoVideo,
    },
    'art-and-design': {
      label: 'Art and Design',
      icon: faPalette,
    },
  };

  const renderItems = () => {
    return Object.entries(sections)
      .map(([section, { label, icon }]) => (
        <li key={section}>
          <NavLink
            to={`/list/${section}`}
            className="block py-2 px-3 text-blue-700 border-r-4 ltr text-left hover:font-bold hover:border-blue-400 hover:bg-blue-100"
            activeClassName="font-bold border-blue-700 bg-blue-100"
          >
            <FontAwesomeIcon icon={icon} className="mr-2" />{label}
          </NavLink>
        </li>
      )
      );
  };

  return (
    <ul className="list-reset">
      {renderItems()}
    </ul>
  );
}
