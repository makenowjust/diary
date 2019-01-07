import React from 'react';
import {storiesOf} from '@storybook/react';

import Footer from '../components/footer';

storiesOf('Footer', module).add('full', () => (
  <Footer author="TSUYUSATO Kitsune" github="MakeNowJust" year="2016-2019" />
));
