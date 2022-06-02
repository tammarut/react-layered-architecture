import React from 'react';

type PersonProps = { name: string };

function Person(props: PersonProps) {
  const { name } = props;
  return <div role="contentinfo">My name is {name}</div>;
}

export default Person;
