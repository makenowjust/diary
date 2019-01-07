import React from 'react';
import {storiesOf} from '@storybook/react';

import Lawn from '../components/lawn';

storiesOf('Lawn', module).add('empty', () => <Lawn posts={[]} />);
