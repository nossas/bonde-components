import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import CommunitiesDropdown from './CommunitiesDropdown';
import UserDropdown from './UserDropdown';
import Logout from './Logout';
import { BaseUIProperties } from './types';

import Main from '../page/Main';
import Footer from '../page/Footer';
import Navbar from '../page/Navbar';

interface ContentProps {
  bgColor: string;
}

const Content = styled.div<ContentProps>`
  display: flex;
  flex-grow: 1;
  background-color: ${(props: ContentProps) => props.bgColor};
`;

const BaseUI: React.FC<BaseUIProperties> = ({
  children,
  bgColor,
  disableNavigation,
  indexRoute,
  isMobile,
  session,
  languageTool: LanguageTool,
}) => {
  return (
    <Main>
      <Navbar
        indexRoute={indexRoute}
        brand={disableNavigation ? 'default' : 'small'}
      >
        <Flex direction="row" grow={1} justify="space-between">
          {disableNavigation ? (
            <div />
          ) : (
            <CommunitiesDropdown session={session} />
          )}
          {isMobile ? (
            <Logout session={session} />
          ) : (
            <UserDropdown session={session} />
          )}
        </Flex>
      </Navbar>
      <Content bgColor={bgColor || 'rgb(247,247,247)'}>{children}</Content>
      {LanguageTool ? (
        <Footer>
          <LanguageTool />
        </Footer>
      ) : (
        <Footer />
      )}
    </Main>
  );
};

BaseUI.defaultProps = {
  disableNavigation: false,
};

export default BaseUI;
