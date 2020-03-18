import React from 'react';
import { Text } from '@';

export const render = () => <Text>A simple paragraph.</Text>;

render.story = {
  name: 'Default',
};

export const uppercase = () => <Text uppercase>a uppercase text.</Text>;

export const bold = () => <Text bold>All paragraph bold.</Text>;

export const inlineBold = () => <Text>Write a <b>bold line</b> text.</Text>

inlineBold.story = {
  name: 'Inline Bold'
}

export default {
  title: 'Text',
};