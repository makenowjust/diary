import React from 'react';
import {storiesOf} from '@storybook/react';

import Paginator from '../components/paginator';

storiesOf('Paginator', module)
  .add('prev only', () => <Paginator prev="/prev" />)
  .add('next only', () => <Paginator next="/next" />)
  .add('prev & next', () => <Paginator prev="/prev" next="/next" />);
