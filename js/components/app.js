import React from 'react';

import EMAILDATA from '../emails';
import SideBar from './sidebar';


export default function App(props) {
  return (
		<div>
      <h1>Email App</h1>
      <div>
        <SideBar folders={EMAILDATA} />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}