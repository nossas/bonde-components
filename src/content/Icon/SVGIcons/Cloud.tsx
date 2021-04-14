import React from 'react';

const Icon = ({ className }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className + ' fill'}
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
  >
    <path
      fill="#000"
      d="M17.754 5.123a8.81 8.81 0 00-8.682 7.119 5.55 5.55 0 00-2.388-.413c-2.93.13-5.252 2.627-5.252 5.687a5.373 5.373 0 005.36 5.362h11.374c4.645 0 8.444-3.777 8.444-8.444v-.065c0-.13.022-.239.022-.369 0-4.905-3.994-8.877-8.878-8.877zm7.076 9.116V14.564c-.065 3.625-3.039 6.534-6.663 6.534H6.792a3.585 3.585 0 01-3.582-3.582c0-2.062 1.607-3.82 3.56-3.907h.174c.846 0 1.628.283 2.3.782.261.195.608.239.912.108.304-.13.5-.434.521-.76a7.068 7.068 0 017.076-6.815c3.907 0 7.098 3.19 7.098 7.098 0 .065 0 .13-.022.217z"
    ></path>
  </svg>
);

Icon.displayName = 'Icon.Cloud';

export default Icon;
