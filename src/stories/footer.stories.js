import React from 'react';

import Footer from '../components/footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = args => <Footer {...args} />;

export const Complete = Template.bind({});
Complete.args = {
  author: 'TSUYUSATO Kitsune',
  github: 'MakeNowJust',
  year: '2016-2019',
};
