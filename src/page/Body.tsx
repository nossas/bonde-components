import styled from 'styled-components';
import theme from '../base/theme';

const Body = styled.div`
  flex-grow: 1;
  padding: 0 ${({ theme }) => theme.body.padding}px;
  overflow: hidden;
`;

Body.defaultProps = {
  theme,
};

export default Body;
