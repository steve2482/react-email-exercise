import React from 'react';

import Email from './email';

export default function EmailList(props) {
  if (props.params.mailbox_name === undefined || null) {
    return(
      <div className="mailbox-is-null">
      </div>
    );
  } else {
    const mailbox = props.params.mailbox_name;
    const emails = Object.keys(props.route.emailData[mailbox]).map((emailId, index) => {
      const email = props.route.emailData[mailbox][emailId];
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