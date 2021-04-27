import React from 'react';

const Icon = ({ className }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className + ' fill'}
    width="18"
    height="28"
    fill="none"
    viewBox="0 0 16 25"
  >
    <g clipPath="url(#clip0)">
      <path
        fill="#000"
        d="M15.52 9.774a.78.78 0 00-.681-.399h-5.4L10.15.846A.78.78 0 008.716.357L.126 13.638a.78.78 0 00.655 1.206h5.404l-.716 9.315a.781.781 0 001.446.467l8.59-14.062a.782.782 0 00.015-.79zM7.276 21.038l.532-6.915a.782.782 0 00-.779-.842H2.217l6.118-9.458-.522 6.268a.782.782 0 00.778.847h4.855l-6.17 10.1z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H15.62V25H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

Icon.displayName = 'Icon.BoltUnfilled';

export default Icon;
