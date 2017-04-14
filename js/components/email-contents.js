import React from 'react';

import EMAILDATA from '../emails';

export default function EmailContents(props) {
  console.log(props);
  const email = EMAILDATA[props.params.mailbox_name][props.params.emailId];
  return (
    <div>
      <h3>Subject: {email.title}</h3>
      <p><strong>From:</strong> {email.from}</p>
      <p>{email.content}</p>
    </div>
  );
}