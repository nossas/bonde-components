import styled from 'styled-components';
import theme from './theme';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 ${props => props.theme.paddingX};
  background-color: ${props => props.theme.body};
`;

Body.defaultProps = {
  theme,
};

export default Body;
