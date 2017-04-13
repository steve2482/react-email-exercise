import React from 'react';

import Email from './email';

export default function EmailList(props) {
  if (props.mailbox === undefined || null) {
    return (
      <div>
      </div>
    );
  } else {
    const mailbox = props.mailbox;
    const emails = Object.keys(props.emailData[mailbox]).map((emailId, index) => {
      const email = props.emailData[mailbox][emailId];
      return (
        <li key={index}>
          <Email mailboxRoute={mailbox} id={email.id} subject={email.title} from={email.from} />
        </li>
      );
    });
    return (
      <div>
        {emails}
      </div>
    );
  }
}