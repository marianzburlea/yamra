import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Button from '.';

const story = storiesOf('The Amazing CodeTap Button', module)

story.addDecorator(withKnobs)

story
  .add('default', () => (
    <Button disabled={boolean('Disabled', false)}>
      {text('Label', 'Hello Storybook')}
    </Button>
  ));