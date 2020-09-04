import styled from 'styled-components';
import theme from '../base/theme';

const Navigation = styled.div`
  display: flex;
  height: 50px;
  background-color: ${({ theme }) => theme.brand.dark};
  padding: 0 ${({ theme }) => theme.body.padding}px;
`;

Navigation.defaultProps = {
  theme,
};

export default Navigation;
