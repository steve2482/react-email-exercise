import React from 'react';

import EMAILDATA from '../emails';
import {EmailWindow} from './email-window';


export default function App() {
  return (
		<div>
      <h1>Email App</h1>
      <div>
        <EmailWindow emailData={EMAILDATA} />
      </div>
    </div>
  );
}