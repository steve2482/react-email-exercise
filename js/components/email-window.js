import React from 'react';

import EmailList from './email-list';
import SideBar from './sidebar';

export default function EmailWindow(props) {
  return (
    <div>
      <div>
        <SideBar folders={props.emailData} />
      </div>
      <div className='email-window box'>
        <EmailList mailbox={props.mailbox} emailData={props.emailData} />
      </div>
    </div>
  );
}