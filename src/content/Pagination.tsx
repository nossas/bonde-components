import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import RoundSelect from '../form/RoundSelect';
import theme from '../base/theme';

type Props = {
  goToPage: (arg: number) => void;
  pageIndex: number;
  pageSize: number;
  setPageSize: (arg: number) => void;
  totalPages: number;
};

const WrapPagination = styled.div`
  display: grid;
  margin: 20px 0px;
  grid-template-columns: 40px 80px minmax(100px, 650px) 80px 40px 150px;
  grid-gap: 15px;
`;

const WrapItems = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const StyledButton = styled(({ _active, ...rest }) => <Button {...rest} />)<{
  active: boolean;
}>`
  ${({ disabled }) =>
    disabled &&
    `
    background: none;
    color:  #aaa;
  `}
  ${({ active }) =>
    active &&
    `
    color:  #ee0099;
    &:focus, &:active {
      color:  #ee0099;
    }
  `}
  padding: 0;
`;

const WrapSelect = styled.div<{ theme: any }>`
  & .Select__control {
    border-color: ${({ theme }) => theme.brand.dark};
    &:hover {
      border-color: ${({ theme }) => theme.commons.dark};
    }
    &:focus {
      border-color: ${({ theme }) => theme.dark.border.focus};
    }
  }
  & .Select__single-value {
    color: ${({ theme }) => theme.brand.dark};
    &:hover {
      color: ${({ theme }) => theme.commons.dark};
    }
    &:focus {
      color: ${({ theme }) => theme.dark.border.focus};
    }
  }
  .Select__indicators svg path {
    fill: ${({ theme }) => theme.brand.dark};
    &:hover {
      fill: ${({ theme }) => theme.commons.dark};
    }
    &:focus {
      fill: ${({ theme }) => theme.dark.border.focus};
    }
  }
`;

WrapSelect.defaultProps = {
  theme,
};

const getItems = (page: number, totalPages: number) => {
  let startPage: number, endPage: number;
  if (totalPages <= 10) {
    // less than 10 total pages so show all
    startPage = 1;
    endPage = totalPages;
  } else {
    // more than 10 total pages so calculate start and end pages
    if (page <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (page + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = page - 5;
      endPage = page + 4;
    }
  }

  // create an array of pages to ng-repeat in the pager control
  return Array.from(Array(endPage + 1 - startPage), (_, i) => startPage + i);
};

const Pagination = ({
  goToPage,
  pageIndex,
  pageSize,
  totalPages,
  setPageSize,
}: Props): React.ReactElement => {
  const [items, setItems] = useState<number[]>(getItems(pageIndex, totalPages));

  const setPage = (page: number) => {
    const items = getItems(page, totalPages);
    setItems(items);
    return goToPage(page);
  };

  return (
    <WrapPagination>
      <StyledButton
        secondary
        onClick={() => setPage(0)}
        disabled={pageIndex === 0}
      >
        {'<<'}
      </StyledButton>{' '}
      <StyledButton
        secondary
        onClick={() => setPage(pageIndex - 1)}
        disabled={pageIndex === 0}
      >
        anterior
      </StyledButton>{' '}
      <WrapItems>
        {items.map((item: number, i: number) => (
          <StyledButton
            focus="#000"
            active={item - 1 === pageIndex}
            secondary
            onClick={() => setPage(item - 1)}
            key={`page-item-${i}`}
          >
            {item}
          </StyledButton>
        ))}
      </WrapItems>
      <StyledButton
        secondary
        onClick={() => setPage(pageIndex + 1)}
        disabled={pageIndex === totalPages - 1}
      >
        próxima
      </StyledButton>{' '}
      <StyledButton
        secondary
        onClick={() => setPage(totalPages - 1)}
        disabled={pageIndex === totalPages - 1}
      >
        {'>>'}
      </StyledButton>{' '}
      <WrapSelect>
        <RoundSelect
          options={[
            {
              value: 10,
              label: 'Mostrar 10',
            },
            {
              value: 20,
              label: 'Mostrar 20',
            },
            {
              value: 30,
              label: 'Mostrar 30',
            },
            {
              value: 40,
              label: 'Mostrar 40',
            },
            {
              value: 50,
              label: 'Mostrar 50',
            },
          ]}
          placeholder=""
          value={{
            value: pageSize,
            label: `Mostrar ${pageSize}`,
          }}
          onChange={e => setPageSize(Number(e.value))}
          menuPortalTarget={document.querySelector('body')}
        />
      </WrapSelect>
    </WrapPagination>
  );
};

export default Pagination;
