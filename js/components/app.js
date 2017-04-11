import React from 'react';

import EMAILDATA from '../emails';
import EmailWindow from './email-window';


export default function App(props) {
  return (
		<div>
      <h1>Email App</h1>
      <div>
        <EmailWindow mailbox={props.params.mailbox_name} emailData={EMAILDATA} />
      </div>
    </div>
  );
}