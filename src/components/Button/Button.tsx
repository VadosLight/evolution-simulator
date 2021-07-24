import React from 'react';
import './Button.css';

type PropType = {
  id?: string;
  size: 's' | 'm' | 'l';
  className?: string;
  content?: string | React.ReactChild;
  children?: string | React.ReactChild;
  submit?: true;
  onClick?: React.MouseEventHandler;
};

export const Button = ({
  id, className, content, children, submit, onClick, size,
}: PropType) => (
  <button id={id} className={`button__${size} ${className || ''}`.trim()} type={submit ? 'submit' : 'button'} onClick={onClick}>
    {children || content}
  </button>
);
