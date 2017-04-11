import React from 'react';

export default function Email(props) {
  return (
    <div>
      <h4>{props.subject}</h4>
      <p>{props.from}</p>
    </div>
  );
}