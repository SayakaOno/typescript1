import messageHoc from './Hoc';
import React from 'react';
const example = (props: any): any => (
  <p>
    {props.name},{props.message}
  </p>
);

const Message = messageHoc(example);

export default Message;
