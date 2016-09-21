import React from 'react';

export default () => {
  const things = [
    'First',
    'Second',
    'Third',
  ];

  return (
    <ul>
      {things.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};
