import React from 'react';
import {storiesOf} from '@storybook/react';

import Header from '../components/header';

storiesOf('Header', module).add('full', () => (
  <Header
    title="℘ make now just"
    quote="if you wanna break free you better listen to me"
    posts={[{date: '2019-01-07', slug: '/2019-01-07-diary', textSize: 512}]}
    today={new Date(2019, 0, 7)}
  />
));
