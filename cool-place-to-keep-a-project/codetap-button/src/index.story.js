import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '.';

storiesOf('The Amazing CodeTap Button', module)
  .add('default', () => <Button>{'Button that can be clicked'}</Button>);