import styled from 'styled-components';
import theme from '../base/theme';

const Body = styled.div`
  flex-grow: 1;
  padding: ${({ theme }) => theme.body.padding};
  overflow: hidden;
`;

Body.defaultProps = {
  theme,
};

export default Body;
