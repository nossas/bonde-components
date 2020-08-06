import React from 'react';

const Icon = ({ className }: any) => (
  <svg
    className={className + ' fill'}
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9074 3.75557C14.2585 1.36903 11.6451 0 8.73789 0C5.8307 0 3.21731 1.36903 1.56833 3.75557C-0.0725558 6.13005 -0.451442 9.13621 0.55279 11.7921C0.821398 12.5174 1.24838 13.2221 1.81884 13.8824L8.16291 21.3341C8.30639 21.5028 8.51661 21.6 8.73789 21.6C8.95916 21.6 9.16938 21.5028 9.31286 21.3341L15.6552 13.8844C16.2282 13.2203 16.6546 12.5164 16.921 11.7969C17.9272 9.13621 17.5483 6.13005 15.9074 3.75557ZM15.5067 11.268C15.3013 11.8231 14.9659 12.3719 14.5105 12.8998L14.5069 12.9038L8.73789 19.6799L2.96528 12.8996C2.51012 12.3722 2.17477 11.8234 1.96734 11.263C1.13683 9.06647 1.45202 6.58096 2.81071 4.61455C4.17366 2.64187 6.33417 1.51048 8.73789 1.51048C11.1416 1.51048 13.3018 2.64182 14.6648 4.61455C16.0238 6.58096 16.3392 9.06647 15.5067 11.268Z"
      fill="black"
    />
    <path
      d="M8.73795 4.48119C6.40599 4.48119 4.50857 6.37836 4.50857 8.71057C4.50857 11.0428 6.40574 12.94 8.73795 12.94C11.0702 12.94 12.9673 11.0428 12.9673 8.71057C12.9673 6.37862 11.0699 4.48119 8.73795 4.48119ZM8.73795 11.4294C7.23878 11.4294 6.01905 10.2097 6.01905 8.71053C6.01905 7.21136 7.23878 5.99163 8.73795 5.99163C10.2371 5.99163 11.4568 7.21136 11.4568 8.71053C11.4568 10.2097 10.2371 11.4294 8.73795 11.4294Z"
      fill="black"
    />
  </svg>
);

Icon.displayName = 'Icon.Location';

export default Icon;
