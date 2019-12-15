import React, { useState } from 'react';
import './app.scss';
import Menu from './components/Menu';
import ListItem from './components/ListItem';

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

function App({ apiDetails }) {
  const [list, setList] = useState(mock);

  return (
    <div id="wrapper" className="h-full">
      <div id="left" className="h-screen bg-white shadow-md shadown-blue">
        <Menu />
      </div>
      <div id="right" className="h-screen bg-blue-100 p-3 flex flex-wrap content-start justify-center">
        {list.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
