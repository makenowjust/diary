import React from 'react';

import Paginator from '../components/paginator';

export default {
  title: 'Paginator',
  component: Paginator,
};

const Template = args => <Paginator {...args} />;

export const PrevOnly = Template.bind({});
PrevOnly.args = {
  prev: '/prev',
};

export const NextOnly = Template.bind({});
NextOnly.args = {
  next: '/next',
};

export const PrevAndNext = Template.bind({});
PrevAndNext.args = {
  prev: '/prev',
  next: '/next',
};
