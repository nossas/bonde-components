import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const eventListener = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', eventListener);

    return () => {
      window.removeEventListener('resize', eventListener);
    };
  });

  return width;
};

interface Medias {
  [index: string]: string;
}

const mediaQueries = (collapse: string) => (styles: string) => {
  const medias: Medias = {
    xs: `
      @media only screen and (max-width: 575.98px) {
        ${styles}
      };
    `,
    sm: `
      @media only screen and (min-width: 576px) and (max-width: 767.98px) {
        ${styles}
      };
    `,
    md: `
      @media (min-width: 768px) and (max-width: 991.98px) {
        ${styles}
      };
    `,
    lg: `
      @media (min-width: 992px) {
        ${styles}
      };
    `,
  };

  return collapse
    .split(' ')
    .map((size: string) => medias[size])
    .join('');
};

// [lg: number, md: number, sm: number, xs: number]
const getFlexBasis = (width: number, sizes: number[] = []) => {
  let size = 0;

  if (width > 991.98) {
    // lg
    size = sizes[0] || 12;
  } else if (width >= 768 && width <= 991.98) {
    // md
    size = sizes[1] || 12;
  } else if (width >= 576 && width <= 767.98) {
    // sm
    size = sizes[2] || 12;
  } else if (width <= 575.98) {
    // xs
    size = sizes[3] || 12;
  }

  return `${8.33333333 * size}%`;
};

interface ColStylesProps {
  flexBasis?: string;
  collapse?: string;
}

const Styles = styled.div<ColStylesProps>`
  ${props =>
    props.flexBasis &&
    `
    flex-basis: ${props.flexBasis};
  `}
  ${props =>
    props.collapse &&
    mediaQueries(props.collapse)(`
    display: none;
  `)}
`;

const Col = ({ children, collapse, size }: any) => {
  const width = useResize();
  const flexBasis = getFlexBasis(width, size || []);

  return (
    <Styles flexBasis={flexBasis} collapse={collapse}>
      {children}
    </Styles>
  );
};

export default Col;
