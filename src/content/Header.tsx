import styled from 'styled-components';
import theme from '../base/theme';
import Text, { TextProps } from './Text';

const annotate = (Component: any) => {
  Component.defaultProps = {
    theme,
  };

  return Component;
};

export default {
  H1: annotate(styled(Text.withComponent('h1'))<TextProps>`
    font-size: 60px;
    font-weight: 900;
    line-height: 1;
    color: #000;
  `),
  H2: annotate(styled(Text.withComponent('h2'))<TextProps>`
    font-size: 36px;
    font-weight: 900;
    line-height: 1.22;
    color: #000;
  `),
  H3: annotate(styled(Text.withComponent('h3'))<TextProps>`
    font-size: 21px;
    font-weight: 800;
    line-height: 0.95;
    margin-bottom: 12px;
    color: #000;
  `),
  H4: annotate(styled(Text.withComponent('h4'))<TextProps>`
    font-size: 18px;
    font-weight: 800;
    line-height: 1.39;
    margin-bottom: 5px;
    color: #000;
  `),
  H5: annotate(styled(Text.withComponent('h5'))<TextProps>`
    font-size: 13px;
    line-height: 18px;
    color: #424242;
    letter-spacing: 0.005em;
    font-weight: 800;
  `),
  H6: annotate(styled(Text.withComponent('h6'))<TextProps>`
    font-size: 11px;
    line-height: 2.27;
    color: #424242;
  `),
};
