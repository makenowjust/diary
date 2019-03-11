import {addDecorator, configure} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';

const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

global.__PATH_PREFIX__ = '';
window.___navigate = pathname => {
  action('navigate')(pathname);
};

if (process.env.NODE_ENV !== 'test') {
  addDecorator(centered);

  addDecorator(withInfo);
  addDecorator(withKnobs);
}

configure(loadStories, module);
