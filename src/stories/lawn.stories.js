import React from 'react';

import Lawn from '../components/lawn';

export default {
  title: 'Lawn',
  component: Lawn,
};

const today = new Date(Date.UTC(2019, 0, 7));

const Template = args => <Lawn {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  posts: [],
  today,
};

export const Today = Template.bind({});
Today.args = {
  posts: [{date: '2019-01-07', slug: '/2019-01-07-diary', textSize: 512}],
  today,
};

export const Random = Template.bind({});
Random.args = (() => {
  const posts = [];
  const localToday = new Date(today);

  /* eslint-disable-next-line unicorn/prefer-math-trunc, no-bitwise */
  let x = localToday.getTime() | 0;
  for (let i = 0; i <= 356; i++) {
    const date = new Date(localToday.getTime());
    date.setDate(date.getDate() - i);
    const y = date.getFullYear();
    const m = `${date.getMonth() + 1}`.padStart(2, '0');
    const d = `${date.getDate()}`.padStart(2, '0');
    const s = `${y}-${m}-${d}`;

    /* eslint-disable-next-line unicorn/prefer-math-trunc, no-bitwise */
    x = (x * 48_271) | 0;
    if (x > 1000) {
      posts.push({
        date: s,
        slug: `/${s}-diary`,
        textSize: 2 ** ((x % 5) + 7),
      });
    }
  }

  return {posts, today};
})();
