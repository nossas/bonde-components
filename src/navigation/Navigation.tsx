import styled from 'styled-components';
import theme from '../base/theme';

const Navigation = styled.div`
  display: flex;
  height: 50px;
  background-color: ${({ theme }) => theme.brand.dark};
  align-items: flex-end;
`;

Navigation.defaultProps = {
  theme,
};

export default Navigation;
