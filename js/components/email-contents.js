import React from 'react';

import EMAILDATA from '../emails';

export default function EmailContents(props) {
  const email = EMAILDATA[props.params.emailId];
  return (
    <div>
      <h3>Subject: {email.title}</h3>
      <p>From: {email.from}</p>
      <p>{email.content}</p>
    </div>
  );
}