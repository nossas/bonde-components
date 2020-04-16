import styled from 'styled-components';

interface RowProps {
  spacing?: 'between' | 'around';
  flex?: 'start' | 'end';
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  ${props => props.spacing && `justify-content: space-${props.spacing};`}
  ${props => props.flex && `justify-content: flex-${props.flex};`}
`;

export default Row;
