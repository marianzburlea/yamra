import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '.';

const story = storiesOf('Input', module)

story
  .add('default', () => <Input label="change me" placeholder="Hello! I'm an input!" />);