import React from 'react';

const Message = (prop: { message: string }): any => {
  return <p>{prop.message}</p>;
};

export default Message;
