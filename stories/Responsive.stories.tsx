import React from 'react';
import { Row, Col, Grid, Header } from '@';
import styled from 'styled-components';

interface BlockProps {
  bgColor: string;
};

const Block = styled.div<BlockProps>`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  background-color: #c7c7c7;
  border: 1px solid black;
  padding: 10px 0;
`;

export const grid = () =>
  <>
    <Header.h3>Row 1</Header.h3>
    <Row>
      <Col size={[6, 6]}>
        <Block>
          <Header.h2>{`[6, 6, 12, 12]`}</Header.h2>
        </Block>
      </Col>
      <Col size={[6, 6]}>
        <Block>
          <Header.h2>{`[6, 6, 12, 12]`}</Header.h2>
        </Block>
      </Col>
      <Col size={[6]}>
        <Block>
          <Header.h2>{`[6, 12, 12, 12]`}</Header.h2>
        </Block>
      </Col>
    </Row>
    <Header.h3>Row 2</Header.h3>
    <Row>
      <Col size={[6, 8, 10]}>
        <Block>
          <Header.h2>{`[6, 8, 10, 12]`}</Header.h2>
        </Block>
      </Col>
    </Row>
    <Header.h3>Row 3</Header.h3>
    <Row>
      <Col size={[6, 3, 6]}>
        <Block>
          <Header.h2>{`[6, 3, 6, 12]`}</Header.h2>
        </Block>
      </Col>
      <Col size={[4, 6, 6]}>
        <Block>
          <Header.h2>{`[4, 6, 6, 12]`}</Header.h2>
        </Block>
      </Col>
      <Col size={[2, 3]} collapse='sm xs'>
        <Block>
          <Header.h2>{`[2, 3, 12, 12]`}</Header.h2>
        </Block>
      </Col>
    </Row>
  </>
;

export const spacing = () =>
  <>
    <Header.h3>Spacing between</Header.h3>
    <Row spacing='between'>
      <Col size={[6, 6]}>
        <Block>
          <Header.h2>{`[6, 6, 12, 12]`}</Header.h2>
        </Block>
      </Col>
      <Col size={[3, 3]}>
        <Block>
          <Header.h2>{`[3, 3, 12, 12]`}</Header.h2>
        </Block>
      </Col>
    </Row>
    <Header.h3>Spacing around</Header.h3>
    <Row spacing='around'>
      <Col size={[3, 3]}>
        <Block>
          <Header.h2>{`[3, 3, 12, 12]`}</Header.h2>
        </Block>
      </Col>
      <Col size={[6, 6]}>
        <Block>
          <Header.h2>{`[6, 6, 12, 12]`}</Header.h2>
        </Block>
      </Col>
    </Row>
  </>
;

export const flex = () =>
  <>
    <Header.h3>Flex start</Header.h3>
    <Row flex='start'>
      <Col size={[6, 6]}>
        <Block>
          <Header.h2>{`[6, 6, 12, 12]`}</Header.h2>
        </Block>
      </Col>
      <Col size={[3, 3]}>
        <Block>
          <Header.h2>{`[3, 3, 12, 12]`}</Header.h2>
        </Block>
      </Col>
    </Row>
    <Header.h3>Flex end</Header.h3>
    <Row flex='end'>
      <Col size={[3, 3]}>
        <Block>
          <Header.h2>{`[3, 3, 12, 12]`}</Header.h2>
        </Block>
      </Col>
      <Col size={[6, 6]}>
        <Block>
          <Header.h2>{`[6, 6, 12, 12]`}</Header.h2>
        </Block>
      </Col>
    </Row>
  </>
;

export default {
  title: 'Responsive',
};