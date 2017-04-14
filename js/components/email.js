import React from 'react';
import {Link} from 'react-router';

export default function Email(props) {
  return (
    <div>
      <Link to={props.mailboxRoute + '/' + props.id}>
        <h4>{props.subject}</h4>
      </Link>
        <p>{props.from}</p>      
    </div>
  );
}
