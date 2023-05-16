import React from 'react';

export const LogButton = ({ onClick, typeofclick }) => {
  return <button onClick={onClick}>{typeofclick}</button>;
};