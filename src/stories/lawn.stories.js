import React from 'react';
import {storiesOf} from '@storybook/react';
import {date} from '@storybook/addon-knobs';

import Lawn from '../components/lawn';

const today = new Date(Date.UTC(2019, 0, 7));

storiesOf('Lawn', module)
  .add('empty', () => <Lawn posts={[]} today={new Date(date('today', today))} />)
  .add('today', () => (
    <Lawn
      posts={[{date: '2019-01-07', slug: '/2019-01-07-diary', textSize: 512}]}
      today={new Date(date('today', today))}
    />
  ))
  .add('random', () => {
    const posts = [];
    const localToday = new Date(date('today', today));

    /* eslint-disable-next-line unicorn/prefer-math-trunc */
    let x = localToday.getTime() | 0;
    for (let i = 0; i <= 356; i++) {
      const date = new Date(localToday.getTime());
      date.setDate(date.getDate() - i);
      const y = date.getFullYear();
      const m = `${date.getMonth() + 1}`.padStart(2, '0');
      const d = `${date.getDate()}`.padStart(2, '0');
      const s = `${y}-${m}-${d}`;

      /* eslint-disable-next-line unicorn/prefer-math-trunc */
      x = (x * 48271) | 0;
      if (x > 1000) {
        posts.push({
          date: s,
          slug: `/${s}-diary`,
          textSize: 2 ** ((x % 5) + 7),
        });
      }
    }

    return <Lawn posts={posts} today={localToday} />;
  });
