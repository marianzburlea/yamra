import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '.';

const story = storiesOf('Input', module)

story
  .add('default', () => <Input placeholder="Hello! I'm an input!" />);