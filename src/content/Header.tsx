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
  h1: annotate(styled(Text.withComponent('h1'))<TextProps>`
    font-size: 60px;
    font-weight: 900;
    line-height: 1;
    color: #000;
  `),
  h2: annotate(styled(Text.withComponent('h2'))<TextProps>`
    font-size: 36px;
    font-weight: 900;
    line-height: 1.22;
    color: #000;
  `),
  h3: annotate(styled(Text.withComponent('h3'))<TextProps>`
    font-size: 21px;
    font-weight: 800;
    line-height: 0.95;
    color: #000;
  `),
  h4: annotate(styled(Text.withComponent('h4'))<TextProps>`
    font-size: 18px;
    font-weight: 800;
    line-height: 1.39;
    color: #000;
  `),
  h5: annotate(styled(Text.withComponent('h5'))<TextProps>`
    font-size: 13px;
    line-height: 1.54;
    color: #424242;
  `),
  h6: annotate(styled(Text.withComponent('h6'))<TextProps>`
    font-size: 11px;
    line-height: 2.27;
    color: #424242;
  `),
};
