import styled from 'styled-components';
import theme from '../base/theme';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.body.background.main};
`;

Main.defaultProps = {
  theme,
};

export default Main;
