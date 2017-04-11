import React from 'react';

import Folder from './folder';

export default function Sidebar(props) {
  const folderNames = Object.keys(props.folders);
  const folders = folderNames.map((folderId, index) => {
    const folder = folderId;
    return (
      <li key={index}>
        <Folder name={folder} />
      </li>
    );
  });
    
  return (
    <div className='sidebar box'>
      <ul>
        {folders}
      </ul>
    </div>
  );
}