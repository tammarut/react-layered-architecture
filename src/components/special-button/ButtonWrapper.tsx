import React from 'react';

type DetailedProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Title = { title: string };

const ButtonWrapper: React.FunctionComponent<DetailedProps & Title> = (props) => {
  const { title, ...rest } = props;
  return <button {...rest}>{title}</button>;
};

export default ButtonWrapper;
