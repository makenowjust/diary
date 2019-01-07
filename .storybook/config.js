import {configure} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

global.__PATH_PREFIX__ = '';
window.___navigate = pathname => {
  action('navigate')(pathname);
};
configure(loadStories, module);
