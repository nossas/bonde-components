import styled from 'styled-components';

const Navigation = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, max(80px));
  height: 50px;
  background-color: ${({ theme }) => theme.brand.dark};
  grid-column-gap: 15px;
  align-items: end;
  padding: 0 ${({ theme }) => theme.body.padding}px;
`;

export default Navigation;
